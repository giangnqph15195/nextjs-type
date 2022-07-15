import instance from "./instance";

export const getall = (url:string) =>{
    return instance.get(url)
}