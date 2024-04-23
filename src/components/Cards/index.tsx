import React from 'react'
import { Container, Header, Title, Icon, Footer, Amount, LastTransaction } from './styles'

interface Props {
  title: string
  amout?: string
  lastTransaction?: string
  type: 'up' | 'down' | 'total'
}

type IconName = 'arrow-up-circle' | 'arrow-down-circle' | 'dollar-sign'

const icon: Record<Props['type'], IconName> = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign',
}

const Cards = ({ title, amout, lastTransaction, type }: Props) => {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>
      <Footer>
        <Amount type={type}>{amout}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  )
}

export default Cards
