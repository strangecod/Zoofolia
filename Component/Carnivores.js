import { StyleSheet, Text, TextInput, View,FlatList,Pressable,Image,ScrollView } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { AnimalsList, categories,colors } from '../Data/Constant';
import { useNavigation } from "@react-navigation/native";

const Carnivores = () => {
  const navigation = useNavigation();

  return (
   <View style={{flex:1,backgroundColor:"#011430"}}>
    <View style={{ backgroundColor:"orange", height: "23.5%",   padding:100,borderRadius:400,width: "20%",top: "80%",left: "70%",}}>
           </View>
           <Pressable style={{ position:"absolute",marginTop:30,marginLeft:10 }} onPress={() => navigation.goBack()}>
					<View style={{backgroundColor:"orange",height:30,width:70,borderRadius:10,alignItems:"center",paddingTop:5}}>
					<Text style={{color:"black",fontSize:15,fontWeight:"bold"}}>Go back</Text>
					</View>
				</Pressable>
           
           
    <View style={{position:"absolute",marginTop:55,paddingLeft:5}}>
      <Text style={{fontSize:40,color:"white",paddingTop:10}}>Carnivores Animals</Text>
      <View style={{marginTop:20}}>
</View>

    </View>
    <ScrollView style={{position:"absolute",marginTop:100}}horizontal showsHorizontalScrollIndicator={false}>
        {
        categories.map((category,index)=>{
            return(
                <View style={{marginTop:20,backgroundColor:index==0?colors.COLOR_PRIMARY:colors.COLOR_LIGHT,marginRight:36,borderRadius:8,paddingHorizontal:16,paddingVertical:18}}>
                    <Text style={{color:index==0&&colors.COLOR_LIGHT,fontSize:18}}>
                        {category.category}
                    </Text>
                </View>
            )
        })
        }
    </ScrollView>
    <View>
			<FlatList
				data={AnimalsList}
				renderItem={({ item }) => (
					<Pressable
		onPress={()=>navigation.navigate("AnimalSlide",{item:item})}
						style={{
                            backgroundColor: "white",
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 0 },
                            shadowOpacity: 0.1,
                            shadowRadius: 7,
                            borderRadius: 16,
                            marginVertical: 6,
                            marginHorizontal:6,
                            alignItems: "center",
                            paddingHorizontal: 2,
                            paddingVertical: 26,
                            marginRight:10
						}}
					>
						<Image
							source={item.image}
							style={{ width: 160, height: 160, resizeMode: "center" }}
						/>
						<Text style={{color:"red",fontSize:25}}>{item.name}</Text>
						<View style={{ flexDirection: "row", marginTop: 0 }}>
							<Text>{item.type}</Text>
						</View>
					</Pressable>
				)}
				numColumns={2}
				columnWrapperStyle={{
					justifyContent: "space-between",
				}}
				showsVerticalScrollIndicator={false}
			/>
		</View>

   </View>
  )
}

export default Carnivores

const styles = StyleSheet.create({})