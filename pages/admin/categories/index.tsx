import { removect } from '@/api/categories'
import adminlayuot from '@/compoment/layuot/adminlayuot'
import usercategories from '@/hooks/categories'
import Link from 'next/link'
import React from 'react'

type Props = {}

const categories = (props: Props) => {
    const {data,error,mutate} = usercategories()
    if(!data)return <div>Loading ... </div>
   if(error)return <div>Errors</div>
  return (
    <div>categories
        {data.map(item =>(
            <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td><button onClick={()=> removect(item._id) }>remove</button></td>
            </tr>
        ))}
         <Link href={`categories/add`} >add</Link>
    </div>
   
  )
}
categories.Layout = adminlayuot
export default categories