import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack"
import { Feather } from '@expo/vector-icons'

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Contato from './src/pages/Contato';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const icons = {
  Home: {
    name: 'home',



  },
  Sobre: {
    name: 'user',


  },
  Contato: {
    name: 'phone',


  }

};


function Tabs() {
  return (

    <Tab.Navigator
      //para não gerar duvida olha a documentação navigation do react Tab
      //la tem exemplo screenOptions e tabBarIcon
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size, color }) => {



          const { name } = icons[route.name];


          return <Feather name={name} color={color} size={size} />

        },
      })}
      tabBarOptions={{
        style: { backgroundColor: 'black' },
        activeTintColor: '#ffff',
      }}
    >

      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Sobre" component={Sobre} />

    </Tab.Navigator>


  );
}

export default function App() {
  return (

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen name="Home"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Contato" component={Contato} />

      </Stack.Navigator>

    </NavigationContainer>

  );

}