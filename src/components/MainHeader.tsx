import { Icon, Stack, useTheme } from 'native-base';
import { Bell } from 'phosphor-react-native';

import { IconButton } from './common/IconButton';
import { MainIcon } from './common/MainIcon';

export function MainHeader() {
  const { colors } = useTheme();

  return (
    <Stack direction='row' h={12} alignItems='center' justifyContent='space-between'>
      <Stack direction='row' ml={2}>
        <MainIcon />
      </Stack>
      <IconButton icon={<Icon as={<Bell color={colors.lightBlue[50]} />} />} />
    </Stack>
  );
}