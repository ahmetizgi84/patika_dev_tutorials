import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { JobsScreen, JobDetailScreen, FavouriteJobsScreen, AppliedJobsScreen } from './screens'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function JobRoot({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: '#EF5350',
                headerTitleStyle: { alignSelf: 'center' },
                headerStyle: { elevation: 0, }
            }}
        >
            <Stack.Screen name="Jobs" component={JobsScreen} options={{
                headerLeft: () => (
                    <Icon
                        onPress={() => navigation.openDrawer()}
                        name="menu"
                        color="#EF5350"
                        size={30}
                    />
                ),
            }} />
            <Stack.Screen name="Details" component={JobDetailScreen} options={({ route }) => ({ title: route.params.name })} />
        </Stack.Navigator>
    );
}

function Router() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={JobRoot} />
                <Drawer.Screen name="Favourite Jobs" component={FavouriteJobsScreen} options={{
                    headerShown: true
                }} />
                <Drawer.Screen name="Applied Jobs" component={AppliedJobsScreen} options={{
                    headerShown: true
                }} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Router



