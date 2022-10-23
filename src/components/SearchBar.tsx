import { Icon, Stack, useColorMode, useTheme } from 'native-base';
import { MagnifyingGlass, SlidersHorizontal } from 'phosphor-react-native';

import { Input } from './common/Input';
import { IconButton } from './common/IconButton';

interface ISearchBarProps {
  mx?: number
  my?: number
}

export function SearchBar({ mx, my }: ISearchBarProps) {
  const { colors, sizes } = useTheme();
  const { colorMode } = useColorMode();

  return (
    <Stack mx={mx} my={my}>
      <Input
        placeholder='Search'
        bgColor='light.100'
        borderRadius={8}
        _focus={{ borderColor: 'lightBlue.50' }}
        InputLeftElement={<MagnifyingGlass style={{ marginLeft: sizes[2] }} color={colorMode === 'light' ? colors.black : colors.white} />}
        InputRightElement={<IconButton icon={<Icon as={<SlidersHorizontal color={colors.lightBlue[50]} />} />} mr={2} />}
        _dark={{
          bgColor: 'dark.50'
        }}
      />
    </Stack>
  );
}