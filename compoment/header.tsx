
import Link from 'next/link'
import React from 'react'
import style from './header.module.scss'

type Props = {}

const Header = (props: Props) => {
  return (
  <div>
     <main>
     <h1 className='text-[orange]'>Header</h1>
      <ul className={style.menu}>
        <li  className={style.menu__link}>
            <Link className='text-[yellow]' href="/">Home</Link>
        </li>
        <li className={style.menu__link} >
          <Link href="/products">Products</Link>
        </li>
        <li className={style.menu__link}>
          <Link href="/">Home</Link>
        </li>
      </ul>
    
   </main>
  </div>
  )
}


export default Header