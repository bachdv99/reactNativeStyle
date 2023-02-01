import React, { useEffect, useState } from "react"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { navigationRef } from "./navigation-utilities"
import LoginScren from '../screen/Login'

export type RootParamList = {
    loginscreen:any
}

const Stack = createNativeStackNavigator<RootParamList>()

export default function RootNavigation() {
    <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
            <Stack.Screen
                name='loginscreen'
                component={LoginScren}
            />
            
        </Stack.Navigator>
    </NavigationContainer>

}