import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs' 
import Focus from './screens/Focus';
import Games from './screens/Games';
import Music from './screens/Music';


export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

const TabNavigator = createBottomTabNavigator({
  Focus: {screen:Focus},
  Games: {screen:Games},
  Music:{screen:Music}
 })
 

  const AppContainer = createAppContainer(TabNavigator);
