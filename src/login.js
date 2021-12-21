import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, Button, Pressable,TouchableOpacity } from 'react-native'

const login=() => {
  return (
    <View style={Styles.container}>
      <View style={Styles.space} />
      <View style={Styles.idcontainer}>
        <Text style={Styles.idpw}>아이디</Text>
        <TextInput
          style={Styles.input}
        />
      </View>
      <View style={Styles.idcontainer}>
        <Text style={Styles.idpw}>비밀번호</Text>
        <TextInput
          style={Styles.input}
        />
      </View>
      <TouchableOpacity style={Styles.button}>
        <Text style={Styles.buttonText}>로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.kakaotalklogin}>
        <Text style={Styles.buttonText}>카카오톡으로 로그인</Text>
      </TouchableOpacity>
    </View>
  );
}


const Styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  header: {
    width: 375,
    height: 70,
    backgroundColor: '#F7F8F9'
  },
  headerText: {
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 28,
    letterSpacing: 0.20000000298023224,
    marginTop: 35
  },
  idpw: {
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 13
  },
  idcontainer: {
    width: 303,
    height: 79,
  },
  space: {
    marginTop: 164
  },
  input: {
    backgroundColor: '#F7F8F9',
    width: 303,
    height: 44,
    borderRadius: 15,


  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: '#CD94B3',
    borderRadius: 15,
    marginBottom: 16
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
  kakaotalklogin: {
    width: 300,
    height: 50,
    backgroundColor: '#FBE330',
    borderRadius: 15,
  }
})

export default login;