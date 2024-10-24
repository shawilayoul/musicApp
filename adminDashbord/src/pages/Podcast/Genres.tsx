
import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const Genres = () => {
  const [podcasts, setPodcasts] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const getPodcasts = async () => {
      try {
        const response = await axios.get('https://musicserver-h836.onrender.com/podcast');
        setPodcasts(response.data)
      } catch (error) {
        console.log('error getting podcasts', error)
      }
    }
    getPodcasts()
  }, [])

  return (
    <div className="p-4 bg-gray-100 min-h-screen ">
      <h2 className="text-xl font-bold mb-4 text-gray-900 text-center border-b-2 pb-2">All Podcasts</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {podcasts.map(({ title, description, artwork, id }) => (
          <div
            key={id}
            className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => navigate(`/podcast/view/${id}`)}
          >
            <img
              src={artwork}
              alt={`${title} artwork`}
              className="w-full h-40  object-cover transition-transform duration-200 hover:scale-105"
            />
            <div className="flex flex-col items-center p-3">
              <h3 className="text-lg font-semibold text-white uppercase">{title}</h3>
              <p className="text-sm text-blue-200 capitalize">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Genres