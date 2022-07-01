import { GetStaticPaths, GetStaticPathsContext, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

type ProductProps = {
  product: any;
}

const ProductDetail = ({product}: ProductProps) => {
    // const router = useRouter()
    // const {id} = router.query
  return (
    <div>ProductDetail updatdsae<p className='text-[orange] text-[30px]'> {product.name}</p></div>
  )
}
export const getStaticPaths:GetStaticPaths = async ()=>{
  const data = await(await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`)).json()
  const paths = data.map(product =>(
    {params: {id:product.id}}
  ))
  return{
    paths,
    fallback: false
  }
}

export const getStaticProps:GetStaticProps<ProductProps> = async (context: GetStaticPathsContext)=>{
  const product = await(await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products/${context.params?.id}`)).json()  
  return{
    props:{product},
    revalidate:60
    }
  }
export default ProductDetail