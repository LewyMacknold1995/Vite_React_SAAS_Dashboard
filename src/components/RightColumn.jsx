import React from 'react'
import SalesItems from './SalesItems'
import Webanalytics from './Webanalytics'
import ScoreList from './ScoreList'

const RightColumn = () => {
  return (
    <div className='w-full p-2'>
        <SalesItems />
        <Webanalytics />
        <ScoreList />
    </div>
  )
}

export default RightColumn