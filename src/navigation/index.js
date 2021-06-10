import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//stores hooks
import useAuth from '../stores/auth';
// screens
import Login from '../screens/auth-login';
// nav
import BottomNav from './bottom-tabs';

const {Navigator, Screen} = createStackNavigator();

function App() {
  const token = useAuth(state => state.token);
  return (
    <NavigationContainer>
      <Navigator>
        {token === '' ? (
          <>
            <Screen name="Login" component={Login} />
          </>
        ) : (
          <>
            <Screen name="dashboard" component={BottomNav} />
          </>
        )}
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
