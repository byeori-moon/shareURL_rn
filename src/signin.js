import React, { useState, Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  Alert,
} from 'react-native';


const signin = () => {
  const [id,setId]=useState('');
  const [pw,setPw]=useState('');
  const [name,setName]=useState('');
  let userData = [];
  let newuserData = [];
  const savePerson = () => {
    newuserData = [...userData, {id:id,pw:pw,name:name}];
    userData = newuserData;
    console.log(userData);
  };
  const Styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    header: {
      width: 375,
      height: 70,
      backgroundColor: '#F7F8F9',
    },
    headerText: {
      textAlign: 'center',
      fontSize: 20,
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: 28,
      letterSpacing: 0.20000000298023224,
      marginTop: 35,
    },
    idpw: {
      fontStyle: 'normal',
      fontWeight: '900',
      fontSize: 13,
    },
    idcontainer: {
      width: 303,
      height: 79,
    },
    space: {
      marginTop: 164,
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
      marginBottom: 16,
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
      justifyContent: 'center',
    },
    kakaotalklogin: {
      width: 300,
      height: 50,
      backgroundColor: '#FBE330',
      borderRadius: 15,
    },
  });
  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.headerText}>회원가입</Text>
      </View>
      <View style={Styles.space} />
      <View style={Styles.idcontainer}>
        <Text style={Styles.idpw}>아이디를 입력해주세요.</Text>
        <TextInput
          style={Styles.input}
          onChangeText={(text) => setId(text)}
          value={id}
          placeholder="id를 입력해주세요."
        />
      </View>
      <View style={Styles.idcontainer}>
        <Text style={Styles.idpw}>비밀번호를 입력해주세요.</Text>
        <TextInput
          style={Styles.input}
          secureTextEntry={true}
          onChangeText={(text) => setPw(text)}
          value={pw}
          placeholder="password를 입력해주세요."
        />
      </View>
      <View style={Styles.idcontainer}>
        <Text style={Styles.idpw}>닉네임</Text>
        <TextInput
          style={Styles.input}
          onChangeText={(text) => setName(text)}
          value={name}
          placeholder="닉네임을 입력해주세요."
        />
      </View>
      <Pressable style={Styles.button} onPress={savePerson}>
        <Text style={Styles.buttonText}>회원가입</Text>
      </Pressable>
    </View>
  );

}

export default signin;
