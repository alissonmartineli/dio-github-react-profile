import { render, screen } from '@testing-library/react'
import App from './App'

test('renders h1 hello world tag', () => {
  render(<App />)
  const h1Element = screen.getByText(/hello world!/i)
  expect(h1Element).toBeInTheDocument()
})
