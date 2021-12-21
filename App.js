import React, { Component } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firstScreen from './src/firstScreen';
import login from './src/login';
import signin, { userData } from './src/signin';
import login2 from './src/login2';
const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="firstScreen">
          <Stack.Screen name="firstScreen" component={firstScreen} options={{ title: '메인화면' }} />
          <Stack.Screen name="login" component={login} options={{ title: '회원 로그인' }} />
          <Stack.Screen name="login2" component={login2} options={{ title: '비회원 로그인' }} />
          <Stack.Screen name="signin" component={signin} options={{ title: '회원가입' }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default App;
