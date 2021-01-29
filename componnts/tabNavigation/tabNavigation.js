
import React from "react";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../Pages/Home/home'

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();


export default function TabButton() {
  return (





      <Tab.Navigator
      tabBarOptions
        screenOptions={({ route }) => ({
            
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'people-outline'
                : 'people-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'bar-chart-outline' : 'bar-chart-outline';
            }
            else if (route.name === 'Conf') {
                iconName = focused ? 'flash-outline' : 'flash-outline';
              }
              else if (route.name === 'Conta') {
                iconName = focused ? 'person-outline' : 'person-outline';
              }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          style: { //Adição do style
            backgroundColor: '#2F2E41', 
        },
          
          activeTintColor: '#4880E6',
          inactiveTintColor: '#fff',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Conf" component={SettingsScreen} />
        <Tab.Screen name="Conta" component={SettingsScreen} />


      </Tab.Navigator>
      
  );
}




