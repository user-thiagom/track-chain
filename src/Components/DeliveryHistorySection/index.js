import React from 'react'
import CardTrackingInfo from '../CardTrackingInfo/'

function index({contract}) {
  return (
    <>
        {contract.map((history) => {
            return <CardTrackingInfo data={history} />
        })}
    </>
  )
}

export default index