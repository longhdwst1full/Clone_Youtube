import { Link } from 'react-router-dom'
import VideoLength from '../shared/VideoLength'
import { abbreviateNumber } from 'js-abbreviation-number'
import { BsFillCheckCircleFill } from 'react-icons/bs'

export default function SearchResultVideo({ video }) {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className='mb-8 flex flex-col rounded-xl md:mb-3 md:flex-row md:p-4 lg:hover:bg-[#303030]/[0.1]'>
        <div className='relative flex h-48 w-full shrink-0 overflow-hidden rounded-xl bg-slate-800 md:h-28 md:w-48 lg:h-40 lg:w-64 xl:h-48 xl:w-80'>
          <img className='h-full w-full object-cover' alt='dfdf' src={video?.thumbnails[0]?.url} />

          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </div>

        <div className='ml-4 mt-4 flex flex-col overflow-hidden md:ml-6 md:mt-0'>
          <span className='line-clamp-2 text-lg font-semibold text-[#303030] md:text-2xl'>{video?.title}</span>
          <span className='line-clamp-1 md:line-clamp-2 text-sm text-[#303030]/[0.7] empty:hidden md:my-4 md:pr-24'>
            {video?.descriptionSnippet}
          </span>
          <div className='hidden items-center md:flex'>
            <div className='mr-3 flex items-start'>
              <div className='flex h-9 w-9 overflow-hidden rounded-full'>
                <img className='h-full w-full object-cover' src={video?.author?.avatar[0]?.url} />
              </div>
            </div>
            <div className='flex flex-col'>
              <span className='mt-2 flex items-center text-sm font-semibold text-[#303030]/[0.7]'>
                {video?.author?.title}
                {video?.author?.badges[0]?.type === 'VERIFIED_CHANNEL' && (
                  <BsFillCheckCircleFill className='ml-1 text-[12px] text-[#303030]/[0.5] lg:text-[10px] xl:text-[12px]' />
                )}
              </span>
              <div className='flex overflow-hidden truncate text-sm font-semibold text-[#303030]/[0.7]'>
                <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
                <span className='relative top-[-10px] mx-1 flex text-[24px] font-bold leading-none text-[#303030]/[0.7]'>
                  .
                </span>
                <span className='truncate'>{video?.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
