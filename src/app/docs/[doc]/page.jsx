import React from 'react'
import Nav from '@/components/Nav'
import Sidebar from '@/components/Sidebar'
import Content from '@/components/content/Content'

const page = () => {
  return (
    <div className='w-screen h-screen relative overflow-hidden'>
      <Nav />

      <div className='flex '>
        <Sidebar />
        <Content />
      </div>

    </div>
  )
}

export default page