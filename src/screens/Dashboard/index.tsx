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
  ContainerCards,
} from './styles'
import Cards from '../../components/Cards'

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
      <ContainerCards>
        <Cards title="Entrada" $entrada name="arrow-up-circle" />
        <Cards title="Saida" $saida name="arrow-down-circle" />
        <Cards title="Total" $total name="dollar-sign" />
      </ContainerCards>
    </Container>
  )
}
