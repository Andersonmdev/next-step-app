import { Stack, Switch, Text, useColorMode } from 'native-base';
import { Eye } from 'phosphor-react-native';
import { LogBox } from 'react-native';

import { Container } from '../components/common/Container';
import { MainHeader } from '../components/MainHeader';

export function Settings() {
  const { toggleColorMode } = useColorMode();
  LogBox.ignoreLogs(['We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320']);

  return (
    <Container>
      <Stack flex={1} mx={4} space={1}>
        <Stack>
          <MainHeader />
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Stack direction='row' alignItems='center' space={2}>
            <Eye />
            <Text fontSize='lg'>DarkMode</Text>
          </Stack>
          <Switch onChange={toggleColorMode} onTrackColor="lightBlue.50" />
        </Stack>
      </Stack>
    </Container>
  );
}