import React from 'react'
import { useParams } from 'react-router-dom'

function Services() {
    let {cid}=useParams()
  return (
    <div>
        <h1>This is {cid}</h1>
    </div>
  )
}
export default Services
