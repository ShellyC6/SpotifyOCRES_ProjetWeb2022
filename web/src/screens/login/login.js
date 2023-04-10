import React from 'react';
import { loginEndpoint } from "../../spotify";
import "./login.css";

export default function Login() {
    return (
        <div className="main bg-dark d-flex flex-wrap justify-content-center align-items-center">
            <img
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                alt="logo-spotify"
                className="logo col-6 mb-4 mx-5 mt-auto"
            />
            <a href={loginEndpoint} className='btn btn-light btn-lg col-6 mx-5 fw-bold mt-4 mb-auto'>
                SE CONNECTER
            </a>
        </div>
    );
}
