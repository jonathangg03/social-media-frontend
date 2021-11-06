import React, { useState } from 'react'
import Start from '../Start'
import Main from '../Main'

export default function Home() {
  const [auth, setAuth] = useState(localStorage.getItem('auth'))

  return <>{auth ? <Start /> : <Main />}</>
}
