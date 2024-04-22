import React from 'react'
import { Container, Header, Title, Icon, Footer, Amount, LastTransaction } from './styles'

interface Props {
  title: string
  $total?: boolean
}

const Cards = ({ ...props }: Props) => {
  return (
    <Container  {...props} >
      <Header>
        <Title>{props.title}</Title>
        <Icon name="arrow-up-circle" />
      </Header>
      <Footer>
        <Amount>R$ 17.400,00</Amount>
        <LastTransaction>Última entrada dia 13 de abril</LastTransaction>
      </Footer>
    </Container>
  )
}

export default Cards
