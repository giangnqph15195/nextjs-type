import { signinuser } from '@/api/user'
import userpertion from '@/hooks/user'
import { UserType } from '@/models/user'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { mutate } from 'swr'

type Props = {}
type Form ={
  email:string,
  password:string
}
const signin = (props: Props) => {
  const {register, handleSubmit,formState:{errors}} = useForm<Form>()
  const {signin} = userpertion()
  const onSubmit : SubmitHandler<Form> = data =>{
    console.log(data)
    signin(data).then(()=>{localStorage.setItem('user', JSON.stringify(data))})
  }
  return (
    <div>signin
         <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="">Email</label>
                <input type="text" {...register('email')} />
            </div>
            <div>
                <label htmlFor="">PassWord</label>
                <input type="password" {...register('password')} />
            </div>
            <button>SignUp</button>
        </form>
    </div>
  )
}

export default signin