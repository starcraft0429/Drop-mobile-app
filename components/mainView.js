import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';

class mainView extends React.Component {
  constructor(props) {
    super(props)
    
  }


  render() {
    return (
    	<View>
        <StatusBar
          backgroundColor="#ffffff"
          barStyle="light-content"
        />
        <Text>mainView</Text>
        
      </View>
      
    );
  }

}


export default mainView