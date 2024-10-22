import axios from "axios";
import { useEffect, useState } from "react"
import { FaPlay } from "react-icons/fa";

const SongDetail = () => {
  const [allSongs, setAllSongs] = useState([]);

  useEffect(() => {
    const getUserPlaylist = async () => {
      try {
        const response = await axios.get('https://musicserver-h836.onrender.com/track');
        setAllSongs(response.data)
      } catch (error) {
        console.log('error getting user platlist', error.response ? error.response.data : error.message)
      }
    }
    getUserPlaylist()
  }, [])

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
          {allSongs.map(({ title, artwork, artist, _id }) => (
            <tr key={_id}>
              <td>
                <FaPlay/>
              </td>
              <td>
                <img src={artwork} alt={`${title} artwork`} width="50" />
              </td>
              <td>{title}</td>
              <td>{artist}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SongDetail

