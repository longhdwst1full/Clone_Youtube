import React, { useContext } from 'react'
import { Context } from '../context/contextApi'
import LeftNav from './LeftNav'
import VideoCard from './VideCart'

export default function Feed() {
  const { loading, searchResults } = useContext(Context)

  return (
    <div className='flex h-[calc(100%-56px)] flex-row'>
      <LeftNav />
      <div className='h-flull w-[calc(100%-240px)] grow overflow-y-hidden'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-5 lg:grid-cols-3 xl:grid-cols-4'>
          {!loading &&
            searchResults.map((item, index) => {
              // console.log(item)
              if (item.type !== 'video') return false
              return (
                <div key={`${item?.video?.videoId}${index}`}>
                  <VideoCard video={item?.video} />
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}
