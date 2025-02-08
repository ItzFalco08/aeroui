"uce client"
import React from 'react'
import Nav from '@/components/Nav'
import Sidebar from '@/components/Sidebar'
import Content from '@/components/Content'

const page = () => {
  return (
    <div className='w-screen h-screen relative'>
      <Nav />

      <div className='flex'>
        <Sidebar />
        <Content />
      </div>

    </div>
  )
}

export default page