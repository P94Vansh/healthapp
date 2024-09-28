import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import RegistrationLoginPage from "./RegistrationLoginPage";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
const Home = ({navigation}):JSX.Element => {
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
        top:height*0.6,
        left:width*0.1,
      },
      TextInd:{
        fontSize:30,
        fontWeight:'300',
        color:'white'
      },
      buttonStyles:{
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
    const image=require('../assets/runninglady.png');
    
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={image} style={styles.ImageStyling}>
        <View style={styles.TextStyling}>
        <Text style={styles.TextInd}>Push limits, build</Text>
        <Text style={styles.TextInd}>strength, conquer</Text>
        <Text style={styles.TextInd}>YourSelf</Text>
        </View>
        <TouchableOpacity style={styles.buttonStyles} onPress={()=> navigation.navigate("RegistrationLoginPage")}>
          <Text style={styles.buttonText}>Welcome</Text>
        </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>
    )
  }
  
  export default Home