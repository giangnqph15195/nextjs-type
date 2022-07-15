import { LayoutProps } from '@/models/layouts'
import React from 'react'
import Header from '../Header'

type Props = {}

const weblayout = ({children}: LayoutProps) => {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}

export default weblayout