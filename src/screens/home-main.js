import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import useAuth from '../stores/auth';

function Home() {
  const onLogout = useAuth(state => state.postLogout);
  return (
    <View>
      <Text>Home dahboard</Text>
      <TouchableOpacity onPress={onLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
