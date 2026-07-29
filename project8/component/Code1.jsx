import React, { useEffect, useState } from 'react'

const Code1 = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res)=>{
       if(!res.ok){
        throw new Error("Empty")
       }
      return  res.json()
        })
        .then((data)=>{
           setUsers(data)
           setLoading(false)
        })
        .catch((err)=>{
          setError(err.message)
          setLoading(false)
        })
    } , [])

    if(loading)return <p>Loading data...</p>
  return (
    <div>
        <h3>Fetch</h3>
        <ul>
            {users.map((title)=>(
                <li key={title.id} >{title.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default Code1