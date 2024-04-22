import React from 'react'
import { Text } from './styles'

interface Props {
  name: string
}
export const Welcome = ({ name }: Props) => {
  return <Text>Bem vindo - {name}</Text>
}
