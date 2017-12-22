import React,{ Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen   from './components/Home'
import GameScreen   from './components/Game'
import ScoreScreen  from './components/Score'
import gameState  from './gameState/GameState' // reducer
import { addLetter, removeLetter }  from './Actions' // reducer

import { createStore } from 'redux'
import { Provider, connect } from "react-redux";

let store = createStore(gameState)

//
// store.subscribe(() =>
//   console.log(store.getState())
// )

// const HomeScreen = ({ navigation }) => (
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>Home Screen</Text>
//     <Button
//       onPress={() => navigation.navigate('Game')}
//       title="Go to game"
//     />
//   </View>
// );

// const GameScreen = ({ navigation }) => (
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>Game Screen</Text>
//     <Button
//       onPress={() => navigation.navigate('Score')}
//       title="Go to score"
//     />
//   </View>
// );
//
// const ScoreScreen = ({ navigation }) => (
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>Score Screen</Text>
//     <Button
//       onPress={() => navigation.navigate('Home')}
//       title="Replay ?"
//     />
//   </View>
// );

class App extends Component {

  render(){

    //console.log(store.getState())
    //store.dispatch(addLetter('l'))

    return(
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    )
  }
}


const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
      //header: null
    },
  },
  Game: {
    screen: GameScreen,
    navigationOptions: {
      headerTitle: 'Game',
      //header: null
    },
  },
  Score: {
      screen: ScoreScreen,
      navigationOptions: {
        headerTitle: 'Score',
        //header: null
      },
    },
});

export default App;
