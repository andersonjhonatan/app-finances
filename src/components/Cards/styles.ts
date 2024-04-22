import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { ThemeType } from 'styled-components'

export const Container = styled.View<{ $total?: boolean; theme: ThemeType }>`
  background-color: ${({ theme, $total }) =>
    $total ? theme.colors.secondary : theme.colors.shape};
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 19px 23px;
  margin-right: 16px;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.Text<{
  $total?: boolean
  theme: ThemeType
}>`
  color: ${({ theme, $total }) => ($total ? theme.colors.shape : theme.colors.text_dark)};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`

export const Icon = styled(Feather)<{
  $entrada?: boolean
  $saida?: boolean
  theme: ThemeType
  name: string
}>`
  color: ${({ theme, $entrada, $saida }) =>
    $entrada
      ? theme.colors.success
      : $saida
      ? theme.colors.attention
      : theme.colors.shape};
  font-size: ${RFValue(40)}px;
`

export const Footer = styled.View``

export const Amount = styled.Text<{
  $total?: boolean
  theme: ThemeType
}>`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme, $total }) => ($total ? theme.colors.shape : theme.colors.text_dark)};

  font-size: ${RFValue(32)}px;
  margin-top: 38px;
`

export const LastTransaction = styled.Text<{
  $total?: boolean
  theme: ThemeType
}>`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme, $total }) => ($total ? theme.colors.shape : theme.colors.text)};
  font-size: ${RFValue(12)}px;
`
