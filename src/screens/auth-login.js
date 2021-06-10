import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
// hooks store
import useAuth from '../stores/auth';

const styles = StyleSheet.create({
  container: {flex: 1, margin: 20},
  containerInput: {marginVertical: 10},
  input: {borderWidth: 1, paddingHorizontal: 10},
  radius: {borderRadius: 5},
  button: {
    borderWidth: 1,
    backgroundColor: '#fefefe',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});

function App() {
  const {loading, postLogin, token} = useAuth(state => state);
  const [state, setState] = useState({
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  });

  const onEventLogin = useCallback(() => {
    postLogin(state);
  }, [state.email, state.password]);
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <Text>Email {token}</Text>
        <TextInput
          placeholder="Input Email"
          onChangeText={email => setState(prev => ({...prev, email}))}
          style={[styles.input, styles.radius]}
          keyboardType="email-address"
          value={state.email}
        />
      </View>
      <View style={styles.containerInput}>
        <Text>Password</Text>
        <TextInput
          placeholder="Input Password"
          onChangeText={password => setState(prev => ({...prev, password}))}
          style={[styles.input, styles.radius]}
          secureTextEntry
          value={state.password}
        />
      </View>
      <TouchableOpacity
        style={[styles.button, styles.radius]}
        onPress={onEventLogin}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
      {loading && (
        <View>
          <ActivityIndicator size="large" color="green" />
        </View>
      )}
    </View>
  );
}

export default App;
