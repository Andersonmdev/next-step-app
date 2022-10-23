// @ts-nocheck
import { NativeBaseProvider } from 'native-base';

import { HomeNavigation } from './src/navigation/HomeNavigation';
import { theme } from './src/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <HomeNavigation />
    </NativeBaseProvider>
  );
}