import React from 'react'
import FlashMessage from "react-native-flash-message";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { LoginScreen, RegisterScreen } from './screens/Auth'
import { RoomsScreen, ChatScreen } from './screens'

const Stack = createStackNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Rooms' component={RoomsScreen}
                    options={{
                        headerTintColor: '#FF6F00',
                        title: 'Odalar',
                        headerLeft: null,
                        headerTitleStyle: { alignSelf: 'center' },
                        headerStyle: { elevation: 0, borderBottomWidth: 1, borderBottomColor: '#ECEFF1' }
                    }} />
                <Stack.Screen name='Chat' component={ChatScreen}
                    options={({ route }) => ({ title: route.params.item.text, headerTintColor: '#FF6F00' })} />
            </Stack.Navigator>
            <FlashMessage position="top" />
        </NavigationContainer>
    )
}

export default Router
