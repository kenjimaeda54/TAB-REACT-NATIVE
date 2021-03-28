import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather} from '@expo/vector-icons'

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Contato from './src/pages/Contato';


export default function App() {
  const Tab = createBottomTabNavigator();

  const icons = {
    Home: {
      name: 'home'
    },
    Sobre: {
      name: 'user'
    },
    Contato: {
      name: 'phone-call'
    }
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const { name } = icons[route.name];
            return <Feather name={name} color={color} size={size} />
          }
        })}
        tabBarOptions={{
          style: {
            backgroundColor: '#121212'
          },
          activeTintColor: '#FFF',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Sobre" component={Sobre} />
        <Tab.Screen name="Contato" component={Contato} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}