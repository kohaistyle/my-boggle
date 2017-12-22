import React,{ Component } from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { connect } from "react-redux";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Icon } from 'react-native-elements';
import gameState  from '../gameState/GameState' // reducer
import { removeLetter }  from '../Actions' // reducer

class Result extends Component {

  render(){

    return(
      <Grid>
        <Row>
          <Col style={styles.centerAll} size={80}><Text style={styles.title}>{this.props.context.word}</Text></Col>
          <Col onPress={ () => this.props.removeLetter() }style={styles.centerAll} size={20}><Icon  reverse name='ios-arrow-back' type='ionicon' color='#517fa4' /></Col>
        </Row>
      </Grid>
    );
  }

};


const styles = StyleSheet.create({
  centerAll: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    margin: '8%'
  }

});

const mapDispatchToProps = dispatch => {
  return {
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

export default connect(mapStateToProps,mapDispatchToProps)(Result);
