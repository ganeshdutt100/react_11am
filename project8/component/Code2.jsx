import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Code2 = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
      

        .then((res)=>{
           setUsers(res.data)
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
        <h3>Axios</h3>
        <ul>
            {users.map((user)=>(
                <li key={user.id} > Name :   {user.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Code2