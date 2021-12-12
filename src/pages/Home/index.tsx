import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../components/Logo'
import SearchForm from '../../components/SearchForm'
import { Container } from './styles'

const Home: React.FC = () => {
  const navigate = useNavigate()

  const handleSubmit = (username: string) => {
    navigate(`/${username}`)
  }

  return (
    <Container>
      <Logo />
      <SearchForm onSubmit={handleSubmit} />
    </Container>
  )
}

export default Home
