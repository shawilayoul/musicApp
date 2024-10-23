import { useState } from "react"
import axios from "axios"
import { toast } from 'react-toastify';

const AddEbisode = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [podcastId, setPodcastId] = useState("")
  const [artwork, setArtwork] = useState<File | null>(null)
  const [url, setUrl] = useState<File | null>(null)

  const handelSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('podcastId', podcastId);
    if (url) formData.append('files', url); // Assuming `url` is a file input
    if (artwork) formData.append('files', artwork);

    // Assuming `artwork` is also a file input


    try {
      const response = await axios.post('https://musicserver-h836.onrender.com/episode', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      console.log('Response:', response.data);
      toast.success('Ebisode Created successfully')
      setTitle("")
      setDescription("")
      setPodcastId("")
      setArtwork(null)
      setUrl(null)
    } catch (error) {
      console.error('Error details:', error);// Log response data for more context
      toast.error('Failed to add song: please try again');
    }
  }
  return (
    <div className="flex items-center flex-col p-2 gap-2 w-full">
      <h2 className="text-xl font-medium">Add Ebisode</h2>

      <form onSubmit={handelSubmit} className="bg-gray-100 shadow-md w-8/12 p-2 flex flex-col items-center gap-2">
        <div>
          <h3>Title</h3>
          <input type="text" placeholder="Enter song title" className="p-2 rounded-md border w-[400px]" required value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <h3>description</h3>
          <input type="text" placeholder="Enter description" className="p-2  rounded-md border  w-[400px]" required value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <h3>PodcastId</h3>
          <input type="text" placeholder="Enter PodcastId" className="p-2  rounded-md border  w-[400px]" required value={podcastId} onChange={(e) => setPodcastId(e.target.value)} />
        </div>
        <div>
          <h3>Ebisode Url</h3>
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

        <button type="submit" className="bg-blue-400  rounded-md p-2 text-white  w-[400px]" >Add Ebisode </button>
      </form>
    </div>
  )
}

export default AddEbisode