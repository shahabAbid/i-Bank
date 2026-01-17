import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from "../../screens/Auth/SignUp";
import SignIn from "../../screens/Auth/SignIn";
import ForgetPass from "../../screens/Auth/ForgetPass";
import BottomNavigator from "../BottomNavigator";
import Branch from "../../screens/App/Search/Branch";
import Interestrate from "../../screens/App/Search/Interest rate";
import Exchange from "../../screens/App/Search/Exchange";
import Exchangerate from "../../screens/App/Search/Exchange rate";

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
                <Stack.Screen name="Branch" component={Branch}/>
                <Stack.Screen name="Interestrate" component={Interestrate}/>
                <Stack.Screen name="Exchange" component={Exchange}/>
                <Stack.Screen name="Exchangerate" component={Exchangerate} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;