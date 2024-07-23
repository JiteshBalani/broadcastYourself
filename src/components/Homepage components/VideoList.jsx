import React, { useEffect, useState } from 'react'
import { Youtube_API } from '../../utils/constants'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoList = () => {

    const [ videolist, setVideolist ] = useState([]); 

    useEffect(()=>{
        getPopularVideos();
    },[]);

    const getPopularVideos = async () => {
        const data = await fetch(Youtube_API)
        const json = await data.json();
        // console.log(json);
        setVideolist(json.items);
    }
  if(videolist.length !== 0)
    return (
    <div className='flex flex-wrap justify-between pt-4 px-4 bg-gray-900 text-white'>
    {videolist.map((video) => (
      <Link to={"/watch?v=" + video.id} key={video.id}><VideoCard info={video} /></Link>
    ))}
    </div>
  )
}

export default VideoList