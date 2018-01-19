import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

class Slides extends Component {
  constructor(props) {
    super(props);
  }
  renderSlides() {
    return this.props.data.map((slide) => {
      return (
         <View key={slide.text}>
          <Text>{slide.text}</Text>
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView
        horizontal
        style={{ flex: 1 }}>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

export default Slides;
