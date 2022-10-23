import { Center, Switch, useColorMode } from 'native-base';
import { LogBox } from 'react-native';

import { Container } from '../components/common/Container';

export function Settings() {
  const { toggleColorMode } = useColorMode();
  LogBox.ignoreLogs(['We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320']);

  return (
    <Container>
      <Center>
        <Switch onChange={toggleColorMode} />
      </Center>
    </Container>
  );
}