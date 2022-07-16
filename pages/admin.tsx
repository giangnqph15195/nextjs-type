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
   const {data,error,mutate,create} = userproduct()
   if(!data)return <div>Loading ... </div>
   if(error)return <div>Errors</div>
   
  return (
    <div>admin
      <div>
      {data.map(item=>(

      <p key={item.id}><Link href={`products/${item.id}`}>{item.name}</Link></p>
    )
      
    )}</div>
    <button onClick={() => mutate(create({ name: "Product A1111" }))}>Add</button>
    </div>
    
  )
}
admin.Layout = adminlayuot
export default admin