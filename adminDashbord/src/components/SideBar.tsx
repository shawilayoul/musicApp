import { Link } from "react-router-dom"
import { MdOutlineDashboard, MdMailOutline, MdOutlineTrendingUp } from "react-icons/md";
import { IoMdAlbums } from "react-icons/io";
import { SlEarphones } from "react-icons/sl";
import { TbPlaylist } from "react-icons/tb";
import { FaAngleLeft, FaAngleDown, FaRegUser, FaRegCalendarAlt, FaMusic } from "react-icons/fa";
import { useState } from "react";

const SideBar = () => {
  const [toggleAlbums, setToggleAlbums] = useState(false)
  const [toggleArtist, setToggleArtist] = useState(false)
  const [toggleEvents, setToggleEvents] = useState(false)
  const [toggleGenres, setToggleGenres] = useState(false)
  const [toggleMailBox, setToggleMailbox] = useState(false)
  const [togglePlaylists, setTogglePlaylists] = useState(false)
  const [toggleReports, setToggleReports] = useState(false)
  const [toggleSongs, setToggleSongs] = useState(false)

  return (
    <div className="flex flex-col p-5 gap-3 mt-[60px]">
      <div className="flex items-center gap-3 p-2">
        <MdOutlineDashboard />
        <Link to="/">Dashboard</Link>
      </div>
      <div className="Playlist">
        <div className="flex items-center justify-between w-full p-2  hover:bg-blue-300 " onClick={() => setTogglePlaylists(!togglePlaylists)}>
          <div className="flex items-center gap-3">
            <TbPlaylist /> <h3>Playlists</h3>
          </div>

          <div className="arrow">
            {
              togglePlaylists ? <FaAngleDown /> : <FaAngleLeft />
            }
          </div>
        </div>
        {togglePlaylists && <ul className="flex flex-col ml-6 ">
          <li className="p-1  hover:bg-blue-300 "><Link to="/playlists">Playlists</Link></li>
          <li className="p-1 hover:bg-blue-300 "><Link to="/playlists/add">Add Playlist</Link></li>
          <li className="p-1 hover:bg-blue-300 "><Link to="/playlists/edit">Edit Playlist</Link></li>
          <li className="p-1 hover:bg-blue-300 "><Link to="/playlists/view">View Playlist</Link></li>
        </ul>}

      </div>
      <div className="albums">
        <div className="flex items-center justify-between w-full p-2  hover:bg-blue-300 " onClick={() => setToggleAlbums(!toggleAlbums)}>
          <div className="flex items-center gap-3">
            <IoMdAlbums /> <h3>Albums</h3>
          </div>

          <div className="arrow">
            {
              toggleAlbums ? <FaAngleDown /> : <FaAngleLeft />
            }
          </div>
        </div>
        {toggleAlbums && <ul className="flex flex-col ml-6 ">
          <li className="p-1  hover:bg-blue-300 "><Link to="/albums">Albums</Link></li>
          <li className="p-1 hover:bg-blue-300 "><Link to="/albums/add">Add Album</Link></li>
          <li className="p-1 hover:bg-blue-300 "><Link to="/albums/edit">Edit Album</Link></li>
          <li className="p-1 hover:bg-blue-300 "><Link to="/albums/view">View Albums</Link></li>
        </ul>}

      </div>
      <div className="songs">
        <div className="flex items-center justify-between w-full p-2  hover:bg-blue-300 " onClick={() => setToggleSongs(!toggleSongs)}>
          <div className="flex items-center gap-3">
            <FaMusic /> <h3>Songs</h3>
          </div>

          <div className="arrow">
            {
              toggleSongs ? <FaAngleDown /> : <FaAngleLeft />
            }
          </div>
        </div>
        {toggleSongs && <ul className="flex flex-col ml-6 ">
          <li className="p-1  hover:bg-blue-300 "><Link to="/songs/add">Add Song</Link></li>
          <li className="p-1 hover:bg-blue-300 "><Link to="/songs/AddSongToPlaylist">Add Song to Playlist</Link></li>
          <li className="p-1 hover:bg-blue-300 "><Link to="/songs/detail">Song Details</Link></li>
        </ul>}

      </div>
      <div className="artist">
        <div className="flex items-center justify-between w-full p-2  hover:bg-blue-300 " onClick={() => setToggleArtist(!toggleArtist)}>
          <div className="flex items-center gap-3">
            <FaRegUser /> <h3>Artist</h3>
          </div>

          <div className="arrow">
            {
              toggleArtist ? <FaAngleDown /> : <FaAngleLeft />
            }
          </div>
        </div>
        {toggleArtist && <ul className="flex flex-col ml-6 ">
          <li className="p-1  hover:bg-blue-300 "><Link to="/artists">Artists</Link></li>
          <li className="p-1 hover:bg-blue-300 "><Link to="/artists/add">Add Artist</Link></li>
          <li className="p-1 hover:bg-blue-300 "><Link to="/artists/edit">Edit Artist</Link></li>
          <li className="p-1 hover:bg-blue-300 "><Link to="/artists/profile">Artist Profile</Link></li>
        </ul>}

      </div>

      <div className="genres">
        <div className="flex items-center justify-between w-full p-2  hover:bg-blue-300 " onClick={() => setToggleGenres(!toggleGenres)}>
          <div className="flex items-center gap-3">
            <SlEarphones /> <h3>Genres</h3>
          </div>

          <div className="arrow">
            {
              toggleGenres ? <FaAngleDown /> : <FaAngleLeft />
            }
          </div>
        </div>
        {toggleGenres && <ul className="flex flex-col ml-6 ">
          <li className="p-1  hover:bg-blue-300 "><Link to="/genres">Genres</Link></li>
          <li className="p-1 hover:bg-blue-300 "><Link to="/genres/add">Add Genre</Link></li>
          <li className="p-1 hover:bg-blue-300 "><Link to="/genres/edit">Edit Genre</Link></li>
        </ul>}

      </div>
      <div className="reports">
        <div className="flex items-center justify-between w-full p-2  hover:bg-blue-300 " onClick={() => setToggleReports(!toggleReports)}>
          <div className="flex items-center gap-3">
            <MdOutlineTrendingUp /> <h3>Reports</h3>
          </div>

          <div className="arrow">
            {
              toggleReports ? <FaAngleDown /> : <FaAngleLeft />
            }
          </div>
        </div>
        {toggleReports && <ul className="flex flex-col ml-6 ">
          <li className="p-1  hover:bg-blue-300 "><Link to="/reports/songs">Songs Report</Link></li>
          <li className="p-1 hover:bg-blue-300 "><Link to="/reports/statistics">Statistics</Link></li>
          <li className="p-1 hover:bg-blue-300 "><Link to="/reports/trending">Trending</Link></li>
          <li className="p-1 hover:bg-blue-300 "><Link to="/reports/visitors">Visitors</Link></li>
        </ul>}

      </div>
      <div className="events">
        <div className="flex items-center justify-between w-full p-2  hover:bg-blue-300 " onClick={() => setToggleEvents(!toggleEvents)}>
          <div className="flex items-center gap-3">
            <FaRegCalendarAlt /> <h3>Events</h3>
          </div>

          <div className="arrow">
            {
              toggleEvents ? <FaAngleDown /> : <FaAngleLeft />
            }
          </div>
        </div>
        {toggleEvents && <ul className="flex flex-col ml-6 ">
          <li className="p-1  hover:bg-blue-300 "><Link to="/events">Events</Link></li>
          <li className="p-1 hover:bg-blue-300 "><Link to="/events/add">Add Event</Link></li>
        </ul>}

      </div>
      <div className="mailBox">
        <div className="flex items-center justify-between w-full p-2  hover:bg-blue-300 " onClick={() => setToggleMailbox(!toggleMailBox)}>
          <div className="flex items-center gap-3">
            <MdMailOutline /> <h3>Mail Box</h3>
          </div>

          <div className="arrow">
            {
              toggleMailBox ? <FaAngleDown /> : <FaAngleLeft />
            }
          </div>
        </div>
        {toggleMailBox && <ul className="flex flex-col ml-6 ">
          <li className="p-1  hover:bg-blue-300 "><Link to="/mailBox">InBox</Link></li>
          <li className="p-1 hover:bg-blue-300 "><Link to="/mailBox/compose">Compose</Link></li>
          <li className="p-1 hover:bg-blue-300 "><Link to="/mailBox/view">View</Link></li>
        </ul>}

      </div>
    </div>
  )
}

export default SideBar