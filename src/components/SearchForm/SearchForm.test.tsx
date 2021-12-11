import { render, screen, fireEvent } from '@testing-library/react'
import SearchForm from '.'

test('renders button', () => {
  const callback = jest.fn()

  render(<SearchForm onSubmit={callback} />)
  const buttonEl = screen.getByText(/Search/i)
  expect(buttonEl).toBeInTheDocument()
})

test('dont calls a callback when submit a form and input is empty', () => {
  const callback = jest.fn()

  render(<SearchForm onSubmit={callback} />)

  const buttonEl = screen.getByRole('button')

  fireEvent.click(buttonEl)
  expect(callback).toHaveBeenCalledTimes(0)
})

test('renders a error message when submit a form and input is empty', () => {
  const callback = jest.fn()

  render(<SearchForm onSubmit={callback} />)

  const formEl = screen.getByTestId('search-form')

  fireEvent.submit(formEl)

  const errorEl = screen.getByText(/please enter a username/i)
  expect(errorEl).toBeInTheDocument()
})

test('calls a callback when submit a form and input is filled', () => {
  const callback = jest.fn()

  render(<SearchForm onSubmit={callback} />)

  const buttonEl = screen.getByRole('button')

  const inputEl = screen.getByTestId('search-input')
  fireEvent.change(inputEl, { target: { value: 'username' } })

  fireEvent.click(buttonEl)
  expect(callback).toHaveBeenCalledTimes(1)
})
