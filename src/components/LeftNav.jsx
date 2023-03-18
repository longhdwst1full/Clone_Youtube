import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { categories } from '../utils/constans'
import { Context } from '../context/contextApi'
import LeftNavMenuItem from './LeftNavMenuItem'

const LeftNav = () => {
  const { selectedCategory, setSelectedCategory, mobileMenu } = useContext(Context)

  const navigate = useNavigate()

  const clickHandler = (name, type) => {
    switch (type) {
      case 'category':
        return setSelectedCategory(name)
      case 'home':
        return setSelectedCategory(name)
      case 'menu':
        return false
      default:
        break
    }
  }

  return (
    <div
      className={` absolute z-10 h-full w-[240px] translate-x-[-240px] overflow-y-auto bg-black py-4 transition-all md:relative md:block md:translate-x-0
      
      ${
        mobileMenu ? '!translate-x-0' : ''
      }`}
    >
      <div className='flex flex-col px-5'>
        {categories.map((item) => {
          // console.log(item)
          return (
            <React.Fragment key={item.name}>
              <LeftNavMenuItem
                text={item.type === 'home' ? 'Home' : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type)
                  navigate('/')
                }}
                className={`${selectedCategory === item.name ? 'bg-white/[0.15]' : ''}`}
              />
              {item.divider && <hr className='my-5 border-white/[0.2]' />}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default LeftNav
