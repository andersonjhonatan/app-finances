import React, { useCallback } from 'react'

import { ThemeProvider } from 'styled-components'
import theme from './src/global/styles/theme'

import { Dashboard } from './src/screens/Dashboard'

import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import { View } from 'react-native'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null
  }
  return (
    <View onLayout={onLayoutRootView}>
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    </View>
  )
}
