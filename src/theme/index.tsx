import { extendTheme } from 'native-base';

export const theme = extendTheme({
  colors: {
    darkBlue: {
      50: '#246bfd',
      900: '#0C0D34'
    },
    lightBlue: {
      50: '#3979fe'
    },
    dark: {
      50: '#1f222a',
      100: '#17191f'
    },
    light: {
      50: '#fcfcfc',
      100: '#f5f5f5'
    },
    darkText: '#282828',
    lightText: '#ffffff'
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light'
  }
});