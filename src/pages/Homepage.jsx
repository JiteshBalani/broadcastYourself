import React from 'react'
import Sidebar from '../components/Homepage components/Sidebar'
import VideoList from '../components/Homepage components/VideoList'

const Homepage = () => {
  return (
    <div className='flex '>
      <Sidebar/>
      <VideoList/>
    </div>
  )
}

export default Homepage