import { useState } from "react"
import axios from "axios"
import { toast } from 'react-toastify';

const AddSong = () => {
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [artwork, setArtwork] = useState<File | null>(null)
  const [url, setUrl] = useState<File | null>(null)

  const handelSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('title', title);
    formData.append('artist', artist);
    if (url) formData.append('files', url); // Assuming `url` is a file input
    if (artwork) formData.append('files', artwork);
  
  // Assuming `artwork` is also a file input


    try {
      const response = await axios.post('https://musicserver-h836.onrender.com/track', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      console.log('Response:', response.data);
      toast.success('playlist created successfully')
      setTitle("")
      setArtist("")
      setArtwork(null)
      setUrl(null)
    } catch (error) {
      console.error('Error details:', error);// Log response data for more context
      toast.error('Failed to add song: please try again');
    }
  }
  return (
    <div className="flex items-center flex-col p-2 gap-2 w-full">
      <h2 className="text-xl font-medium">Add Song</h2>
      
      <form onSubmit={handelSubmit} className="bg-gray-100 shadow-md w-8/12 p-2 flex flex-col items-center gap-2">
        <div>
          <h3>Title</h3>
          <input type="text" placeholder="Enter song title" className="p-2 rounded-md border w-[400px]" required value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <h3>Artist</h3>
          <input type="text" placeholder="Artist name" className="p-2  rounded-md border  w-[400px]" required value={artist} onChange={(e) => setArtist(e.target.value)} />
        </div>
        <div>
          <h3>Song Url</h3>
          <input
            type="file"
            className="p-2 rounded-md border w-[400px]"
            required
            onChange={(e) => {
              const files = e.target.files;
              if (files && files.length > 0) {
                setUrl(files[0]); // Set the first file
              }
            }}
          />
        </div>
        <div>
          <h3>artwork</h3>
          <input
            type="file"
            className="p-2 rounded-md border w-[400px]"
            required
            onChange={(e) => {
              const files = e.target.files;
              if (files && files.length > 0) {
                setArtwork(files[0]); // Set the first file
              }
            }}
          />
        </div>

        <button type="submit" className="bg-blue-400  rounded-md p-2 text-white  w-[400px]" >Add song </button>
      </form>
    </div>
  )
}

export default AddSong


/*import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from 'react-toastify';

interface Playlist {
  id: string;
  name: string;
}
const AddSong = () => {
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [selectedPlaylistId, setSelectedPlaylistId] = useState('')
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [artwork, setArtwork] = useState<File | null>(null)
  const [url, setUrl] = useState<File | null>(null)

  useEffect(() => {
    getAllPlaylist()
  }, [])
  //get alll podcasts
  const getAllPlaylist = async () => {
    try {
      const response = await axios.get('https://musicserver-h836.onrender.com/playlist/66fc66651c032413823ea923');
      setPlaylists(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handelSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('title', title);
    formData.append('artist', artist);
    formData.append('selectedPlaylistId', selectedPlaylistId);
    if (url) formData.append('files', url); // Assuming `url` is a file input
    if (artwork) formData.append('files', artwork);

    // Assuming `artwork` is also a file input
    try {
      const response = await axios.post('https://musicserver-h836.onrender.com/track', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      console.log('Response:', response.data);
      toast.success('Ebisode Created successfully')
      setTitle("")
      setArtist("")
      setSelectedPlaylistId("")
      setArtwork(null)
      setUrl(null)
    } catch (error) {
      console.error('Error details:', error);// Log response data for more context
      toast.error('Failed to add song: please try again');
    }
  }
  return (
    <div className="flex items-center flex-col p-2 gap-2 w-full">
      <h2 className="text-xl font-medium">Add a song</h2>

      <form onSubmit={handelSubmit} className="bg-gray-100 shadow-md w-8/12 p-2 flex flex-col items-center gap-2">
        <div>
          <h3>Title</h3>
          <input type="text" placeholder="Enter song title" className="p-2 rounded-md border w-[400px]" required value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <h3>description</h3>
          <input type="text" placeholder="Enter description" className="p-2  rounded-md border  w-[400px]" required value={artist} onChange={(e) => setArtist(e.target.value)} />
        </div>
        <div>
          <select
            id="playlist"
            value={selectedPlaylistId}
            onChange={(e) => setSelectedPlaylistId(e.target.value)}
            className="p-2  rounded-md border  w-[400px]"
          >
            <option>-- Select playlist --</option>
            {playlists.map((playlist) => (
              <option key={playlist?.id} value={playlist?.id}>
                {playlist.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h3>songs Url</h3>
          <input
            type="file"
            className="p-2 rounded-md border w-[400px]"
            required
            onChange={(e) => {
              const files = e.target.files;
              if (files && files.length > 0) {
                setUrl(files[0]); // Set the first file
              }
            }}
          />
        </div>
        <div>
          <h3>artwork</h3>
          <input
            type="file"
            className="p-2 rounded-md border w-[400px]"
            required
            onChange={(e) => {
              const files = e.target.files;
              if (files && files.length > 0) {
                setArtwork(files[0]); // Set the first file
              }
            }}
          />
        </div>

        <button type="submit" className="bg-blue-400  rounded-md p-2 text-white  w-[400px]" >Add song </button>
      </form>
    </div>
  )
}

export default AddSong*/