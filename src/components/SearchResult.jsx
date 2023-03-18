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

  const { setLoading } = useContext(Context)

  useEffect(() => {
    document.getElementById('root').classList.remove('custom-h')
    setLoading(true)

    fetchDataFromApi(`search/?q=${searchResult}`).then((data) => {
      setResult(data?.contents)
      setLoading(false)
    })
  }, [searchResult])
  return (
    <div className='flex h-[calc(100%-56px)] flex-row'>
      <LeftNav />
      <div className='grow w-[calc(100%-240px)] h-full overflow-y-auto'>
        <div className='grid grid-cols-1 gap-2 p-5'>
          {result?.map((item, index) => {
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
