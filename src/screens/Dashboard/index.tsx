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
  ContainerTransiction,
  Listagem,
} from './styles'
import Cards from '../../components/Cards'
import { Image, Text, View } from 'react-native'
import TransictionCards from '../../components/TransictionCards'

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
        <Cards
          title="Entradas"
          amout="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
          type="up"
        />
        <Cards
          title="Saidas"
          amout="R$ 1.000,00"
          lastTransaction="Última saída dia 13 de abril"
          type="down"
        />
        <Cards
          title="Total"
          amout="R$ 16.400,00"
          lastTransaction="01 a 16 de abril"
          type="total"
        />
      </ContainerCards>
      <ContainerTransiction>
      <Listagem>Listagem</Listagem>
        <TransictionCards />
      </ContainerTransiction>
    </Container>
  )
}
