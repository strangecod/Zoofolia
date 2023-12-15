import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import MainScreen from '../Component/MainScreen';
import AnimalScreen from '../Component/AnimalScreen';
import Slide1 from '../Component/Slide1';
import Slide2 from '../Component/Slide2';
import Carnivores from '../Component/Carnivores';
import Herbivores from '../Component/Herbivores';
import AnimalCarnivoresDetails from '../Component/AnimalCarnivoresDetails';
import AnimalHerbivoresDetails from '../Component/AnimalHerbivoresDetails';
const Stack=createNativeStackNavigator();

const Navigation = () => {
  return (
<NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="Animal" component={AnimalScreen} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="Slide1" component={Slide1} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="Slide2" component={Slide2} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="Carnivores" component={Carnivores} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="AnimalSlide" component={AnimalCarnivoresDetails} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="AnimalSlide2" component={AnimalHerbivoresDetails} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="Herbivores" component={Herbivores} options={{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>
</NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})