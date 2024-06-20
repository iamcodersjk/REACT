import React, { useEffect ,useState} from 'react'

function Abc() {
    let [data, setData]=useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/products').then((a)=>a.json()).then((b)=>setData(b.products))
    },[])
    console.log(data)
  return (
    <div>
        <h1>useEffect Hook</h1>
        <ul>
            {data.map((a)=>(
                <li>{a.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default Abc