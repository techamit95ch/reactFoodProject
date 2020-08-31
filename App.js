// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
//  import { createStackNavigator, createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';
import SearchScreen from "./Src/screens/SearchScreen";
//import SearchBar from "./Src/component/SearchBar";

const navigator = createStackNavigator({
   Search : SearchScreen
},{
    initialRouteName : 'Search',
    defaultNavigationOptions:{
        title: 'Search'
    }
    }
    );
export default createAppContainer(navigator);
/**
 * 

Date : 25-June-2020 Working :

Follow this steps:

    Install React Navigation npm install react-navigation

    Install Dependencies expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

    Install React Navigation Stack npm install react-navigation-stack @react-native-community/masked-view

    Start the app and clear cache with npm start -c


 */