import * as React from 'react'
import { Text, View } from "react-native";

import { NavigationContainer } from '@react-navigation/native'
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack'
import {MaterialCommunityIcons} from 'react-native-vector-icons'


// tutorial 
import TutorialScreen from '../tutorial/Tutorial'

//index
import IndexScreen from '../index/Index'
import LoginScreen from '../index/Login'
import RegisterScreen from '../index/Register'


// user, login, register
import MyAccountScreen from '../screens/Account/MyAccount'

// restaurantes
import RestaurantsScreen from '../screens/Restaurants/Restaurants'
import RestaurantScreen from '../screens/Restaurants/Restaurant'



const Tab = createMaterialBottomTabNavigator()
const Stack = createStackNavigator()


function RestaurantsStack() {
  return (
      <Stack.Navigator  initialRouteName="Restaurantes">
          <Stack.Screen name="Restaurantes" component={RestaurantsScreen}/>
          <Stack.Screen name="Restaurante" component={RestaurantScreen} 
            // options={({ route }) => ({ title: route.params.restaurant.name })}
            options={({ route }) => ({ title: "route.params.restaurant.name" })}
            />
      </Stack.Navigator>
  )
}
function MyAccountStack() {
  return(
    <Tab.Navigator 
      initialRouteName="Mi cuenta"
      labelStyle={{ fontSize: 10 }}
      barStyle={{ backgroundColor: '#00a680' }}> 
          <Tab.Screen name="Restaurantes" component={RestaurantsStack}
            options={{
                tabBarIcon:({color}) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />  
                )
            }}/>
        <Tab.Screen name="Top 5" component={RestaurantsScreen} 
            options={{
              title: 'Top 5',
                tabBarIcon:({color}) => (
                <MaterialCommunityIcons name="star" color={color} size={26} />  
                )
            }}/>
        <Tab.Screen name="Mi cuenta" component = {MyAccountScreen}
            options={{
                tabBarIcon:({color}) => (
                  <MaterialCommunityIcons name="account" color={color} size={26} />  
                )
            }}
        />
    </Tab.Navigator>
  )
}
export default function Navigation() {
    return (
     <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Tutorial" 
          screenOptions={{ 
            title: 'Runsoco',
            headerStyle: { backgroundColor: '#00a680'}, 
            headerTintColor: '#fff', 
            headerTitleStyle: { fontWeight: 'bold'},
            headerTitleAlign: 'center'}}>  
          
            <Stack.Screen name="Tutorial" component={TutorialScreen}/>


            <Stack.Screen name="Index" component={IndexScreen} options={{headerLeft: false}}/>
          
            <Stack.Screen name="Iniciar Sesión" component={LoginScreen} options={{ title: 'Iniciar Sesión' }}/>

            <Stack.Screen name="Regístrate" component={RegisterScreen} options={{ title: 'Regístrate' }}/>

            <Stack.Screen name="Mi cuenta" component={MyAccountStack} options={{headerLeft: false}}/>
          
        </Stack.Navigator>
      </NavigationContainer>
  )
}