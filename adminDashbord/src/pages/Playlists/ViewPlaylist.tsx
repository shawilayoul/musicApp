
import axios from "axios";
import { useEffect, useState } from "react"
import { FaPlay } from "react-icons/fa";
import { useParams } from "react-router-dom";


interface Track {
  id: string;
  title: string;
  artist: string;
  url: string;
  artwork: string;
}
interface PlaylistItem {
  id: string;
  playlistId: string;
  track: Track; // Track is a nested property
}
const ViewPlaylist = () => {
  const [allSongs, setAllSongs] = useState<PlaylistItem[]>([]);
  const { id } = useParams()

  //console.log(allSongs?.tracks)

  useEffect(() => {
    const getUserPlaylist = async () => {
      try {
        const response = await axios.get(`https://musicserver-h836.onrender.com/playlist/playlistTracks/${id}`);
        setAllSongs(response.data.tracks)
      } catch (error) {
        console.log('error getting user platlist', error)
      }
    }
    getUserPlaylist()
  }, [id])

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">All Songs</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left">Play</th>
              <th className="py-3 px-4 text-left">Artwork</th>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Artist</th>
            </tr>
          </thead>
          <tbody>
            {allSongs.map((item) => (
              <tr key={item.track.id} className="hover:bg-gray-100 transition-colors">
                <td className="py-3 px-4 text-center cursor-pointer">
                  <FaPlay className="text-blue-600 hover:text-blue-800" />
                </td>
                <td className="py-3 px-4">
                  <img
                    src={item.track.artwork}
                    alt={`${item.track.title} artwork`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </td>
                <td className="py-3 px-4 text-gray-800">{item.track.title}</td>
                <td className="py-3 px-4 text-gray-600">{item.track.artist}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewPlaylist



