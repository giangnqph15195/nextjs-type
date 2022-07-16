import instance from "./instance";

export const getall = (url:string) =>{
    return instance.get(url)
}
export const creat = (products:any) =>{
    return instance.post("/products",products)
}