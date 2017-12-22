import React,{ Component } from 'react';
import { StyleSheet, Text } from 'react-native';



class Rules extends Component {

  render(){

    return(
        <Text style={styles.title}>{this.props.titleText}</Text>
    );
  }

};


const styles = StyleSheet.create({
  title: {
    fontSize: 19,
    textAlign: 'right',
    fontWeight: 'bold',
    margin: '4%'
  }

});

export default Rules;
