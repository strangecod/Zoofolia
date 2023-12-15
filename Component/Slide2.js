import { StyleSheet, Text, View,Image,Pressable} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const Slide2 = () => {
    const navigation=useNavigation();

  return (
    <View style={{flex:1,backgroundColor:"white"}}>
       <View style={{ backgroundColor:"pink", height: "23.5%",   padding:100,borderRadius:400,width: "20%",top: "0%",right: "80%",bottom: "76.5%",left: "59%",}}>
           </View>
 <Image source={require('../Photos/Slide2.png')}style={{position:'absolute',height:300,width:300,marginLeft:30,marginTop:170,borderRadius:0 }}></Image>
 <View style={{position:'absolute',paddingTop:460,alignItems:'center'}}>
    <Text style={{fontSize:25,fontWeight:'bold',paddingRight:20}}>Simplified Animal Education</Text>
    <Text style={{fontSize:20,fontStyle:'italic',marginLeft:15}}>Experience effortless learning with Simplified Animal Education. Our user-friendly platform offers comprehensive insights into the animal kingdom. Engage with interactive lessons, captivating visuals, and engaging quizzes. Start your educational adventure today!</Text>
    <Pressable
onPress={()=>{navigation.navigate('Animal')}}
  style={{backgroundColor:"#5275BA",borderRadius:20,padding:16, paddingLeft:30, paddingRight:30,marginTop:10,marginLeft:10,marginRight:10}}>
    

    <Text style={{color:"white",textAlign:"center",marginTop:"20",fontSize:20,fontWeight:"bold"}}>Next</Text>

    </Pressable>
   
 </View>
    
    </View>
  )
}

export default Slide2

const styles = StyleSheet.create({})