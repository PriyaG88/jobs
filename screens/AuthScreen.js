import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.facebookLogin();
  }

  render() {
    return (
      <View>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
      </View>
    );
  }
}

function mapStateToProps({auth}) {
  return {
    token: auth.token
  };
}

export default connect(mapStateToProps, actions)(AuthScreen);
