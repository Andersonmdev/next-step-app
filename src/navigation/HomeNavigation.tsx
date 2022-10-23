import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Gear, House, PlusCircle } from 'phosphor-react-native';
import { useColorMode, useTheme } from 'native-base';
import { StatusBar } from 'expo-status-bar';

import { Home } from '../screens/Home';
import { Settings } from '../screens/Settings';
import { Project } from '../screens/Project';

const Tab = createBottomTabNavigator();

export function HomeNavigation() {
  const { colors, sizes } = useTheme();
  const { colorMode } = useColorMode();

  const getIconColor = (focused: boolean) => {
    if (focused) {
      return colors.lightText;
    } else {
      return colorMode === 'light' ? colors.darkText : colors.lightText;
    }
  };

  return (
    <NavigationContainer>
      <StatusBar style={colorMode === 'light' ? 'dark' : 'light'} />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: colors.lightBlue[50],
          tabBarActiveTintColor: colors.lightText,
          tabBarInactiveBackgroundColor: colorMode === 'light' ? colors.light[100] : colors.dark[50],
          tabBarInactiveTintColor: colorMode === 'light' ? colors.darkText : colors.lightText,
          tabBarLabelStyle: { fontSize: sizes[3] },
          tabBarStyle: {
            left: 15,
            right: 15,
            bottom: 15,
            elevation: 0,
            borderRadius: 25,
            borderTopColor: 'transparent',
            overflow: 'hidden',
            position: 'absolute',
            backgroundColor: colorMode === 'light' ? colors.light[100] : colors.dark[50]
          }
        }}
      >
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({ focused }) => (
            <House size={sizes[7]} color={getIconColor(focused)} />
          )
        }} />
        <Tab.Screen name="Project" component={Project} options={{
          tabBarLabel: 'New Project',
          tabBarIcon: ({ focused }) => (
            <PlusCircle size={sizes[7]} color={getIconColor(focused)} />
          )
        }} />
        <Tab.Screen name="Settings" component={Settings} options={{
          tabBarIcon: ({ focused }) => (
            <Gear size={sizes[7]} color={getIconColor(focused)} />
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}