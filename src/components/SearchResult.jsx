import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../context/contextApi'
import { fetchDataFromApi } from '../utils/api'
import LeftNav from './LeftNav'
import SearchResultVideo from './SearchResultVideo'

export default function SearchResult() {
  const { searchResult } = useParams()
  // console.log(searchResult)
  const [result, setResult] = useState()

  const {  setLoading } = useContext(Context)

  useEffect(() => {
    setLoading(true)

    fetchDataFromApi(`search/?q=${searchResult}`).then((data) => {
      setResult(data?.contents)
      setLoading(false)
    })
  }, [searchResult])
  return (
    <div className='flex flex-row'>
      <LeftNav />
      <div className='h-full grow'>
        <div className='grid grid-cols-1 gap-2 p-5'>
          {result?.map((item,index) => {
            if (item?.type !== 'video') return false
            let video = item.video
            return (
              <div key={`${video.videoId}${index}`}>

                <SearchResultVideo video={video} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
