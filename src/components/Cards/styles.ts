import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View<{ $total?: boolean }>`
  background-color: ${(props) => props.$total && props.theme.colors.secondary};
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 19px 23px;
  border: 1px solid #000;
`

export const Header = styled.View``

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`

export const Icon = styled(Feather)``

export const Footer = styled.View``

export const Amount = styled.Text``

export const LastTransaction = styled.Text``
