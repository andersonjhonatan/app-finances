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
  InfoTransction,
} from './styles'
import Cards from '../../components/Cards'
import { DataProps, TransictionCards } from '../../components/TransictionCards'

type ItemData = {
  title: string
  amount: string
  category: {
    name: string
    icon: string
  }
  date: string
}

export function Dashboard() {
  const DATA: ItemData[] = [
    {
      title: 'Desenvolvimento de site',
      amount: 'R$ 16.400,00',
      category: { name: 'Alimentação', icon: 'dollar-sign' },
      date: '13/04/2022',
    },

    {
      title: 'Vendas',
      amount: 'R$ 1.400,00',
      category: { name: 'Alimentação', icon: 'dollar-sign' },
      date: '13/04/2022',
    },
    {
      title: 'Vendas',
      amount: 'R$ 1.400,00',
      category: { name: 'Alimentação', icon: 'dollar-sign' },
      date: '13/04/2022',
    },
    {
      title: 'Vendas',
      amount: 'R$ 1.400,00',
      category: { name: 'Alimentação', icon: 'dollar-sign' },
      date: '13/04/2022',
    },
    {
      title: 'Vendas',
      amount: 'R$ 1.400,00',
      category: { name: 'Alimentação', icon: 'dollar-sign' },
      date: '13/04/2022',
    }
  ]

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

        <InfoTransction
          data={DATA}
          renderItem={(item) => <TransictionCards data={item.item} />}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      </ContainerTransiction>
    </Container>
  )
}
