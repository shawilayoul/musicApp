
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
    <div className="p-2">
      <h2 className="text-xl font-medium mb-2">All Songs</h2>
      <table className="shadow-md p-2" cellPadding="10" cellSpacing="0">
        <thead >
          <tr>
            <th>Play</th>
            <th>Artwork</th>
            <th>Title</th>
            <th>Artist</th>
          </tr>
        </thead>
        <tbody>
          {allSongs.map((item) => (
            <tr key={item?.track.id}>
              <td>
                <FaPlay />
              </td>
              <td>
                <img src={item.track.artwork} alt={`${item.track.title} artwork`} width="50" />
              </td>
              <td>{item.track.title}</td>
              <td>{item.track.artist}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ViewPlaylist



