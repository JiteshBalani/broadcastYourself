import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className='bg-gray-900 p-2 text-white font-semibold border-r-2 border-white whitespace-nowrap'>
      
      <ul className='px-3'>

        <li className='py-6 px-2 border-b-2 border-white'>

          <ul className='space-y-3'>
            <Link to='/'><li>🏠  Home</li></Link>
            <li>🍸  Shorts</li>
            <li>🔔  Subscriptions</li>
          </ul>

        </li>

        <li className='border-b-2 border-white min-h-screen'>

          <h2 className='text-lg font-black my-4 py-2 px-2 '>Explore</h2>

          <ul className='px-2 space-y-3'>
            <li>💹  Trending</li>
            <li>🎶  Music</li>
            <li>📺  Live</li>
            <li>🏐  Sports</li>
            <li>📰  News</li>
            <li>🎙  Podcasts</li>
          </ul>

        </li>

      </ul>

    </div>
  )
}

export default Sidebar