import axios from "axios";
import { useEffect, useState } from "react"
import { FaPlay } from "react-icons/fa";
import { useParams } from "react-router-dom";

interface Podcast {
    id: string;
    title: string;
   artwork:string;
   description:string
}
const ViewPodcastLists = () => {
    const [podcasts, setPodcasts] = useState<Podcast[]>([]);
    const { id } = useParams()

    //console.log(allSongs?.tracks)

    useEffect(() => {
        const getPodcastEpisodes = async () => {
            try {
                const response = await axios.get(`https://musicserver-h836.onrender.com/podcast/podcastEpisode/${id}`);
                setPodcasts(response.data.episodes)
            } catch (error) {
                console.log('error getting user platlist', error)
            }
        }
        getPodcastEpisodes()
    }, [id])

    return (
        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">All Episodes</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                    <thead className="bg-gray-200 text-gray-700">
                        <tr>
                            <th className="py-3 px-4 text-left">Play</th>
                            <th className="py-3 px-4 text-left">Artwork</th>
                            <th className="py-3 px-4 text-left">Title</th>
                            <th className="py-3 px-4 text-left">description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {podcasts.map(({ id, artwork, title, description }) => (
                            <tr key={id} className="hover:bg-gray-100 transition-colors">
                                <td className="py-3 px-4 text-center cursor-pointer">
                                    <FaPlay className="text-blue-600 hover:text-blue-800" />
                                </td>
                                <td className="py-3 px-4">
                                    <img
                                        src={artwork}
                                        alt={`${title} artwork`}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                </td>
                                <td className="py-3 px-4 text-gray-800">{title}</td>
                                <td className="py-3 px-4 text-gray-600">{description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewPodcastLists



