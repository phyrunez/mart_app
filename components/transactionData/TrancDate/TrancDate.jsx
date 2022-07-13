import React from 'react'
import moment from 'moment'

const TrancDate = ({ date }) => {
  return (
    <div>
      <div className="jan">{moment(date).format("Do MMMM")}</div>
      {/* <div className="feb">February</div> */}
    </div>
  )
}

export default TrancDate