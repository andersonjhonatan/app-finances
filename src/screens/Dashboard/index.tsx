import React from 'react'

import {
  Container,
  Header,
  UserWrapper,
  UserImagem,
  UserInfo,
  UserGreeting,
  UserName,
  Icon,
  User,
} from './styles'

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserImagem
              source={{ uri: 'https://avatars.githubusercontent.com/u/105141966?v=4' }}
            />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Anderson</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
    </Container>
  )
}
