/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import CategoryGridTile from './Components/CategoryGridTile';

import CategoriesScreen from './Screen/CategoriesScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import MealsOverviewScreen from './Screen/MealsOverviewScreen';
import JustifyContentBasics from './Components/JustifyContentBasics';
import MealDetailScreen from './Screen/MealDetailScreen';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Favorite from './Screen/Favorite';
import FavoritesContextProvider from './Store/context/favorites-context';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#3f2f25" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#351401" },
        drawerContentStyle: {backgroundColor: "#3f2f25"},
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: "#e4baa1"
      }}
    >
      <Drawer.Screen name='Categories' component={CategoriesScreen} />
      <Drawer.Screen name='Favorites' component={Favorite} />
    </Drawer.Navigator>
  )
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <>
      <NavigationContainer>
        <FavoritesContextProvider>
        <Stack.Navigator screenOptions={{
          headerStyle:{backgroundColor: "#3f2f25"},
          headerTitleStyle: {color: "white"},
          headerTintColor: "white"
        }}>
          <Stack.Screen
            name='Drawer'
            component={DrawerNavigator}
            options={{
              //title:"All Content",
              headerShown: false

            }}></Stack.Screen>
          <Stack.Screen
            name='ComponentOverview'
            component={MealsOverviewScreen} ></Stack.Screen>
          <Stack.Screen
            name='MealDetail'
            component={MealDetailScreen}
          ></Stack.Screen>
        </Stack.Navigator>
        </FavoritesContextProvider>
      </NavigationContainer>
      {/* <JustifyContentBasics></JustifyContentBasics> */}
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
