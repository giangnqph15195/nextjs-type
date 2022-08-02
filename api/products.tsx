import { TypeProduct } from "@/models/products";
import instance from "./instance";

export const getall = (url:string) =>{
    return instance.get(url)
}
export const getone = (_id: string | undefined) =>{
    return instance.get(`/product/${_id}`)
}
export const remove = (_id: string | undefined) =>{
    return instance.delete(`/products/${_id}`)
}
export const creat = (products:any) =>{
    return instance.post("/products",products)
}
export const updatepd = (products:TypeProduct) =>{
    return instance.put(`/products/${products._id}`,products)
}