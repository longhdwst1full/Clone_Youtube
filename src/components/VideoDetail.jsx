import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../context/contextApi'
import { fetchDataFromApi } from '../utils/api'
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";

export default function VideoDetail() {
  const { id } = useParams()
  // console.log( param)
  const [video, setVideo] = useState()
  const { setLoading } = useContext(Context)
  const [relatedVideos, setRelatedVideos] = useState()

  const fetchRelatedVideos = () => {
    setLoading(true)
    fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
      setRelatedVideos(res)
      setLoading(false)
    })
  }

  useEffect(() => {
    setLoading(true)
    fetchRelatedVideos()
    fetchDataFromApi(`video/details/?id=${id}`).then((data) => {
      setVideo(data?.contents)
      setLoading(false)
    })
  }, [id])

  return (
    <div className='flex h-[calc(100%-56px)] flex-row justify-center bg-black'>
      <div className='flex w-full max-w-[1280px] flex-col lg:flex-row'>
        <div className='flex flex-col overflow-y-auto px-4 py-3 lg:w-[calc(100%-350px)] lg:py-6 xl:w-[calc(100%-400px)]'>
          <div className='ml-[-16px] mr-[-16px] h-[200px] md:h-[400px] lg:ml-0 lg:mr-0 lg:h-[400px] xl:h-[550px]'>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width='100%'
              height='100%'
              style={{ backgroundColor: '#000000' }}
              playing={true}
            />
          </div>
          <div className='line-clamp-2 mt-4 text-sm font-bold text-white md:text-xl'>{video?.title}</div>
          <div className='mt-4 flex flex-col justify-between md:flex-row'>
            <div className='flex'>
              <div className='flex items-start'>
                <div className='flex h-11 w-11 overflow-hidden rounded-full'>
                  <img className='h-full w-full object-cover' src={video?.author?.avatar[0]?.url} />
                </div>
              </div>
              <div className='ml-3 flex flex-col'>
                <div className='text-md flex items-center font-semibold text-white'>
                  {video?.author?.title}
                  {video?.author?.badges[0]?.type === 'VERIFIED_CHANNEL' && (
                    <BsFillCheckCircleFill className='ml-1 text-[12px] text-white/[0.5]' />
                  )}
                </div>
                <div className='text-sm text-white/[0.7]'>{video?.author?.stats?.subscribersText}</div>
              </div>
            </div>
            <div className='mt-4 flex text-white md:mt-0'>
              <div className='flex h-11 items-center justify-center rounded-3xl bg-white/[0.15] px-6'>
                <AiOutlineLike className='mr-2 text-xl text-white' />
                {`${abbreviateNumber(video?.stats?.views, 2)} Likes`}
              </div>
              <div className='ml-4 flex h-11 items-center justify-center rounded-3xl bg-white/[0.15] px-6'>
                {`${abbreviateNumber(video?.stats?.views, 2)} Views`}
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col overflow-y-auto py-6 px-4 lg:w-[350px] xl:w-[400px]'>
          {relatedVideos?.contents?.map((item, index) => {
            if (item?.type !== 'video') return false
            return <SuggestionVideoCard key={index} video={item?.video} />
          })}
        </div>
      </div>
    </div>
  )
}
