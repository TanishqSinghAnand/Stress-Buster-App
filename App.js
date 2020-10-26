import { StatusBar } from 'expo-status-bar';
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
      <Text>Stress Buster App</Text>
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
  Focus: Focus,
  Games: Games,
  Music:Music
 }
// {
//   defaultNavigationOptions: ({navigation})=>({
//     tabBarIcon: ()=>{
//       const routeName = navigation.state.routeName;
//       console.log(routeName)
//       if(routeName === "WriteStory"){
//         return(
//         //   <Image
//         //   source={require("./assets/write.png")}
//         //   style={{width:30, height:30}}
//         // />
//         )
        
//       }
//       else if(routeName === "ReadStory"){
//         return(
//           <Image
//           source={require("./assets/read.png")}
//           style={{width:30, height:30}}
//         />)
        
//       }
//     }
//   })
// }
  )

  const AppContainer = createAppContainer(TabNavigator);