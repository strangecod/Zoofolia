import { StyleSheet, Text, View,Image,Pressable} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const Slide1 = () => {
    const navigation=useNavigation();

  return (
    <View style={{flex:1,backgroundColor:"white"}}>
       <View style={{ backgroundColor:"pink", height: "23.5%",   padding:100,borderRadius:400,width: "20%",top: "0%",right: "80%",bottom: "76.5%",left: "59%",}}>
           </View>
 <Image source={require('../Photos/Slide1.jpg')}style={{position:'absolute',height:300,width:300,marginLeft:30,marginTop:199,borderRadius:0 }}></Image>
 <View style={{position:'absolute',paddingTop:460,alignItems:'center'}}>
    <Text style={{fontSize:30,fontWeight:'bold'}}>Learning about animals</Text>
    <Text style={{fontSize:20,fontStyle:'italic',marginLeft:20}}>
"Welcome to our Animal Learning App! Explore the fascinating world of creatures big and small. Discover fun facts, images, and sounds, and expand your knowledge with quizzes. Let's embark on an exciting educational journey together!"</Text>
    <Pressable
onPress={()=>{navigation.navigate('Slide2')}}
  style={{backgroundColor:"#5275BA",borderRadius:20,padding:16,paddingLeft:30, paddingRight:30,marginTop:10,marginLeft:10,marginRight:10}}>
    

    <Text style={{color:"white",textAlign:"center",marginTop:"20",fontSize:20,fontWeight:"bold"}}>Next</Text>

    </Pressable>
   
 </View>
    
    </View>
  )
}

export default Slide1

const styles = StyleSheet.create({})