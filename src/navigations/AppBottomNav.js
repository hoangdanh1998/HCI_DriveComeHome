import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {
  HomeScreen,
  ProfileScreen,
  ChattingScreen,
  HistoryScreen,
} from '../screens/index';

//----------------------------------

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Notification') {
            iconName = focused
              ? 'ios-notifications-sharp'
              : 'ios-notifications-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'History') {
            iconName = focused ? 'timer' : 'timer-outline';
          }

          // You can return any component that you like here!
          return <Ionicon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#FFC700',
        inactiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{tabBarLabel: 'Trang chủ'}}
      />

      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{tabBarLabel: 'Lịch sử'}}
      />
      <Tab.Screen
        name="Notification"
        component={ChattingScreen}
        options={{tabBarLabel: 'Thông báo'}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{tabBarLabel: 'Hồ sơ'}}
      />
    </Tab.Navigator>
  );
}
