import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    SafeAreaView,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
  } from 'react-native'

const RegistrationLoginPage = ({navigation}) => {
    const { width, height } = Dimensions.get('window')
    const styles=StyleSheet.create({
      container:{
        width:width,
        height:height,
      },
      ImageStyling:{
        width:width,
        height:height
      },
      TextStyling:{
        position:'absolute',
        top:height*0.55,
        left:width*0.1,
      },
      TextInd:{
        fontSize:25,
        fontWeight:'400',
        color:'white'
      },
      buttonStyles1:{
        display:'flex',
        backgroundColor:'yellow',
        position:'absolute',
        bottom:0.15 * height,
        borderRadius:20,
        height:55,
        alignItems:'center',
        justifyContent:'center',
        width:0.8 * width,
        left:'10%',
  
      },
      buttonStyles2:{
        display:'flex',
        backgroundColor:'yellow',
        position:'absolute',
        bottom:0.05 * height,
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
    });
    const image=require('../assets/buildingman.png');
    
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={image} style={styles.ImageStyling}>
        <View style={styles.TextStyling}>
        <Text style={styles.TextInd}>Exercise regularly</Text>
        <Text style={styles.TextInd}>and be Physically</Text>
        <Text style={styles.TextInd}>active</Text>
        </View>
        <TouchableOpacity style={styles.buttonStyles1}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyles2} onPress={()=> navigation.navigate("Register")}>
          <Text style={styles.buttonText} >SignUp</Text>
        </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>
    )
}

export default RegistrationLoginPage