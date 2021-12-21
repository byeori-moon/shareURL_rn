import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, TextInput, Button, Pressable, TouchableOpacity, Alert, Linking } from 'react-native'

const login2 = ({ navigation }) => {
  const [name, setName] = useState('');
  const onClick = () => {
    let nickname = name;
    navigation.navigate('mapview');
  };

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

  })

  return (
    <View style={Styles.container}>
      <View style={Styles.space} />
      <View style={Styles.idcontainer}>
      </View>
      <View style={Styles.idcontainer}>
        <Text style={Styles.idpw}>닉네임</Text>
        <TextInput
          style={Styles.input}
          onChangeText={
            (text) => {
              setName(text);
            }
          }
          value={name}
          placeholder='닉네임을 입력해주세요.'
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('map.html')} style={Styles.button}>
        <Text style={Styles.buttonText}>설정 완료</Text>
      </TouchableOpacity>
      <Linking
        onPress={() => Linking.openURL("https://velog.io/")}>
        벨로그가기
      </Linking>
    </View>
  )
}



export default login2;