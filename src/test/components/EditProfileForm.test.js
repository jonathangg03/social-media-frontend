import React from 'react'
import { render } from '@testing-library/react'
import EditProfileForm from '../../components/EditProfileForm'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'

describe('<EditProfileForm />', () => {
  let view
  beforeEach(() => {
    view = render(
      <BrowserRouter>
        <EditProfileForm />
      </BrowserRouter>
    )
  })

  test('Is rendering', () => {
    expect(view.container).toHaveTextContent('Actualizar')
  })
})
