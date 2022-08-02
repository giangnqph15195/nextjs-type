import { getall } from '@/api/categories'
import { creat } from '@/api/products'
import adminlayuot from '@/compoment/layuot/adminlayuot'
import categories from '@/hooks/categories'
import { TypeCategories } from '@/models/categories'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import { mutate } from 'swr'

type Props = {}
type Form = {
    name: string,
    image: string,
    price: number,
    category:string
    
  }
const add = (props: Props) => {
  const [category, setcategory] = useState<TypeCategories[]>([])
  const {data,error,mutate} = categories()
  // if(!data)return <div>Loading ... </div>


  useEffect(()=>{
    const getallCT = async () => {
      const { data } = await getall('/categorys')
      setcategory(data)
    }
    getallCT()
  },[])
   


    const {register,handleSubmit, formState:{errors}} = useForm<Form>()
    const onSubmit : SubmitHandler<Form> =data =>{
        console.log(data)
        console.log(data.image[0])
        const file = data.image[0]
    const formData = new FormData()

    formData.append('file', file)
    formData.append("upload_preset", "mi59v8ju")

    axios({
      url: "https://api.cloudinary.com/v1_1/dkrifqhuk/image/upload",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-formendcoded",
      }, data: formData,
    }).then((res) => {
      data.image = res.data.url
      console.log(data.image)
      mutate(creat(data))
    })
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
        <select id="" {...register('category', {required:true})}>
          {category.map((item) => {
            return <option value={`${item._id}`}>
              {item.name}
            </option>
          })}
        </select>
            <div>
             name:  <input type="text" {...register("name")} />
            </div>
            <div>price:  <input type="text" {...register("price")} /></div>
            <div>img: <input type="file" {...register("image")} /></div>
            <button>add</button>
        </form>

    </div>
  )
}

add.Layout = adminlayuot

export default add