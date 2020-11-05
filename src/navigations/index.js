import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';

import AppBottomNavigator from './AppBottomNav';
import LoginStack from './LoginStack';
import {
  EmergencyScreen,
  HelpBookingScreen,
  ComingScreen,
  ConfirmOTPScreen,
  SignUpScreen,
  OnMyWayScreen,
  FillInformationScreen,
  HelpFillInformationScreen,
  HisHelpScreen,
  HisKhanCapScreen,
  HisCancelScreen,
  MapChosenScreen,
} from '../screens/index';

const Stack = createStackNavigator();

function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        //  screenOptions={{
        //   headerShown: false
        //   }}
      >
        <Stack.Screen
          component={LoginStack}
          name="Login"
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={AppBottomNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Emergency"
          component={EmergencyScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HelpBooking"
          component={HelpBookingScreen}
          options={{
            headerTitle: 'Đặt hộ',
            headerStyle: {backgroundColor: '#FFC700'},
            // headerBackTitleStyle: {color: 'black'},
            headerTintColor: 'black',
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="MapChosen"
          component={MapChosenScreen}
          options={{
            headerTitle: 'Chọn địa chỉ',
            headerStyle: {backgroundColor: '#FFC700'},
            headerBackTitleStyle: {color: 'black'},
            headerTintColor: 'black',
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="Confirm"
          component={ConfirmOTPScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnMyWay"
          component={OnMyWayScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Coming"
          component={ComingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FillInformation"
          component={FillInformationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HelpFillInformation"
          component={HelpFillInformationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HisHelp"
          component={HisHelpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HisCancel"
          component={HisCancelScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HisKhanCap"
          component={HisKhanCapScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainNavigation;
