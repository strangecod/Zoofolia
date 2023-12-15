import { StyleSheet, Text, View ,Image, ScrollView, Button, Pressable,SafeAreaView} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { categories,colors } from '../Data/Constant';


const AnimalScreen = () => {
  const navigation=useNavigation();
  return (
    <View style={{flex:1,backgroundColor:"#011430"}}>
     
    
          <View style={{ backgroundColor:"orange", height: "23.5%",   padding:100,borderRadius:400,width: "20%",top: "0%",right: "80%",bottom: "76.5%",left: "59%",}}>
           </View>
           <Pressable style={{ position:"absolute",marginTop:40,marginLeft:20 }} onPress={() => navigation.goBack()}>
					<View style={{backgroundColor:"orange",height:30,width:70,borderRadius:10,alignItems:"center",paddingTop:5}}>
					<Text style={{color:"black",fontSize:15,fontWeight:"bold"}}>Go back</Text>
					</View>
				</Pressable>
           
      <Text style={{position:"absolute",paddingLeft:20,fontSize:70,marginTop:80,color:"white"}}>Types</Text>
           <View style={{position:"absolute",paddingRight:90,flexDirection:'row',alignContent:"center",justifyContent:"flex-end"}}>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}  style={{flexDirection:'column',marginLeft:30,marginTop:20}}>
              
            <View style={{backgroundColor:"white",height:570,width:300,borderRadius:20}}>
           
              <Image style={{borderRadius:90,height:300,width:300}} source={require('../Photos/Carnivores.jpg')}></Image>
              <Text style={{  fontSize: 30,fontWeight:"bold",textAlign:"center" }}>Carnivores Animals</Text>
              <Text style={{fontSize:15,fontStyle:"italic",paddingTop:1,paddingLeft:8,textAlign:"justify",letterSpacing:2,fontWeight:"500"}}>A carnivore is an organism that mostly eats meat, or the flesh of animals. Sometimes carnivores are called predators. Organisms that carnivores hunt are called prey. Carnivores are a major part of the food web, a description of which organisms eat which other organisms in the wild.</Text>
              <Pressable
              onPress={()=>{navigation.navigate("Carnivores")}}
              
style={{position:'absolute',backgroundColor:"#5275BA",borderRadius:30,padding:10, marginTop:510,marginLeft:100}}>
 

 <Text style={{color:"white",textAlign:"center",marginTop:"10",fontSize:20,fontWeight:"bold"}}>Let's Go</Text>

 </Pressable>
            </View>
             
            <View style={{backgroundColor:"white",height:570,width:300,borderRadius:20,marginTop:20,marginBottom:10}}>
           
           <Image style={{borderRadius:90,height:300,width:300}} source={require('../Photos/Deer.jpg')}></Image>
           <Text style={{  fontSize: 30,fontWeight:"bold",textAlign:"center" }}>Herbivores Animals</Text>
           <Text style={{fontSize:15,fontStyle:"italic",paddingTop:1,paddingLeft:8,textAlign:"justify",letterSpacing:2,fontWeight:"500"}}>A herbivore is an animal anatomically and physiologically adapted to eating plant material, for example foliage or marine algae, for the main component of its diet. As a result of their plant diet, herbivorous animals typically have mouthparts adapted to rasping or grinding.</Text>
<Pressable
  onPress={()=>{navigation.navigate("Herbivores")}}
style={{position:'absolute',backgroundColor:"#5275BA",borderRadius:30,padding:10, marginTop:510,marginLeft:100}}>
 

 <Text style={{color:"white",textAlign:"center",marginTop:"10",fontSize:20,fontWeight:"bold"}}>Let's Go</Text>

 </Pressable>
         </View>

       
           
       

            </ScrollView>
      
          
          
    </View>
    
  )
}

export default AnimalScreen

const styles = StyleSheet.create({})