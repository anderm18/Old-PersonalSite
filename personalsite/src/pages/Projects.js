import React from 'react';
import VideoLooper from 'react-video-looper';
import vid from '../assets/tri.webm';

const Projects = () => {
    return(
        <>
        <VideoLooper source={vid} start={0.00} end={16.00}/>
          <div>
            Hello!
          </div>
        </>
    );
};

export default Projects;

