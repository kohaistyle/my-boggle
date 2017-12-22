import React,{ Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
class Timer extends Component {

  constructor(props) {
    super(props);
    this.state = {
        timer: null,
        counter: 31
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
      let timer = setInterval(this.tick, 1000);
      this.setState({timer: timer});
      //console.log(this.state)
    }

  componentWillUnmount() {
      clearInterval(this.state.timer);
  }

  tick = () => {
    this.setState({
      counter: this.state.counter - 1
    });

    if(this.state.counter<0){
      clearInterval(this.state.timer);

    }

  }

  render(){

    return(

      <View style={styles.centerAll}>
        <Icon  reverse name='ios-clock' type='ionicon' color='#517fa4' />
        <Text style={styles.title}> {this.state.counter}</Text>
      </View>

    );
  }

};


const styles = StyleSheet.create({
  centerAll: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: '8%'
  }

});

export default Timer;
