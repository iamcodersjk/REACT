import React, { useEffect ,useState} from 'react'

function cat() {
    let [data, setData]=useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/products/category/smartphones').then((a)=>a.json()).then((b)=>setData(b.products))
    },[])
    console.log(data)
  return (
    <div>
        <ul>
            {data.map((a)=>(
                <li>{a.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default cat