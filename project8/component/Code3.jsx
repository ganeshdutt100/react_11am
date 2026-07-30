import React, { useEffect , useState} from 'react'

export const Code3 = () => {
  const [products, setProducts] = useState([])
  const [laoding, setLoading] = useState(true)
  const [currentPage , setCurrentpage] = useState(1)

  const productPerPage = 4

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((data)=>{
      setProducts(data)
      setLoading(false)


    })
  },[])


  return (
    <div>Code3</div>
  )
}
