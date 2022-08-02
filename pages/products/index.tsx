import { getall } from '@/api/products'
import adminlayuot from '@/compoment/layuot/adminlayuot'
import usercategories from '@/hooks/categories'
import userproduct from '@/hooks/products'
import { TypeCategories } from '@/models/categories'
import { url } from 'inspector'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'

type Props = {}

const Product = () => {
  //const fetcher = async (url:string) =>{
   // const {data} = await getall(url)
   // return data 
 // }\
   const [categories,setcategories] = useState<TypeCategories[]>([])
   useEffect(()=>{
    const getallCT = async () => {
      const { data } = await getall('/categorys')
      setcategories(data)
    }
    getallCT()
   },[])
   const {data,error,mutate,create,dele} = userproduct()
   if(!data)return <div>Loading ... </div>
   if(error)return <div>Errors</div>

   
  return (
    <div>
      <div>Categories
          {categories.map(item=>(
            <Link href={`categories/${item._id}`}>{item.name}</Link>
          ))}
        </div> 
      <div>
      {data.map(item=>(
        <tr key={item._id}>
          <td>{item.name}</td>
          <td><Link href={`/products/${item._id}`}>edit</Link></td>
          <td><button onClick={()=> dele(`${item._id}`)} >Remove</button></td>
          <td></td>
        </tr>
      // <p key={item.id}><Link href={`products/${item.id}`}>{item.name}</Link></p>
    )
      
    )}</div>
    <button><Link href={`admin/add`}>ADD</Link></button>
    </div>
    
  )
}
export default Product