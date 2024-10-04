import { useState } from "react"
import axios from "axios"
import { toast } from 'react-toastify';

const AddSong = () => {
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [duration, setDuration] = useState(0)
  const [artwork, setArtwork] = useState("")
  const [url, setUrl] = useState("")

  const handelSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:3000/track', { title, artist, url, artwork, duration })
      toast.success('playlist created successfully')
      setTitle("")
      //setArtist("")
      //setDuration(0)
      //setArtwork("")
      setUrl("")
    } catch (error) {
      toast.error('failed to add song: please try again')
      console.log(error)
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
          <input type="text" placeholder="Song url" className="p-2  rounded-md border  w-[400px]" required value={url} onChange={(e) => setUrl(e.target.value)} />
        </div>
        <div>
          <h3>artwork</h3>
          <input type="text" placeholder="song image" className="p-2  rounded-md border  w-[400px]" required value={artwork} onChange={(e) => setArtwork(e.target.value)} />
        </div>
        <div>
          <h3>duration</h3>
          <input type="number" placeholder="song duration" className="p-2  rounded-md border  w-[400px]" required value={duration} onChange={(e) => setDuration(parseInt(e.target.value))} />
        </div>
        <button type="submit" className="bg-blue-400  rounded-md p-2 text-white  w-[400px]" >Add song </button>
      </form>
    </div>
  )
}

export default AddSong