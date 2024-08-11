import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { PRIMARY_COLOR } from '../commons/constans';
import { WelcomeScreen } from '../screen/WelcomeScreen';
import { LoginScreen } from '../screen/LoginScreen';
import { RegisterScreen } from '../screen/RegisterScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
    <Stack.Navigator
    screenOptions={{
        cardStyle:{
            backgroundColor:PRIMARY_COLOR
        }
    }}>
        <Stack.Screen name="Welcome" options={{ headerShown: false }} component={WelcomeScreen} />    
        <Stack.Screen name="LoginScreen" options={{ headerShown: false }} component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" options={{ headerShown: false }} component={RegisterScreen} />
    </Stack.Navigator>
    );
}