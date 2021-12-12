import React from 'react'
import Logo from '../../components/Logo'
import SearchForm from '../../components/SearchForm'
import { Container, Content, Header, NotFound } from './styles'

const User: React.FC = () => {
  return (
    <Container>
      <Header>
        <section>
          <Logo />
        </section>
        <section>
          <SearchForm onSubmit={(username) => console.log(username)} />
        </section>
      </Header>

      <Content>
        <NotFound>Username not found.</NotFound>
      </Content>
    </Container>
  )
}

export default User
