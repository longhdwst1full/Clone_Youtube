import React from 'react'

const LeftNavMenuItem = ({ text, icon, className, action }) => {
  // console.log(prop)
  return (
    <div
      className={
        'mb-[1px] flex h-10 cursor-pointer items-center rounded-lg px-3 text-sm text-[#303030] hover:bg-[#303030]/[0.15] ' +
        className
      }
      onClick={action}
    >
      <span className="text-xl mr-5">{icon}</span>
      {text}
    </div>
  )
}

export default LeftNavMenuItem
