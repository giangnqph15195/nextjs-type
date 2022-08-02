import { getall } from '@/api/products'
import adminlayuot from '@/compoment/layuot/adminlayuot'
import userproduct from '@/hooks/products'
import { url } from 'inspector'
import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'

type Props = {}

const admin = () => {
  //const fetcher = async (url:string) =>{
   // const {data} = await getall(url)
   // return data 
 // }
   const {data,error,mutate,create,dele} = userproduct()
   if(!data)return <div>Loading ... </div>
   if(error)return <div>Errors</div>
   
  return (
    <div>admin  
      <div>
      {data.map(item=>(
        <tr key={item._id}>
          <td>{item.name}</td>
          <td><Link href={`admin/edit/${item._id}`}>edit</Link></td>
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
admin.Layout = adminlayuot
export default admin