import React, { useEffect, useState } from 'react';
import APIKit from "../api";

export default function Test() {

    const mockData = [
        {
            id: 1,
            nom: "Orelsan"
        },
        {
            id: 2,
            nom: "Yungblud"
        }
    ]

    const [artists, setArtists] = useState(mockData);

    /*useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('http://localhost:4000/artist/');
            const jsonResult = await result.json();

            setArtists(jsonResult);
        }

        fetchData();
    }, []);*/

    useEffect(() => {
        APIKit.get("artist").then(function (response) {
            setArtists(response.data);
            console.log(response.data);
        });
    }, []);

    return (
        <div className='screens'>
            {artists?.map((artist) =>
                <div className='card mx-2 my-3' key={artist._id}>
                    <div className='card-body text-white'>
                        <p className='fs-5 col-12 mb-0'>{artist.nom}</p>
                    </div>
                </div>
            )}
        </div>
    );
};
