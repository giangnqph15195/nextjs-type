import { UserType } from "@/models/user";
import instance from "./instance";


export const signupuser = (user:UserType) =>{
    return instance.post('/signup',user)
}
export const signinuser = (user:UserType) =>{
    return instance.post('/signin',user)
}
