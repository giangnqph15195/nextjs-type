import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <h1>Header
      <ul>
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
        <Link href="/products">Products</Link>
        </li>
        <li>
        <Link href="/">Home</Link>
        </li>
      </ul>
    </h1>
  )
}

export default Header