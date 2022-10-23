import { Checkbox, Heading, Stack, Text } from 'native-base';

interface ITaskCardProps {
  title: string
  hour: string
  done?: boolean
}

export function TaskCard({ title, hour, done }: ITaskCardProps) {
  return (
    <Stack
      h={20}
      w='full'
      mb={2}
      bgColor='light.100'
      borderRadius={24}
      justifyContent='center'
      _dark={{ bgColor: 'dark.50' }}
    >
      <Stack direction='row' alignItems='center' justifyContent='space-between' px={4}>
        <Stack space={1}>
          <Heading size='md'>{title}</Heading>
          <Text>{hour}</Text>
        </Stack>
        <Checkbox value='done' accessibilityLabel='done' borderColor='lightBlue.50' />
      </Stack>
    </Stack>
  );
}