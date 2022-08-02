import { creat, getall, getone, remove, updatepd } from "@/api/products"
import { TypeProduct } from "@/models/products"
import useSWR from "swr"
const userproduct = () => {
  const fetcher = async (url: string) => {
    const { data } = await getall(url)
    return data
  }
  const { data, error, mutate } = useSWR('/products', fetcher, { dedupingInterval: 5000 })
  const geton = async (id: string) => {
    const { data } = await getone(id)
    return data
  }
  const create = async (item: TypeProduct) => {
    const { data: product } = await creat(item)
    return [...data, product]
  }
  const update = async (item: TypeProduct) => {
    const { data: pdedit } = await updatepd(item)
    return data
  }
  const dele = async (id: string) => {
    const { data } = await remove(id)
    return data
  }
  return {
    data,
    error,
    mutate,
    create,
    update,
    geton,
    dele
  }
}

export default userproduct