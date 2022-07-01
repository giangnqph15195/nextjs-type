import { GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'

type PropsProdut = {
  products: any[]
}

const Product = ({products}: PropsProdut) => {
  return (
    <div className='text-[red] text-[30px]'>Product <br />
    <div>{products.map(item=>(

      <p key={item.id}><Link href={`products/${item.id}`}>{item.name}</Link></p>
    )
      
    )}</div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<PropsProdut>= async (context)=>{
  const data = await (await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`)).json()
  return {
    props:{
      products: data.map(item => ({id:item.id, name:item.name}))
    }
    
  }
}
export default Product  