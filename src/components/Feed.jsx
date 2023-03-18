import React, { useContext, useEffect } from 'react'
import { Context } from '../context/contextApi'
import LeftNav from './LeftNav'
import VideoCard from './VideCart'

export default function Feed() {
  const { loading, searchResults } = useContext(Context)

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
}, []);

  return (
    <div className='flex h-[calc(100%-56px)] flex-row'>
      <LeftNav />
      <div className='grow w-[calc(100%-240px)] h-full overflow-y-auto'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-5 p-5 lg:grid-cols-3 xl:grid-cols-4'>
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
