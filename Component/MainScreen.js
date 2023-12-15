import { StyleSheet, Text, View,Image,Pressable, SafeAreaView, Button} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const MainScreen = () => {
  
    const navigation=useNavigation();
  return (
   <SafeAreaView style={{backgroundColor:'#011430',flex:1}}>
    <View >
    <View style={{ backgroundColor:"orange", height: "23.5%",   padding:100,borderRadius:400,width: "20%",top: "0%",right: "80%",bottom: "76.5%",left: "59%",}}>
           </View>
 <Image source={require('../Photos/Logo.png')}style={{height:180,width:180,marginLeft:100,marginTop:100,borderRadius:150 }}></Image>
    </View>
    <View style={{marginTop:7}}>
      <Text style={{fontSize:60,flexDirection:'column',textAlign:"center",fontStyle:'italic',justifyContent:"space-between",color:'#fff'}}>ZooFolia</Text>
    </View>
<Pressable
onPress={()=>{navigation.navigate('Slide1')}}
  style={{backgroundColor:"#5275BA",borderRadius:30,padding:16, marginTop:100,marginLeft:10,marginRight:10}}>
    

    <Text style={{color:"white",textAlign:"center",marginTop:"20",fontSize:20,fontWeight:"bold"}}>Get Started</Text>

    </Pressable>
   
   </SafeAreaView>
  )
}

export default MainScreen

const styles = StyleSheet.create({})