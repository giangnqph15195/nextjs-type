import { getall } from '@/api/products'
import { url } from 'inspector'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'
import SWR from 'swr'
type PropsProdut = {
  products: any[]
}

const Product = () => {

  const fetcher = async (url:string) =>{
    const {data} = await getall(url)
    return data 
  }
   const {data , error} = useSWR('/products',fetcher,{dedupingInterval:5000})
   if(!data)return <div>Loading ... </div>
   if(error)return <div>Errors</div>
   
  return (
    <div className='text-[red] text-[30px]'>Product <br />
    <div>
      {data.map(item=>(

      <p key={item.id}><Link href={`products/${item.id}`}>{item.name}</Link></p>
    )
      
    )}</div>
    dnsajdj
    </div>
  )
}

//export const getStaticProps: GetStaticProps<PropsProdut>= async (context)=>{
  //const data = await (await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`)).json()
 // return {
  //  props:{
   //   products: data.map(item => ({id:item.id, name:item.name}))
 //   }
    
  //}
//}
export default Product  