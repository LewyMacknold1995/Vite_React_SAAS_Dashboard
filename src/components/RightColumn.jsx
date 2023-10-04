import React from 'react'
import SalesItems from './SalesItems'
import Webanalytics from './Webanalytics'

const RightColumn = () => {
  return (
    <div className='w-full p-2'>
        <SalesItems />
        <Webanalytics />
    </div>
  )
}

export default RightColumn