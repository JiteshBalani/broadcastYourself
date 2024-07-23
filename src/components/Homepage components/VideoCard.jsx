import React from 'react'
import { formatDuration,formatPublishedDate,formatViews,truncateTitle } from '../../utils/videoCardUtilities';

const VideoCard = ({ info }) => {

    const { contentDetails, snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    const duration = formatDuration(contentDetails.duration);
    const publishedDate = formatPublishedDate(snippet.publishedAt);
    const views = formatViews(statistics.viewCount);
    const truncatedTitle = truncateTitle(title, 60);

    return (
        <div className='p-3 w-80 cursor-pointer'>
            <div className='relative'>
                <img className='w-full h-auto rounded-lg' alt='thumbnail' src={thumbnails.medium.url} />
                <span className='absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-1 py-0.5 rounded'>{duration}</span>
            </div>
            <div className=' flex flex-col flex-wrap justify-between'>
                <h2 title={title} className='font-semibold text-wrap'>{truncatedTitle}</h2>
                <span className='text-gray-400'>{channelTitle}</span>
                <span className='text-gray-400'>{views} ▪ {publishedDate}</span>
            </div>

        </div>
    )
}

export default VideoCard