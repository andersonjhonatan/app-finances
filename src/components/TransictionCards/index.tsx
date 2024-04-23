import React from 'react'

import {
  Container,
  Listagem,
  ContainerTransicition,
  InfoTransction,
  Title,
  Amount,
  CategoryInfo,
  Category,
  Icon,
  TypeCategory,
  DataTransiction,
} from './styles'

type Props = {}

const TransictionCards = (props: Props) => {
  return (
    <Container>
      <ContainerTransicition>
        <InfoTransction>
          <Title>Desenvolvimento de site</Title>
          <Amount>R$ 12.000,00</Amount>
        </InfoTransction>
        <CategoryInfo>
          <Category>
            <Icon name="dollar-sign" />
            <TypeCategory>Vendas</TypeCategory>
          </Category>
          <DataTransiction>13/04/2021</DataTransiction>
        </CategoryInfo>
      </ContainerTransicition>
    </Container>
  )
}

export default TransictionCards
