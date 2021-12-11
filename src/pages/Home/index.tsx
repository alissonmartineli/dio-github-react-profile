import React from 'react'
import Logo from '../../components/Logo'
import SearchForm from '../../components/SearchForm'
import { Container } from './styles'

const Home: React.FC = () => {
  const handleSubmit = (username: string) => {
    console.log(username)
  }

  return (
    <Container>
      <Logo />
      <SearchForm onSubmit={handleSubmit} />
    </Container>
  )
}

export default Home
