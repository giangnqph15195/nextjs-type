import { add, getall } from "@/api/categories"
import { TypeCategories } from "@/models/categories"
import useSWR from "swr"


const usercategories = () =>{
    const fetcher = async (url:string) =>{
        const {data} = await getall(url)
        return data
    }
    const {data, error, mutate} =  useSWR('/categorys',fetcher,{dedupingInterval:5000})

    const creatct = async (item:TypeCategories) =>{
        const {data:product} = await add(item)
        return [...data, product]
    }

    return{
        mutate,
        error,
        data,
        creatct
    }
}

export default usercategories