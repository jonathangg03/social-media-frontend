import React from 'react'
import Logo from '../Logo'

export default function Layout({ children }) {
  return (
    <div>
      <Logo />
      {children}
    </div>
  )
}
