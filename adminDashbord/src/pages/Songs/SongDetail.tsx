import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { FaPlay ,FaPause} from "react-icons/fa";

const SongDetail = () => {
  const [allSongs, setAllSongs] = useState([]);

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSongChange = (index) => {
    setCurrentSongIndex(index);
    setIsPlaying(false); // Reset playing state
    audioRef.current.pause(); // Pause current song
    audioRef.current.load(); // Load the new song
    audioRef.current.play(); // Play the new song
    setIsPlaying(true); // Update the playing state
  };
  useEffect(() => {
    const getUserPlaylist = async () => {
      try {
        const response = await axios.get('https://musicserver-h836.onrender.com/track');
        setAllSongs(response.data)
      } catch (error) {
        console.log('error getting user platlist', error)
      }
    }
    getUserPlaylist()
  }, [])
  const imageUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIN6iFDbA-lmBLINiQlt8dSO5qWkqWx003dhJXZN81Sx3HqHCq6yTSC4ZlyBzqeSoGCno&usqp=CAU';

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">All Songs</h2>
      <div>
        <audio ref={audioRef} src={allSongs[currentSongIndex]?.url} />
        <button onClick={togglePlay}>
          {isPlaying ?    <FaPause className="text-red-500 cursor-pointer hover:text-blue-700" />:    <FaPlay className="text-blue-500 cursor-pointer hover:text-blue-700" />}
        </button>
      </div>
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 text-left text-gray-700">Play</th>
              <th className="py-3 px-4 text-left text-gray-700">Artwork</th>
              <th className="py-3 px-4 text-left text-gray-700">Title</th>
              <th className="py-3 px-4 text-left text-gray-700">Artist</th>
            </tr>
          </thead>
          <tbody>
            {allSongs.map(({ title, artwork, artist, _id,}) => (
              <tr key={_id} className="hover:bg-gray-100 transition-colors">
                <td className="py-3 px-4">
                  <button onClick={() => handleSongChange(_id)}>
                    <FaPlay className="text-blue-500 cursor-pointer hover:text-blue-700" />
                  </button>
                </td>
                <td className="py-3 px-4">
                  <img
                    src={artwork || imageUrl}
                    alt={`${title} artwork`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </td>
                <td className="py-3 px-4 text-gray-800">{title}</td>
                <td className="py-3 px-4 text-gray-600">{artist}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>)
}

export default SongDetail

