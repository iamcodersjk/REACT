    import React, { useState } from 'react'

function Hook() {
    let [cup, setCup]=useState(10)
    var abc=()=>{
        setCup(cup+2)
    }
    var sjk=()=>{
        setCup(cup-2)
    }
  return (
    <div>
        <h1>React Hook</h1>
        <h2>{cup}</h2>
        <button onClick={abc}>++</button>
        <button onClick={sjk}>--</button>
    </div>
  )
}

export default Hook