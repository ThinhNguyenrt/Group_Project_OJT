import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Platform } from 'react-native';
import HomeScreen from '../actions/home';
import DashThree from '../components/dashboard/DashThree';
import AiEdit from '../components/generate/AiEdit';

const Stack = createStackNavigator();

export default function App() {
  
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName={Platform.OS === "web" ? "Home" : "AiEdit"}>
            <Stack.Screen name="AiEdit" component={AiEdit} options={{ headerShown: false }}/>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Detail" component={DashThree} />
          </Stack.Navigator>
      </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }
});
