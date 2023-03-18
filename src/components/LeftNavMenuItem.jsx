import React from 'react'

const LeftNavMenuItem = ({ text, icon, className, action }) => {
  // console.log(prop)
  return (
    <div
      className={
        'mb-[1px] flex h-10 cursor-pointer items-center rounded-lg px-3 text-sm text-white hover:bg-white/[0.15] ' +
        className
      }
      onClick={action}
    >
      <span className='mr-5 text-xl'>{icon}</span>
      {text}
    </div>
  )
}

export default LeftNavMenuItem
