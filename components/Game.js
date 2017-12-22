import React,{ Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from "react-redux";
import { Col, Row, Grid } from "react-native-easy-grid";
import Toast, {DURATION} from 'react-native-easy-toast'
import { reset, setValid }  from '../Actions' // reducer

import Letter from "./Letter.js";
import Timer from "./Timer.js";
import Result from "./Result.js";

class GameScreen extends Component {

  static navigationOptions = {
    headerTitle: 'Home',
    header: null
  };

  showToast = (msg) =>{

  }

  checkWord = () => {

    const API_URL = 'http://api.pearson.com/v2/dictionaries/ldoce5/entries?search='

    if(this.props.context.word.length < 2){
      this.refs.toast_err.show('You need at least 2 letters!');
      return;
    }

    fetch(API_URL+this.props.context.word)
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp.results);
        console.log(resp.results.length);
        if(resp.results.length >= 1){
          this.refs.toast.show('Congratulations Your word is valid!');
          this.props.setValid();
          this.props.reset();
          this.props.navigation.navigate('Score');
        }else{
          this.refs.toast_warn.show('Too bad, not a valid word!');
        }
      })
  }

  render(){
    const { navigate } = this.props.navigation

    var cols = [], i = 0, len = 4;
    while (++i <= len) cols.push(i);

    //var disabled = false
    let disabled = this.props.context.valid ? false : true;

    return(

      <Grid>
          <Row style={styles.centerAll} size={20}>
            <Timer />
          </Row>
          <Row style={styles.centerAll} size={30}>
            <Result />
          </Row>
          <Row size={30}>
            <View style={{ flex: 1, flexDirection:'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>

              <Grid>
                <Row>
                    {cols.map(function (i) {
                      return( <Col key={i} style={{ backgroundColor: generateRandomColor(), alignItems: 'center', justifyContent: 'center'}}><Letter style={{width: 100, height: 50}} /></Col>);
                    })}
                </Row>
                <Row>
                  {cols.map(function (i) {
                    return( <Col key={i} style={{ backgroundColor: generateRandomColor(), alignItems: 'center', justifyContent: 'center'}}><Letter style={{width: 100, height: 50}}/></Col>);
                  })}
                </Row>
                <Row>
                  {cols.map(function (i) {
                    return( <Col key={i} style={{ backgroundColor: generateRandomColor(), alignItems: 'center', justifyContent: 'center'}}><Letter style={{width: 100, height: 50}} /></Col>);
                  })}
                </Row>
              </Grid>

            </View>
          </Row>

          <Row size={20}>
            <Col style={styles.centerAll}><Button onPress={ () => this.checkWord()} title="Check Word" /></Col>
            <Col style={styles.centerAll}><Button onPress={ () => navigate('Score')} title="Go to scores" disabled={disabled}/></Col>
          </Row>

          <Toast defaultCloseDelay={4000} style={{backgroundColor: '#009688',borderRadius: 5,padding: 30}} position='center' ref="toast"/>
          <Toast defaultCloseDelay={4000} style={{backgroundColor: '#FFC107',borderRadius: 5,padding: 30}} position='center' ref="toast_warn"/>
          <Toast defaultCloseDelay={4000} style={{backgroundColor: '#FF2222',borderRadius: 5,padding: 30}} position='center' ref="toast_err"/>

      </Grid>

    );
  }

};

const colors = [
  /* Multi : '#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5',
  '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50',
  '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
  '#FF5722', '#795548', '#9E9E9E', '#607D8B',*/
  // REd : '#e0ffff','#e2f1ef','#e3e2df','#e3d3d0','#e2c5c1','#e1b6b1','#dfa8a3','#dd9894','#da8a85','#d67b77','#d26c69','#cd5c5c'
  '#4682b4','#568aba','#6693bf','#749cc5','#82a6cb','#90b0d1','#9cb9d6','#a9c3dc','#b6cce2','#c2d6e8','#cde0ee','#daebf4','#e5f5f9','#f0ffff'
];

function generateRandomColor() {
  return colors[Math.floor(Math.random()*colors.length)];
}

const styles = StyleSheet.create({
  centerAll: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const mapDispatchToProps = dispatch => {
  return {
    addLetter: (l) =>  {dispatch(addLetter(l))},
    removeLetter: () => { dispatch(removeLetter()) },
    reset: () => { dispatch(reset()) },
    setValid: () => { dispatch(setValid()) }
  }
};

const mapStateToProps = store => {

    return {context : {
      word: store.word,
      score: store.score
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(GameScreen);
