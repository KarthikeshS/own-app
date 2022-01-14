import  React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Screens/HomeScreen';
import LinkScreen from './Screens/LinkScreen';

import ProblemScreen from './Screens/ProblemScreen'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
     <View style= {styles.textContainer}>
        <Text style={styles.text}>App Definer</Text>
      </View>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Problems" component={ProblemScreen} />
        
        <Stack.Screen name="Links" component={LinkScreen}/>
      </Stack.Navigator>
      
    </NavigationContainer>
    
  );
}
const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'pink',
  },
  text:{
    color: 'white',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default App;