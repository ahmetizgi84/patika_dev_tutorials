import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { CategoryScreen, MealScreen, DetailScreen } from './screens'

const Stack = createStackNavigator()

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: true,
                }}
            >
                <Stack.Screen name="Categories" component={CategoryScreen}
                    options={{
                        headerTintColor: '#FFA500',
                    }} />
                <Stack.Screen name="Meals" component={MealScreen}
                    options={{
                        headerTintColor: '#FFA500',
                    }} />
                <Stack.Screen name="Detail" component={DetailScreen}
                    options={{
                        headerTintColor: '#FFA500',
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
