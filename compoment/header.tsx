
import Link from 'next/link'
import React from 'react'
import style from './header.module.scss'

type Props = {}

const Header = (props: Props) => {
  return (
  <div>
     <main>
      <ul className={style.menu}>
        <li  className={style.menu__link}>
            <Link className='text-[yellow]' href="/">Home</Link>
        </li>
        <li className={style.menu__link} >
          <Link href="/products">Products</Link>
        </li>
        <li className={style.menu__link}>
          <Link href="/admin">admin</Link>
        </li>
      </ul>
    
   </main>
  </div>
  )
}


export default Header