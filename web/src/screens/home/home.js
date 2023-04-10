import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Biblio from '../biblio/biblio';
import Lecture from "../lecture/lecture";
import Profil from "../profil";
import Actu from "../actu";
import Navbar from '../../components/navbar/navbar';
import "./home.css"
import Login from '../login/login';
import { setClientToken } from '../../spotify';
import Test from '../test';

export default function Home() {

    const [token, setToken] = useState("");

    useEffect(() => {
        const token = window.localStorage.getItem("token");
        const hash = window.location.hash;
        window.location.hash = "";
        if (!token && hash) {
            const _token = hash.split('&')[0].split("=")[1];
            window.localStorage.setItem("token", _token);
            setToken(_token);
            setClientToken(_token);
        } else {
            setToken(token);
            setClientToken(token);
        }

    }, []);

    return (!token ? (
        <Login />) : (
        <BrowserRouter>
            <div className='main rounded-5'>
                <Navbar />
                <Routes>
                    <Route path='/profil' element={<Profil />} />
                    <Route path='/lecture' element={<Lecture />} />
                    <Route path='/' element={<Biblio />} />
                    <Route path='/test' element={<Test />} />
                </Routes>
            </div>
        </BrowserRouter>
    ));
}
