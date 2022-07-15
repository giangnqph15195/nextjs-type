import { LayoutProps } from '@/models/layouts'
import React from 'react'

type Props = {}

const adminlayuot = ({children}: LayoutProps) => {
  return (
    <div>
        <div>
            Admin Layout
        </div>
        {children}
    </div>

  )
}

export default adminlayuot