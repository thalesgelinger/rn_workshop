import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Equipments from '../screens/Equipments';
import Home from '../screens/Home';
import Header from '../components/Header/Header';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Arena from '../screens/Arena';
import Settings from '../screens/Settings';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Arena" component={Arena} />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="MyTabs"
        component={MyTabs}
        options={{title: 'Home'}}
      />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="MyDrawer"
          component={MyDrawer}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="MyTabs"
          component={MyTabs}
        />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen
          // options={{headerShown: false}}
          options={{header: () => <Header title='Equipments' />}}
          name="Equipments"
          component={Equipments}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
