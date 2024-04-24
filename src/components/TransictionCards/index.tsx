import React from 'react'

import {
  Container,
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

interface Category {
  name: string
  icon: string
}

interface Data {
  title: string
  amount: string
  category: Category
  date: string
}

export interface DataProps {
  data: Data
}

export const TransictionCards = ({ data }: DataProps) => {
  return (
    <Container>
      <ContainerTransicition>
        <InfoTransction>
          <Title>{data.title}</Title>
          <Amount>{data.amount}</Amount>
        </InfoTransction>
        <CategoryInfo>
          <Category>
            <Icon name="dollar-sign" />
            <TypeCategory>{data.category.name}</TypeCategory>
          </Category>
          <DataTransiction>{data.date}</DataTransiction>
        </CategoryInfo>
      </ContainerTransicition>
    </Container>
  )
}
