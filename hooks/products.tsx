import { creat, getall } from "@/api/products"
import useSWR from "swr"
const userproduct = () => {
const fetcher = async (url:string) =>{
    const {data} = await getall(url)
    return data 
  }
  const {data , error,mutate} = useSWR('/products',fetcher,{dedupingInterval:5000})

  const create = async (item) =>{
    const {data :product} = await creat(item)
    return [...data, product]
  }
  return{
    data, 
    error,
    mutate,
    create
   }
}

export default userproduct