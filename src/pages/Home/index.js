import React, { useState } from 'react'
import Start from '../Start'
import Main from '../Main'

export default function Home() {
  return <>{localStorage.getItem('auth') ? <Start /> : <Main />}</>
}
