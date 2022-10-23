
import { Heading, ScrollView, Stack } from 'native-base';

import { Container } from '../components/common/Container';
import { OpacityButton } from '../components/common/OpacityButton';
import { MainHeader } from '../components/MainHeader';
import { ProjectCard } from '../components/ProjectCard';
import { SearchBar } from '../components/SearchBar';
import { TaskCard } from '../components/TaskCard';

export function Home() {
  return (
    <Container>
      <Stack flex={1} mx={4} space={1}>
        <Stack h='14%'>
          <MainHeader />
          <SearchBar />
        </Stack>
        <Stack h='35%'>
          <Stack direction='row' justifyContent='space-between' mb={2}>
            <Heading size='sm'>Recent Projects</Heading>
            <OpacityButton title='See All' color='lightBlue.50' bold />
          </Stack>
          <ScrollView horizontal>
            <ProjectCard />
            <ProjectCard />
          </ScrollView>
        </Stack>
        <Stack h='40%'>
          <Stack direction='row' justifyContent='space-between'>
            <Heading size='sm'>Today Tasks</Heading>
            <OpacityButton title='See All' color='lightBlue.50' bold />
          </Stack>
          <ScrollView mt={2}>
            <TaskCard title='Task 1' hour='Today - 12:00' />
            <TaskCard title='Task 2' hour='Today - 13:00' />
            <TaskCard title='Task 3' hour='Today - 14:00' />
            <TaskCard title='Task 4' hour='Today - 15:00' />
          </ScrollView>
        </Stack>
      </Stack>
    </Container >
  );
}