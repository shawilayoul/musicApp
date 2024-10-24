import { createBrowserRouter } from "react-router-dom"
import AppLayOUt from "./AppLayOUt"
import Dashboard from "../pages/Dashboard"
import Albums from "../pages/Albums/Albums"
import AddAlbum from "../pages/Albums/AddAlbum"
import EditAlbum from "../pages/Albums/EditAlbum"
import ViewAlbum from "../pages/Albums/ViewAlbum"
import Artists from "../pages/Artists/Artists"
import AddArtist from "../pages/Artists/AddArtist"
import EditArtist from "../pages/Artists/EditArtist"
import ArtistProfile from "../pages/Artists/ArtistProfile"
import Events from "../pages/Events/Events"
import AddEvent from "../pages/Events/AddEvent"
import Genres from "../pages/Podcast/Genres"
import AddGenre from "../pages/Podcast/AddGenre"
import EditGenre from "../pages/Podcast/EditGenre"
import Compose from "../pages/MailBox/Compose"
import Inbox from "../pages/MailBox/Inbox"
import View from "../pages/MailBox/View"
import Playlists from "../pages/Playlists/Playlists"
import AddPlaylist from "../pages/Playlists/AddPlaylist"
import EditPlaylist from "../pages/Playlists/EditPlaylist"
import ViewPlaylist from "../pages/Playlists/ViewPlaylist"
import SongsReport from "../pages/Reports/SongsReport"
import Statistics from "../pages/Reports/Statistics"
import Trending from "../pages/Reports/Trending"
import Visitors from "../pages/Reports/Visitors"
import AddSong from "../pages/Songs/AddSong"
import AddSongToPlaylist from "../pages/Songs/AddSongToPlaylist"
import SongDetail from "../pages/Songs/SongDetail"
import SongsUploader from "../pages/SongsUploader"
import Ebisodes from "../pages/episodes/Ebisodes"
import AddEbisode from "../pages/episodes/AddEbisode"
import EditEbisode from "../pages/episodes/EditEbisode"
import ViewPodcastLists from "../pages/Podcast/ViewPodcastLists"

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayOUt />,
        children: [
            { index: true, element: <Dashboard /> },
            { path: "/albums", element: <Albums /> },
            { path: "/albums/add", element: <AddAlbum /> },
            { path: "/albums/edit", element: <EditAlbum /> },
            { path: "/albums/view", element: <ViewAlbum /> },

            { path: "/artists", element: <Artists /> },
            { path: "/artists/add", element: <AddArtist /> },
            { path: "/artists/edit", element: <EditArtist /> },
            { path: "/artists/profile", element: <ArtistProfile /> },

            { path: "/events", element: <Events /> },
            { path: "/events/add", element: <AddEvent /> },

            { path: "/podcasts", element: <Genres /> },
            { path: "/podcast/add", element: <AddGenre /> },
            { path: "/podcast/edit", element: <EditGenre /> },
            { path: "/podcast/view/:id", element: <ViewPodcastLists /> },

            { path: "/ebisodes", element: <Ebisodes /> },
            { path: "/ebisodes/add", element: <AddEbisode /> },
            { path: "/ebisodes/edit", element: <EditEbisode /> },
            

            { path: "/mailBox", element: <Inbox /> },
            { path: "/mailBox/compose", element: <Compose /> },
            { path: "/mailBox/view", element: <View /> },

            { path: "/playlists", element: <Playlists /> },
            { path: "/playlists/add", element: <AddPlaylist /> },
            { path: "/playlists/edit", element: <EditPlaylist /> },
            { path: "/playlists/view/:id", element: <ViewPlaylist /> },

            { path: "/reports/songs", element: <SongsReport /> },
            { path: "/reports/statistics", element: <Statistics /> },
            { path: "/reports/trending", element: <Trending /> },
            { path: "/reports/visitors", element: <Visitors /> },

            { path: "/songs/add", element: <AddSong /> },
            { path: "/songs/AddSongToPlaylist", element: <AddSongToPlaylist /> },
            { path: "/songs/detail", element: <SongDetail /> },

            { path: "/songsUploader", element: <SongsUploader /> },


        ]
    }
])

export default router