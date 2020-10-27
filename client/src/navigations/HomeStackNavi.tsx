import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import WaveTest from '../screens/WaveTestScreen';
import UserList from '../screens/userListScreen';
import ListDetail from '../screens/ListDetailScreen';
import GraphDetail from '../screens/GraphScreen';

// import LoginScreen from '../screens/LoginScreen';
// import RegisterScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const HomeStackNavi: React.FC = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WaveTest"
          component={WaveTest}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="User"
          component={UserList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ListDetail"
          component={ListDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GraphDetail"
          component={GraphDetail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default HomeStackNavi;
