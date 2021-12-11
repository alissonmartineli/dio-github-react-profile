import { render, screen } from '@testing-library/react'
import Logo from '.'

test('renders h1 tag with text', () => {
  render(<Logo />)
  const h1Element = screen.getByText(/github profile search/i)
  expect(h1Element).toBeInTheDocument()
})
