import React from 'react'

const HeaderCommonBox = ({BoxName , BoxIcon}) => {
  return (
    <div className='flex items-center gap-2 text-md'>
        <BoxIcon size={20} />
        <button>{BoxName}</button>
    </div>
  )
}

export default HeaderCommonBox