import { ThemeType } from 'styled-components'
import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
  background-color: ${({ theme }: { theme: ThemeType }) => theme.colors.shape};
`

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({ theme }: { theme: ThemeType }) => theme.colors.primary};
  position: relative;
`

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  margin-top: ${RFPercentage(8)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const UserImagem = styled.Image`
  height: ${RFValue(55)}px;
  width: ${RFValue(55)}px;
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
  font-size: ${RFValue(30)}px;
  color: white;
`

export const ContainerCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 22,
  },
})`
  position: absolute;
  margin-top: ${RFPercentage(24)}px;
`
