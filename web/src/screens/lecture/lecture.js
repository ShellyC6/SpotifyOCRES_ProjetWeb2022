import React, {useEffect, useState} from 'react'
import "./lecture.css"
import { useLocation } from "react-router-dom";
import apiClient from "../../spotify";
import SongCard from "../../components/songcard/songcard";
import Queue from "../../components/queue/queue";
import AudioPLayer from "../../components/audioPlayer/audioPlayer";
import Widgets from "../../components/widgets/widgets";


/** Idées de trucs à mettre dans cette page :
 *   - Musique en cours de lecture
 *   - File d'attente
 *   - Recommendations
 *   - ...
 */ 

export default function Lecture() {

    const location = useLocation();
    const [tracks, setTracks] = useState([]);
    const [currentTrack, setCurrentTrack] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        if (location.state) {
          apiClient
            .get("playlists/" + location.state?.id + "/tracks")
            .then((res) => {
              //console.log(res.data)
              setTracks(res.data.items);
              setCurrentTrack(res.data?.items[0]?.track);
            });
        }
      }, [location.state]);

      useEffect(() => {
        setCurrentTrack(tracks[currentIndex]?.track);
      }, [currentIndex, tracks]);
    
      return (
        <div className="screen-container screens">
          <div className="left-lecture-body">
            <AudioPLayer
              currentTrack={currentTrack}
              total={tracks}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
            <Widgets artistID={currentTrack?.album?.artists[0]?.id} />
          </div>
          <div className="right-lecture-body">
            <SongCard album={currentTrack?.album} />
            <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
          </div>
        </div>
      );
}
