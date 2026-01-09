import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from "../../screens/Auth/SignUp";
import SignIn from "../../screens/Auth/SignIn";
import ForgetPass from "../../screens/Auth/ForgetPass";
import BottomNavigator from "../BottomNavigator";

const Stack = createNativeStackNavigator(); 

const AppNavigation = () =>{
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="SignIn"
                screenOptions={{headerShown: false}}>
                <Stack.Screen name="SignIn" component={SignIn}/>
                <Stack.Screen name="SingUp" component={SignUp}/>
                <Stack.Screen name="ForgetPass" component={ForgetPass}/>
                <Stack.Screen name='BottomNavigator' component={BottomNavigator}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;