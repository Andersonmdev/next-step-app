import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { DotsThreeCircle } from 'phosphor-react-native';
import { Avatar, Box, Center, Heading, Progress, Spacer, Stack, Text, useColorMode, useTheme } from 'native-base';

export function ProjectCard() {
  const { colors } = useTheme();
  const { colorMode } = useColorMode();

  return (
    <Stack
      mr={2}
      mb={2}
      bgColor='light.100'
      borderRadius={24}
      w={Dimensions.get('screen').width - 50}
      _dark={{ bgColor: 'dark.50' }}
    >
      <LinearGradient
        style={{ height: '40%', paddingBottom: 12, borderTopRightRadius: 24, borderTopLeftRadius: 24 }}
        colors={[colors.lightBlue[300], colors.darkBlue[400], colors.darkBlue[700]]}
      >
        <Spacer />
        <Stack>
          <Stack direction='row' mx={4} justifyContent='space-between'>
            <Avatar size='sm'>MP</Avatar>
            <Avatar.Group max={3} _avatar={{ size: 'sm' }}>
              <Avatar />
              <Avatar />
              <Avatar />
              <Avatar />
              <Avatar />
            </Avatar.Group>
          </Stack>
        </Stack>
      </LinearGradient>
      <Center mx={6} mt={3}>
        <Stack space={2}>
          <Stack direction='row' justifyContent='space-between' space={8}>
            <Stack>
              <Heading fontSize='2xl'>My project</Heading>
              <Text fontSize='sm'>Development my project - Dec 20, 2022</Text>
            </Stack>
            <DotsThreeCircle color={colorMode === 'light' ? colors.black : colors.white} />
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Box minW={70}>
              <LinearGradient
                start={[0, 0]}
                end={[1, 0]}
                style={{ borderRadius: 14 }}
                colors={[colors.lightBlue[300], colors.darkBlue[400], colors.darkBlue[700]]}
              >
                <Text p={1} textAlign='center'>45/60</Text>
              </LinearGradient>
            </Box>
            <Text opacity={0.8}>5 Days left</Text>
          </Stack>
          <Progress mt={2} value={85} _filledTrack={{ bgColor: 'lightBlue.50' }} bgColor='gray.300' />
        </Stack>
      </Center>
    </Stack >
  );
}