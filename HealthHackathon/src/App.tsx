import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Screens/Home';
import RegistrationLoginPage from './Screens/RegistrationLoginPage';
import Register from './Screens/Register';

export type RootStackParamList = {
  Home: undefined;
  RegistrationLoginPage: undefined;
  Register: undefined;
};
const Stack=createNativeStackNavigator<RootStackParamList>()
const  App=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Stack.Screen name='RegistrationLoginPage' component={RegistrationLoginPage} options={{ headerShown: false }}/>
      <Stack.Screen name='Register' component={Register} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App
