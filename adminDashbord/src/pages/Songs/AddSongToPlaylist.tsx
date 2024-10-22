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
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
    <h3 className="text-xl font-semibold mb-4 text-gray-800">Add Track to Playlist</h3>
    
    <div className="mb-4">
      <label htmlFor="playlist" className="block text-sm font-medium text-gray-700 mb-1">Select Playlist:</label>
      <select
        id="playlist"
        value={selectedPlaylistId}
        onChange={(e) => setSelectedPlaylistId(e.target.value)}
        className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
      >
        <option>-- Select playlist --</option>
        {playlists.map((playlist) => (
          <option key={playlist?.id} value={playlist?.id}>
            {playlist.name}
          </option>
        ))}
      </select>
    </div>
  
    <div className="mb-4">
      <label htmlFor="track" className="block text-sm font-medium text-gray-700 mb-1">Select Track:</label>
      <select
        id="track"
        value={selectedTrackId}
        onChange={(e) => setSelectedTrackId(e.target.value)}
        className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
      >
        <option>-- Select Track --</option>
        {tracks.map((track) => (
          <option key={track?.id} value={track?.id}>
            {track.title} by {track.artist}
          </option>
        ))}
      </select>
    </div>
  
    <button
      onClick={handleAddTrackToPlaylist}
      className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
    >
      Add Track to Playlist
    </button>
  </div>
  
  )
}

export default AddSongToPlaylist 