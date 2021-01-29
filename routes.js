
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Pages/login/login'
import Register from './Pages/register/register'
import Remember from './Pages/forgot/remember'
import Accesscode from './Pages/forgot/accessCode'
import Newpassword from './Pages/forgot/newPassword'
import Success from './Pages/forgot/success'
import Dashboard from './Pages/Home/home'
import TabButton from './componnts/tabNavigation/tabNavigation'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown: false}} name="Register" component={Register} />
        <Stack.Screen options={{title: false, headerStyle: {
            backgroundColor: '#2F2E41',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            
          },
          }}   name="Remember" component={Remember} />
        <Stack.Screen options={{title: false, headerStyle: {
            backgroundColor: '#2F2E41',
            elevation: 0,
            shadowOpacity: 0,

          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          }}   name="Accesscode" component={Accesscode} />  

<Stack.Screen options={{title: false, headerStyle: {
            backgroundColor: '#2F2E41',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          }}   name="Newpassword" component={Newpassword} />  
<Stack.Screen options={{title: false, headerStyle: {
            backgroundColor: '#2F2E41',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          
          }}   name="Success" component={Success} />  
           <Stack.Screen options={{title: false, headerStyle: {
            backgroundColor: '#DFEDF2',
            elevation: 0,
            shadowOpacity: 0
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        
          }}   name="Dashboard" component={Dashboard} />  


<Stack.Screen options={{headerShown: false}} name="TabButton" component={TabButton} />


      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;