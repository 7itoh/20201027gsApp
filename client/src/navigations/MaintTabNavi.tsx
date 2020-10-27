import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/FontAwesome';

import HomeStackNavi from '../navigations/HomeStackNavi';
import UserListScreen from '../screens/userListScreen';

const Tab = createBottomTabNavigator();

const screenOption = ({route}) => ({
  tabBarIcon: ({color, size}) => {
    let iconName;
    if (route.name === 'Home') {
      iconName = 'home';
    } else if (route.name === 'List') {
      iconName = 'user';
    }
    return <Icons name={iconName} size={size} color={color} />;
  },
});

const MainTav: React.FC = () => {
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#32995f',
          inactiveTintColor: '#a3d6cc',
          style: {
            backgroundColor: '#00533f',
          },
        }}
        screenOptions={screenOption}>
        <Tab.Screen name="Home" component={HomeStackNavi} />
        <Tab.Screen name="List" component={UserListScreen} />
      </Tab.Navigator>
    </>
  );
};

export default MainTav;
