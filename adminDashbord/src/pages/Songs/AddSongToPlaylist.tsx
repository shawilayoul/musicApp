import axios from "axios";
import { useEffect, useState } from "react"
import { toast } from "react-toastify";

interface Playlist {
  id: string;
  name: string;
}

interface Track {
  id: string;
  title: string;
  artist: string;
}

const AddSongToPlaylist = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [selectedPlaylistId, setSelectedPlaylistId] = useState('')
  const [selectedTrackId, setSelectedTrackId] = useState('')

  useEffect(() => {
    getAllPlaylist()
    getAllTracks()
  }, [])

  const getAllPlaylist = async () => {
    try {
      const response = await axios.get('https://musicserver-h836.onrender.com/playlist/66fc66651c032413823ea923');
      setPlaylists(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getAllTracks = async () => {
    try {
      const response = await axios.get('https://musicserver-h836.onrender.com/track')
      setTracks(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleAddTrackToPlaylist = async () => {
    if (selectedPlaylistId && selectedTrackId) {
      try {
        await axios.post(`https://musicserver-h836.onrender.com/playlist/${selectedPlaylistId}/addTrack/${selectedTrackId}`)
        toast.success('Track added to playlist successfully!')
      } catch (error) {
        toast.error('Failed to add track to playlist.')
        console.log(error)
      }
    } else {
      toast.error('please select both a playlist and a track')
    }
  }
  return (
    <div>
      <h3>Add Track to Playlist</h3>
      <div>
        <label htmlFor="playlist">Select Playlist:</label>
        <select
          id="playlist"
          value={selectedPlaylistId}
          onChange={(e) => setSelectedPlaylistId(e.target.value)}
        >
          <option>-- Select playlist --</option>
          {
            playlists.map((playlist) => (
              <option key={playlist?.id} value={playlist?.id}>
                {playlist.name}
              </option>
            ))
          }
        </select>
      </div>
      <div>
        <label htmlFor="track">Select Track:</label>
        <select
          id="track"
          value={selectedTrackId}
          onChange={(e) => setSelectedTrackId(e.target.value)}
        >
          <option>-- Select Track --</option>
          {
            tracks.map((track) => (
              <option key={track?.id} value={track?.id}>
                {track.title}
                {track.artist}
              </option>
            ))
          }
        </select>
      </div>
      <button onClick={handleAddTrackToPlaylist}>Add Track to Playlist</button>
    </div>
  )
}

export default AddSongToPlaylist 