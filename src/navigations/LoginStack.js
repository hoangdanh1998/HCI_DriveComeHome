import React from 'react';
import {
  LoginScreen,
  SignUpScreen,
  ForgotPasswordScreen,
} from '../screens/index';
import {createStackNavigator} from '@react-navigation/stack';

//----------------------------------

const Stack = createStackNavigator();
const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Forgot"
        component={ForgotPasswordScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default LoginStack;
