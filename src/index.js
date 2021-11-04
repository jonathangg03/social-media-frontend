import React from 'react'
import { render } from 'react-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App'
import './index.scss'

render(
  <Auth0Provider
    domain='dev-s0jly-sa.us.auth0.com'
    clientId='A4P1qLwxcJ6V40jGbhhAOjU0jYwn7uP0'
    redirectUri='http://localhost:3000'
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
)
