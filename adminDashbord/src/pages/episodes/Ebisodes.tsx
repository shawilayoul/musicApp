
import axios from "axios";
import { useEffect, useState } from "react"
import { FaPlay } from "react-icons/fa";

const imageUrl =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIN6iFDbA-lmBLINiQlt8dSO5qWkqWx003dhJXZN81Sx3HqHCq6yTSC4ZlyBzqeSoGCno&usqp=CAU';
  
const Ebisodes = () => {
  const [ebisodes, setEbisodes] = useState([]);
  useEffect(() => {
    const getUserPlaylist = async () => {
      try {
        const response = await axios.get('https://musicserver-h836.onrender.com/episode');
        setEbisodes(response.data)
      } catch (error) {
        console.log('error getting episode', error)
      }
    }
    getUserPlaylist()
  }, [])


  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">All Ebisodes</h2>
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 text-left text-gray-700">Play</th>
              <th className="py-3 px-4 text-left text-gray-700">Artwork</th>
              <th className="py-3 px-4 text-left text-gray-700">Title</th>
              <th className="py-3 px-4 text-left text-gray-700">Description</th>
            </tr>
          </thead>
          <tbody>
            {ebisodes.map(({ title, artwork, description, _id }) => (
              <tr key={_id} className="hover:bg-gray-100 transition-colors">
                <td className="py-3 px-4">
                  <FaPlay className="text-blue-500 cursor-pointer hover:text-blue-700" />
                </td>
                <td className="py-3 px-4">
                  <img
                    src={artwork || imageUrl}
                    alt={`${title} artwork`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </td>
                <td className="py-3 px-4 text-gray-800">{title}</td>
                <td className="py-3 px-4 text-gray-600">{description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>)
}

export default Ebisodes

