import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Logo from '../../components/Logo'
import SearchForm from '../../components/SearchForm'
import { getUser, UserType } from '../../services/usersService'
import ProfileCard from './ProfileCard'
import { Container, Content, Header, NotFound } from './styles'

const User: React.FC = () => {
  const params = useParams()
  const navigate = useNavigate()

  const [error, setError] = useState(false)
  const [user, setUser] = useState<UserType | undefined>(undefined)

  useEffect(() => {
    setError(false)
    setUser(undefined)

    if (params.username) {
      getUser(params.username)
        .then(({ data }) => {
          setUser(data)
        })
        .catch(() => {
          setError(true)
        })
    }
  }, [params])

  const handleSearch = (username: string) => {
    navigate(`/${username}`)
  }

  return (
    <Container>
      <Header>
        <section>
          <Logo />
        </section>
        <section>
          <SearchForm onSubmit={handleSearch} />
        </section>
      </Header>

      <Content>
        {user && <ProfileCard user={user} />}

        {error && <NotFound>Username not found.</NotFound>}
      </Content>
    </Container>
  )
}

export default User
