import React from 'react'
import { Container, Header, Title, Icon, Footer, Amount, LastTransaction } from './styles'

interface Props {
  title: string
  $total?: boolean
  $entrada?: boolean
  $saida?: boolean
  name: string
}

const Cards = ({ ...props }: Props) => {
  return (
    <Container {...props}>
      <Header>
        <Title {...props}>{props.title}</Title>
        <Icon name={props.name} {...props} />
      </Header>
      <Footer>
        <Amount {...props}>R$ 17.400,00</Amount>
        <LastTransaction {...props}>Última entrada dia 13 de abril</LastTransaction>
      </Footer>
    </Container>
  )
}

export default Cards
