import {
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Pressable,
	Dimensions,
	ScrollView,
 
} from "react-native";
import React from 'react'

const AnimalHerbivoresDetails = ({navigation,route}) => {
    const { item } = route.params;

	console.log(item);
  return (
    <View style={{ backgroundColor: "#011430", flex: 1 }}>


			<SafeAreaView style={{ flexDirection: "row", marginHorizontal: 16 }}>
				<Pressable style={{ flex: 1,marginTop:50 }} onPress={() => navigation.goBack()}>
					<View style={{backgroundColor:"orange",height:30,width:70,borderRadius:10,alignItems:"center",paddingTop:5}}>
					<Text style={{color:"black",fontSize:15,fontWeight:"bold"}}>Go back</Text>
					</View>
				</Pressable>

			</SafeAreaView>
			<View
				style={{
					backgroundColor: "#fff",
					flex: 1,
					marginTop: 180,
					borderTopLeftRadius: 56,
					borderTopRightRadius: 56,
					alignItems: "center",
					paddingHorizontal: 16,
				}}
			>
				<View
					style={{
						// backgroundColor: "red",
						height: 300,
						width: 300,
						position: "absolute",
						top: -150,
						// marginBottom: 130,
					}}
				>
					<Image
						source={item.image}
						style={{
							width: "100%",
							height: "100%",
							resizeMode: "contain",
						}}
					/>
				</View>

				{/* Recipe Name */}
				<Text style={{ marginTop: 150, fontSize: 28, fontWeight: "bold" }}>
					{item.name}
				</Text>

				<View style={{ flex: 1 }}>
					<ScrollView showsVerticalScrollIndicator={false}>
						{/* Recipe Description */}
						<Text style={{ fontSize: 20, marginVertical: 16 }}>
							{item.description}
						</Text>

					

						{/* Recipe Ingredients  */}

						<View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
							<Text
								style={{ fontSize: 22, fontWeight: "600", marginBottom: 6 }}
							>
								Features:
							</Text>

							{item.features.map((ingredient, index) => {
								return (
									<View
										style={{
											flexDirection: "row",
											alignItems: "center",
											marginVertical: 4,
										}}
										key={index}
									>
										<View
											style={{
												backgroundColor: "red",
												height: 10,
												width: 10,
												borderRadius: 5,
											}}
										></View>
										<Text style={{ fontSize: 18, marginLeft: 6 }}>
											{ingredient}
										</Text>
									</View>
								);
							})}
						</View>

						{/* Recipe Steps */}

						<View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
							<Text
								style={{ fontSize: 22, fontWeight: "600", marginBottom: 6 }}
							>
								Characteristics:
							</Text>

							{item.steps.map((step, index) => {
								return (
									<Text
										key={index}
										style={{ fontSize: 18, marginLeft: 6, marginVertical: 6 }}
									>{`${index + 1} ) ${step}`}</Text>
								);
							})}
						</View>
					</ScrollView>
				</View>
			</View>
		</View>
  )
}

export default AnimalHerbivoresDetails

const styles = StyleSheet.create({})