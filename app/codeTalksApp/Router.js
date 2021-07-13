import React from 'react'
import FlashMessage from "react-native-flash-message";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import auth from '@react-native-firebase/auth';

import { LoginScreen, RegisterScreen } from './screens/Auth'
import { RoomsScreen, ChatScreen, CheckAuthScreen } from './screens'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Stack = createStackNavigator();

function Router() {
    const [userSession, setUserSession] = React.useState(false)

    React.useEffect(() => {
        auth().onAuthStateChanged(user => {
            setUserSession(!!user)
        })
    }, [])

    function signOutHandler() {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }


    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    !userSession ?
                        <>
                            <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
                            <Stack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }} />
                        </> :

                        <>
                            <Stack.Screen name='Rooms' component={RoomsScreen}
                                options={{
                                    headerTintColor: '#FF6F00',
                                    title: 'Odalar',
                                    headerLeft: null,
                                    headerTitleStyle: { alignSelf: 'center' },
                                    headerStyle: { elevation: 0, borderBottomWidth: 1, borderBottomColor: '#ECEFF1' }
                                }} />
                            <Stack.Screen name='Chat' component={ChatScreen}
                                options={
                                    ({ route }) => ({
                                        title: route.params.item.text,
                                        headerTintColor: '#FF6F00',
                                        headerRight: () => (<Icon size={24} name="logout" color="#FF6F00" onPress={signOutHandler} />)
                                    })} />
                        </>
                }
            </Stack.Navigator>
            <FlashMessage position="top" />
        </NavigationContainer>
    )
}

export default Router
