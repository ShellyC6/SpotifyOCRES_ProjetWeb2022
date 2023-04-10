import React, { useEffect, useState } from 'react';
import SongCard from '../components/songcard/songcard';
import APIKitSpotify from "../spotify";
import APIKitPrivate from "../api";
import "./profil.css";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

/** Idées de trucs à mettre dans cette page :
 *   - Page récap Spotify 2022 : genre de musique préféré, titres les plus écoutés...
 *   - Graphe temps d'écoute à la semaine (total)
 *   - Titres préférés
 *   - Artistes préférés
 *   - ...
 */

export default function Profil() {
    const [profil, setProfil] = useState({
        display_name: "utilisateur non connecté",
        images: [""],
    });

    const [artists, setArtists] = useState([]);

    useEffect(() => {
        APIKitSpotify.get("me").then(function (response) {
            setProfil(response.data);
            console.log(response.data);
        });
    }, []);

    useEffect(() => {
        APIKitPrivate.get("artist").then(function (response) {
            setArtists(response.data);
            console.log(response.data);
        });
    }, []);

    return (
        <div className='screens text-white d-flex flex-wrap justify-content-evenly'>
            <div className='p-4 text-center col-3'>
                <p className='py-1 fs-1'>{profil.display_name}</p>
                <img className='rounded-circle' src={profil.images[0].url}></img>
            </div>
            <div className='p-4 col-7'>
                {artists?.map((artist) =>
                    <div className='card mx-2 my-3' key={artist._id}>
                        <div className='card-body text-white'>
                            <p className='fs-5 col-12 mb-0 d-flex flex-wrap'>
                                <div className='col-5'>{artist.nom}</div>
                                <div className='col-7'><AiOutlineStar/></div>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
