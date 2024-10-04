import { useState } from "react"
import axios from "axios"
import { toast } from 'react-toastify';

const AddPlaylist = () => {
  const [name, setName] = useState("")
  const [userId, setUserId] = useState("")
  const [genre, setGenre] = useState("")
  const [descriptions, setDescriptions] = useState("")
  const [image, setImage] = useState("")
  const [lenght, setLength] = useState("")

  const handelSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:3000/playlist', { name, userId, genre, descriptions, image, lenght })
      toast.success('playlist created successfully')
      setName("")
      setUserId("")
      setGenre("")
      setDescriptions("")
      setImage("")
      setLength("")
    } catch (error) {
      toast.error('failed to create playist: please try again')
      console.log(error)
    }
  }
  return (
    <div className="flex items-center flex-col p-2 gap-2 w-full">
      <h2 className="text-xl font-medium">Add Playlist</h2>
      <form onSubmit={handelSubmit} className="bg-gray-100 shadow-md w-8/12 p-2 flex flex-col items-center gap-2">
        <div>
          <h3>Title</h3>
          <input type="text" placeholder="Enter playlist title" className="p-2 rounded-md border w-[400px]" required value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <h3>userId</h3>
          <input type="text" placeholder="user Id" className="p-2  rounded-md border  w-[400px]" required value={userId} onChange={(e) => setUserId(e.target.value)} />
        </div>
        <div>
          <h3>Genre</h3>
          <input type="text" placeholder="genre" className="p-2  rounded-md border  w-[400px]" required value={genre} onChange={(e) => setGenre(e.target.value)} />
        </div>
        <div>
          <h3>Descriptions</h3>
          <input type="text" placeholder="descriptions" className="p-2  rounded-md border  w-[400px]" required value={descriptions} onChange={(e) => setDescriptions(e.target.value)} />
        </div>
        <div>
          <h3>Playlist Image</h3>
          <input type="text" placeholder="playlist image" className="p-2  rounded-md border  w-[400px]" required value={image} onChange={(e) => setImage(e.target.value)} />
        </div>
        <div>
          <h3>Playlist Lenght</h3>
          <input type="text" placeholder="playlist Length" className="p-2 rounded-md border  w-[400px]" required value={lenght} onChange={(e) => setLength(e.target.value)} />
        </div>
        <button type="submit" className="bg-blue-400  rounded-md p-2 text-white  w-[400px]" >Add </button>
      </form>
    </div>
  )
}

export default AddPlaylist