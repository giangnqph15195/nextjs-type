import { getall } from '@/api/categories';
import { getone, updatepd } from '@/api/products';
import adminlayuot from '@/compoment/layuot/adminlayuot'
import userproduct from '@/hooks/products';
import { TypeCategories } from '@/models/categories';
import { TypeProduct } from '@/models/products';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useForm,SubmitHandler } from 'react-hook-form';
import useSWR, { mutate } from 'swr';

type Props = {}

type ProductProps = {
  product: TypeProduct;
}
type Form = {
   name:string,
    image:string
    price:number,
    description: string,
    category: string
}
const Edit = ({product}: ProductProps) => {
  const {register,handleSubmit, formState:{errors},reset} = useForm<Form>()
  const [productEdit,setproductEdit] = useState<TypeProduct>()
  const [category, setcategory] = useState<TypeCategories[]>([])
  const {data,error,update} = userproduct()

  
  
  // const router = useRouter();
  //   const { _id } = router.query;
  //   console.log("id nha",_id)

    useEffect(()=>{
      const getallCT = async () => {
        const { data:cate } = await getall('/categorys')
        setcategory(cate)
        setproductEdit(product)
        reset(product)
        console.log('abc',productEdit)
      }
      getallCT()
    },[])


    


    const onSubmit : SubmitHandler<Form> = data  =>{
      console.log(data)
      
      // mutate(update(data))

    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <select id="" {...register('category', {required:true})} >
          {category.map((item) => {
            return <option value={`${item._id}`}>
              {item.name}
            </option>
          })}
        </select>
 <div className="mb-3">
      <label  className="form-label">Name Product:</label>
      <input type="text" className='form-control' {...register('name')} />
    </div>
    <div className="mb-3">
      <label  className="form-label">Image View:</label>
      {/* <input type="file" className='form-control' {...register('image')} /> */}
      <img src={`}`} alt="" />
    </div>
    <div className="mb-3">
      <label  className="form-label">Image Product:</label>
      <input type="file" {...register('image')}  />
    </div>
    <div className="mb-3">
      <label  className="form-label">Price:</label>
      <input type="number" className='form-control' {...register('price')} />
    </div>
    <div className="mb-3">
      <label  className="form-label">Details:</label>
      <input type="text" className='form-control' {...register('description')} value={`${product?.description}`} />
    </div>
    <button type="submit" className="btn btn-primary text-black hover:text-white">Submit</button>
        </form>
    </div>
  )
}
Edit.Layout = adminlayuot

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
    revalidate: 5,
    
  }
  
}
export default Edit