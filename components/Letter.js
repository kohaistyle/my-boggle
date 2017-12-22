import React,{ Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, Image } from 'react-native';
import { connect } from "react-redux";
import gameState  from '../gameState/GameState' // reducer
import { addLetter, removeLetter }  from '../Actions' // reducer

class Letter extends Component {

  constructor(props) {
    super(props);

    let alphabet = "AAZEEERTYUUUIIIOOOPQSDFGHJKLMWXCVBN"

    this.state = {
      localLetter : alphabet[Math.floor(Math.random() * alphabet.length)]
    }
  }

  render(){

    return(
      <TouchableHighlight onPress={ () => { this.props.addLetter(this.state.localLetter); /*console.log(this.state.localLetter)*/ } } underlayColor="red">
        <Text  style={styles.title}>{this.state.localLetter}</Text>
      </TouchableHighlight>
    );
  }

};


const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    //margin: '1%'
  }

});

const mapDispatchToProps = dispatch => {
  return {
    addLetter: (l) =>  {dispatch(addLetter(l))},
    removeLetter: () => { dispatch(removeLetter()) }
    }
};

const mapStateToProps = store => {

    return {context : {
      word: store.word,
      score: store.score
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Letter);
