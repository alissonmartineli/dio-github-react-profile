import React, { FormEvent, useState } from 'react'
import { Button, ErrorMessage, Form, Input } from './styles'

interface IProps {
  onSubmit: (username: string) => void
}

const SearchForm: React.FC<IProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!username) {
      setError(true)
      return
    }

    onSubmit(username)
  }

  const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    setError(false)
    setUsername(event.currentTarget.value)
  }

  return (
    <>
      <Form onSubmit={handleSubmit} data-testid="search-form">
        <label htmlFor="">github.com/</label>
        <Input
          placeholder="Enter a GitHub Username"
          value={username}
          onChange={handleInputChange}
          data-testid="search-input"
        />
        <Button type="submit">Search</Button>
      </Form>
      {error && <ErrorMessage>Please enter a username</ErrorMessage>}
    </>
  )
}

export default SearchForm
