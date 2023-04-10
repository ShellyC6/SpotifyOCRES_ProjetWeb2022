import React from 'react';
import "./navbar.css";
import NavbarButton from './navbarButton';
import { FaPlay } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { TiFlash } from "react-icons/ti";
import { IoLibrary } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";

export default function Navbar() {
  
  const signOut = () => {
    window.localStorage.removeItem("token");
    window.location.reload(false);
  };

  return (
    <div className='nav d-flex justify-content-evenly col-12 align-items-center sticky-top rounded-4'>
      <div className=' d-flex justify-content-evenly col-9 align-items-center'>
        <NavbarButton title="Profil" to="/profil" icon={<CgProfile />} />
        <NavbarButton title="Lecture" to="/lecture" icon={<FaPlay />} />
        <NavbarButton title="Biblio" to="/" icon={<IoLibrary />} />
      </div>
      <div className=' d-flex justify-content-evenly col-2 align-items-center' onClick={signOut}>
        <NavbarButton title="Sign out" to="" icon={<FaSignOutAlt />} />
      </div>
    </div>
  );
}
