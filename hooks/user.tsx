import { UserType } from "@/models/user"
import {signinuser, signupuser } from "@/api/user"
const userpertion = ()=>{
    const signup = async (item:UserType) =>{
        const {data} = await signupuser(item)
    }
    const signin = async (item:UserType) =>{
        const {data: user} = await signinuser(item)
        return {user}
    }

    return{
        signup,
        signin,

    }
}
export default userpertion