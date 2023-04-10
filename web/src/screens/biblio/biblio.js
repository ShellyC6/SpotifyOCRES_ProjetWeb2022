import React, { useEffect, useState } from 'react';
import APIKit from "../../spotify";
import "./biblio.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

/** Idées de trucs à mettre dans cette page :
 *   - Mes playlists
 *   - Mes artistes suivis
 *   - ...
 */

export default function Biblio() {
    const [playlists, setPlaylists] = useState(null);

    useEffect(() => {
        APIKit.get("me/playlists?").then(function (response) {
            setPlaylists(response.data.items);
            console.log(response.data.items);
        });
    }, []);

    const navigate = useNavigate();

    const playPlaylist = (id) => {
        navigate('/lecture', { state: { id: id } })
    };

    return (
        <div className='screens p-5 d-flex flex-wrap justify-content-evenly col-12'>
            {playlists?.map((playlist) =>
                <div className='card col-12 col-sm-3 col-lg-2 mx-1 my-3' key={playlist.id} onClick={() => playPlaylist(playlist.id)}>
                    <img src={playlist.images[0].url} className='card-img-top' alt='playlist'></img>
                    <div className='card-body text-white d-flex flex-wrap'>
                        <p className='titre fs-5 col-12 mb-0'>{playlist.name}</p>
                        <p className='sous-titre col-12 mb-0'>{playlist.tracks.total} titres</p>
                    </div>
                    <p className='icon fade fs-1 me-3 ms-auto position-absolute bottom-0 end-0 '>{<AiFillPlayCircle />}</p>
                </div>
            )}
        </div>
    );
}