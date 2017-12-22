import React,{ Component } from 'react';
import { StyleSheet, Text, Image } from 'react-native';



class Title extends Component {

  render(){

    return(
        <Text style={styles.title}>{this.props.titleText}</Text>

    );
  }

};


const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: '8%'
  }

});

export default Title;
