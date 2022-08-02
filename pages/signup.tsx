import { signupuser } from '@/api/user'
import React from 'react'
import { useForm,SubmitHandler } from 'react-hook-form'
import { mutate } from 'swr'

type Props = {}
type Form = {
    name:string,
    email:string,
    password:String

}
const signup = (props: Props) => {
    const {register,handleSubmit,formState:{errors}} = useForm<Form>()
    const onSubmit : SubmitHandler<Form> = data =>{
        console.log(data)
        mutate(signupuser(data))
    }
  return (
    <div>signup

        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" {...register('name')} />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="text" {...register('email')}  />
            </div>
            <div>
                <label htmlFor="">PassWord</label>
                <input type="password" {...register('password')}  />
            </div>
            <button>SignUp</button>
        </form>
    </div>
  )
}

export default signup