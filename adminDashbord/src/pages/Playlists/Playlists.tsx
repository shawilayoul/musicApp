import axios from "axios";
import { useEffect, useState } from "react"

const Playlists = () => {
  const [userPlaylist, setUserPlaylist] = useState([]);

  useEffect(() => {
    const getUserPlaylist = async () => {
      try {
        const response = await axios.get('http://localhost:3000/playlist/66fc66651c032413823ea923');
        setUserPlaylist(response.data)
      } catch (error) {
        console.log('error getting user platlist', error)
      }
    }
    getUserPlaylist()
  }, [])

  return (
    <div>
      <h2 className="py-2 text-xl font-medium">All Playlists</h2>
      <div className="playlist flex gap-4">
        {
          userPlaylist.map(({ name, genre, image }) => {
            return (
                  <div className="bg-blue-400 rounded-md p-1 shadow-md flex flex-col items-center w-[150px]">
                    <div>
                      <img src={image} alt="playlistImage" className="w-[150px] rounded-sm" />
                    </div>
                    <div className="flex flex-col items-center gap-1 mt-2 text-white">
                      <h3>{name}</h3>
                      <p>{genre}</p>
                    </div>
                  </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Playlists