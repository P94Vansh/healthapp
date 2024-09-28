import { StyleSheet,Image,SafeAreaView, Text, View,Dimensions, TouchableOpacity,Alert } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get('window')
function isErrorWithCode(error) {
  return error && error.code;
}

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
GoogleSignin.configure({
  webClientId: '301684349472-ujp03vf0k82jal3klkr1trk47mr4cnoo.apps.googleusercontent.com',
});
async function onGoogleButtonPress() {
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    if (isErrorWithCode(error)) {
      switch (error.code) {
        case statusCodes.IN_PROGRESS:
          // operation (eg. sign in) already in progress
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          // Android only, play services not available or outdated
          break;
        default:
      }
    } else {
     
    }
  }

}


  

export default function Register() {
  
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.imageStyle} source={require('../assets/dumble.png')}/>
    <TouchableOpacity style={styles.buttonStyles1}>
    <Text style={styles.buttonText}>Continue</Text>
  </TouchableOpacity>
  <View  style={styles.ortext}>
  <Text style={styles.textforor}> OR </Text>
  </View>
  <TouchableOpacity style={styles.buttonStylesG} onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
  >
    <Image source={require('../assets/google.png')} style={styles.logo} />
    <Text style={styles.registerButton}>Continue with Google</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.buttonStylesI}>
  <Image source={require('../assets/instagram.png')} style={styles.logo}/>
    <Text style={styles.registerButton}>Continue with Instagram</Text>
  </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#0d062e',
    flex: 1,
  },
  imageStyle:{
      width: 0.4 * width,
      height: 0.4 * height,
      resizeMode: 'cover', // or 'contain', 'stretch', etc.
      position:'absolute',
      left:0.3 * width
    },
    buttonStyles1:{
      display:'flex',
      backgroundColor:'yellow',
      position:'absolute',
      bottom:0.5 * height,
      borderRadius:20,
      height:55,
      alignItems:'center',
      justifyContent:'center',
      width:0.8 * width,
      left:'10%',

    },
    buttonText:{
      fontSize:20,
      color:'black'
    },
    ortext:{
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      // justifyContent: 'center',
      top: 0.55 * height,
      alignItems: 'center',
    },
    textforor:{
      fontSize:30,
      color:'white',
      fontWeight:'700',
    },
    buttonStylesG:{
      display:'flex',
      flexDirection:'row',
      gap:8,
      backgroundColor:'#0d062e',
      position:'absolute',
      bottom:0.25 * height,
      borderRadius:20,
      borderColor:'white',
      borderWidth:1,
      height:55,
      alignItems:'center',
      justifyContent:'center',
      width:0.8 * width,
      left:'10%',
    },
    buttonStylesI:{
      display:'flex',
      flexDirection:'row',
      gap:8,
      backgroundColor:'#0d062e',
      position:'absolute',
      bottom:0.15 * height,
      borderRadius:20,
      borderColor:'white',
      borderWidth:1,
      height:55,
      alignItems:'center',
      justifyContent:'center',
      width:0.8 * width,
      left:'10%',
    },
    registerButton:{
      color:'white',
      fontSize:17,
    },
    logo:{
      width:30,
      height:30,
      resizeMode:'cover'
    }
})