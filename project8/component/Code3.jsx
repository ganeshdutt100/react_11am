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

   const totalPages =   Math.ceil(products.length / productPerPage)
    const lastIndexPage =   currentPage * productPerPage
    const firstIndexPage  =  lastIndexPage  - productPerPage

  const indexOfFistPage  =  products.slice(firstIndexPage ,lastIndexPage );

  if(laoding){
    return (
      <p>Loading...</p>
    )
  }



  return (
    <> 
    <div className='flex flex-wrap gap-4'>
      {indexOfFistPage.map((product) => (
        <div key={product.id}  className='flex flex-col justify-center items-center border border-3 gap-4' >
          <div>
            <img src={product.image} alt={product.title} className='w-[200px]' />
          </div>
          <div>
            <p>{product.category}</p>
            <p>{product.title}</p>
            <p>{product.price}</p>
          </div>


        </div>
      ))}
    </div>

    <div>
      <button 
      disabled={currentPage ===1}
      onClick={()=>setCurrentpage(prev => prev-1)} >←Prev</button>
      <span>Pages {currentPage} to {totalPages} </span>
      <button disabled={currentPage === totalPages } onClick = {()=>setCurrentpage(prev => prev+1)} >→Next</button>

    </div>
    </>
  )
}



// arr =   50 elements  / 4


// 12 - 4 = 8

// array.slice(stating  , lastIndexPage   )

// lastIndexPage  - productPerPage 