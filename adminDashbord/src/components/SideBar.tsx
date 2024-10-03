import { Link } from "react-router-dom"
import { MdDashboard } from "react-icons/md";
import { IoMdAlbums } from "react-icons/io";
import { FaAngleLeft, FaAngleDown } from "react-icons/fa";
import { useState } from "react";

const SideBar = () => {
  const [toggleAlbums, setToggleAlbums] = useState(false)
  return (
    <div className="flex flex-col p-5 gap-3">
      <div className="flex items-center gap-3 p-2">
        <MdDashboard />
        <Link to="/">Dashboard</Link>
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
    </div>
  )
}

export default SideBar