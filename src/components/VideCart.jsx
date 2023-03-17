import { abbreviateNumber } from 'js-abbreviation-number'
import { Link } from 'react-router-dom'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import VideoLength from '../shared/VideoLength'

export default function VideCart({ video }) {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className='mb-8 flex flex-col'>
        <div className='relative h-48 overflow-hidden md:h-40 md:rounded-xl'>

          <img 
          className='h-full w-full object-cover' alt='dfdf'
           src={video?.thumbnails[0]?.url}
            />

          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}

        </div>

        <div className='mt-3 flex text-[#303030]'>
          <div className='flex items-start'>
            <div className='flex h-9 w-9 overflow-hidden rounded-full'>
              <img className='h-full w-full object-cover' src={video?.author?.avatar[0]?.url} />
            </div>
          </div>

          <div className='ml-3 flex flex-col overflow-hidden'>

            <span className='line-clamp-2 text-sm font-bold'>{video?.title}</span>
            <span className='mt-2 flex items-center text-[12px] font-semibold text-black/[0.7]'>
              {video?.author?.title}
              {video?.author?.badges[0]?.type === 'VERIFIED_CHANNEL' && (
                <BsFillCheckCircleFill className='ml-1 text-[12px] text-black /[0.5]' />
              )}
            </span>

            <div className='flex overflow-hidden truncate text-[12px] font-semibold text-black/[0.7]'>
              <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
              <span className='relative top-[-10px] mx-1 flex text-[24px] font-bold leading-none text-black/[0.7]'>
                .
              </span>
              <span className='truncate'>{video?.publishedTimeText}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
