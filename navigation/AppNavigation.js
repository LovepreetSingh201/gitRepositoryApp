import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from '../src/screens/Homescreen';
import SearchScreen from '../src/screens/SearchScreen';
import RepositoryScreen from '../src/screens/RepositoryScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Homescreen} options={{headerShown:false}} />
                <Stack.Screen name="Search" component={SearchScreen} options={{headerShown:false}} />
                <Stack.Screen name="repository" component={RepositoryScreen} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation