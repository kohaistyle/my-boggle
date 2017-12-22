import React,{ Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from "react-redux";
import { Col, Row, Grid } from "react-native-easy-grid";


class ScoreScreen extends Component {

  static navigationOptions = {
    headerTitle: 'Home',
    header: null
  };

  render(){

    const { navigate } = this.props.navigation

    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          onPress={() => {this.props.navigation.dispatch(resetAction); /*navigate('Home')*/ }}
          title="Replay"
        />
      </View>
    );
  }

};

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Home'})
  ]
})

const mapStateToProps = store => {

    return {context : {
      word: store.word,
      score: store.score
    }
  }
}

export default connect(mapStateToProps)(ScoreScreen);
