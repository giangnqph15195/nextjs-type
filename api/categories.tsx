import { TypeCategories } from "@/models/categories";
import instance from "./instance";

export const getall = (url:string) =>{
    return instance.get(url)
}
export const getonect = (id:string) =>{
    return instance.get(`categorys/${id}`)
}
export const removect = (id:string) =>{
    return instance.delete(`category/${id}`)
}
export const read = (id:string) =>{
    return instance.get(`/category/${id}`)
}

export const add = (category:TypeCategories) =>{
    return instance.post('/categorys',category)
}