import React,{ Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from "react-redux";
import gameState  from '../gameState/GameState' // reducer
import { addLetter, removeLetter, reset }  from '../Actions' // reducer

import Title  from './Title.js'
import Rules  from './Rules'


class HomeScreen extends Component {

  static navigationOptions = {
    headerTitle: 'Home',
    header: null
  };


  render(){
    const { navigate } = this.props.navigation

    console.log(this.props)

    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Title titleText="LoNgEsT WoRd GaMe"/>

        <Rules titleText="Type the longest word possible, with the proposed letters. Erase a letter using the go back button. Then click next to validate the word and check your score !"/>


        <Button
          onPress={() => navigate('Game')}
          title="Go to game"
        />
      </View>
    );
  }

};


const mapDispatchToProps = dispatch => {
  return {
    addLetter: (l) =>  {dispatch(addLetter(l))},
    removeLetter: () => { dispatch(removeLetter()) },
    reset: () => { dispatch(reset()) }
    }
};

const mapStateToProps = store => {
    return { context : {
      word: store.word,
      score: store.score
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
