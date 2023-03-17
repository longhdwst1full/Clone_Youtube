import { Fragment } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Feed from './components/Feed'
import Header from './components/Header'
import SearchResult from './components/SearchResult'
import VideoDetail from './components/VideoDetail'
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <div className='h-full flex flex-col'>
        <Header />
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route 
          path='/searchResult/:searchResult' element={<SearchResult />} 
          />
          <Route path='/video/:id' element={<VideoDetail />} />
        </Routes>
        </div>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
