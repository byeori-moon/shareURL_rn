import React from 'react'
import { View, Text, Image, StyleSheet, Pressable, TouchableHighlight, TouchableOpacity } from 'react-native'

function firstScreen({ navigation }) {
  return (
    <View>
      <View style={Styles.container}>
        <Image source={require('./assets/rogo.png')} style={Styles.rogo} />
      </View>
      <View style={Styles.container}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('login')} style={Styles.button}>
            <Text style={Styles.buttonText}>회원 로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('login2')} style={Styles.button}>
            <Text style={Styles.buttonText}>비회원 로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('signin')} style={Styles.button} >
            <Text style={Styles.buttonText}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}




const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',    
  },
  rogo: {
    width: 305,
    height: 141.61,
    marginTop: 240,
    marginBottom: 43.7,
    position: 'static'
  },
  button: {
    
    width: 300,
    height: 50,
    backgroundColor: '#CD94B3',
    borderRadius: 15,
    marginTop: 16
  },
  buttonText: {
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 28,
    letterSpacing: 0.20000000298023224,
    display: 'flex',
    justifyContent: 'center'
  },
})

export default firstScreen;

