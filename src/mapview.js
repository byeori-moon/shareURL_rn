import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, TextInput, Button, Pressable, TouchableOpacity, Alert } from 'react-native'
import WebView from 'react-native-webview';

const mapview = () => {
    return (
        <View>
            <WebView style={Styles.map} >

            </WebView>
        </View>
    )
}

const Styles=StyleSheet.create({
    map:{
        width:"500px",
        height:"400px"
    }
})

export default mapview;