import { ThemeType } from 'styled-components'
import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
  background-color: ${({ theme }: { theme: ThemeType }) => theme.colors.background};
`

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({ theme }: { theme: ThemeType }) => theme.colors.primary};
`

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  margin-top: ${RFPercentage(6)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const UserImagem = styled.Image`
  height: ${RFValue(48)}px;
  width: ${RFValue(48)}px;
  border-radius: 10px;
`

export const UserInfo = styled.View`
  flex-direction: row;
  gap: ${RFValue(12)}px;
`

export const User = styled.View`
  flex-direction: column;
`

export const UserGreeting = styled.Text`
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }: { theme: ThemeType }) => theme.fonts.regular};
`

export const UserName = styled.Text`
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }: { theme: ThemeType }) => theme.fonts.bold};
`

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: white;
`

export const ContainerCards = styled.View`
  flex-direction: column;
  gap: ${RFValue(10)}px;
`
