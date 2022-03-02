import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import EditProfileForm from '../../components/EditProfileForm'
import '@testing-library/jest-dom/extend-expect'

describe('<EditProfileForm />', () => {
  let view
  const mockEvent = jest.fn()

  beforeEach(() => {
    view = render(
      <EditProfileForm handleSubmit={mockEvent} profile={{ name: '' }} />
    )
  })

  test('Is rendering', () => {
    expect(view.container).toHaveTextContent('Cambiar')
  })

  test('Form is sending', () => {
    const button = view.getByText('Actualizar')
    fireEvent.submit(button.parentNode)
    expect(mockEvent).toHaveBeenCalledTimes(1)
  })
})
