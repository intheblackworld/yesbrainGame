import React from 'react'
import { DoubleBounce } from 'better-react-spinkit'



const WillMountAnimation = (props) => {
  return (
    <DoubleBounce size={100} color='#CF6766' />
  )
}


const LoadingStatus = (props) => {
  return (
    <div>100%</div>
  )
}

export {
  WillMountAnimation,
  LoadingStatus
}
