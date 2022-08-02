import { add } from '@/api/categories'
import adminlayuot from '@/compoment/layuot/adminlayuot'
import { create } from 'domain'

import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import { mutate } from 'swr'
type Props = {}
type From ={
    name:string
}
const addcategories = (props: Props) => {
    const {register,handleSubmit,formState:{errors}} = useForm<From>()

    const onSubmit : SubmitHandler<From> = data => {
        console.log(data)
        mutate(add(data))
    }
  return (
    <div>addcategories
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <p>Name</p>
                <input type="text"  {...register('name')} />
            </div>
            <button> ADD</button>
        </form>
    </div>
  )
}
addcategories.Layout = adminlayuot
export default addcategories