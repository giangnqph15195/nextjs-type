import { GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

type ProductProps = {
  product: any;
}

const ProductDetail = ({product}: ProductProps) => {
  if(!product) return null;
  return (
    <div>{product.name}, {product.price}, <img src={`${product.image}`} alt="" /></div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await (await fetch(`http://localhost:3001/api/products`)).json();
  const paths = data.map((product: any) => (
    { params: { id: product._id } }
  ))
  return {
    paths,
    fallback: true // blocking or true
  }
}
// server
export const getStaticProps: GetStaticProps<ProductProps> = async (context: GetStaticPropsContext) => {
  console.log('context', context);
  const product = await (await fetch(`http://localhost:3001/api/product/${context.params?.id}`)).json();
  return {
    props: {product},
    revalidate: 5
  }
  
}

// export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
//   console.log('context', context);
//   context.res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate")
//   const product = await (await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products/${context.params?.id}`)).json();
//   return {
//     props: { product }
//   }
// }

export default ProductDetail