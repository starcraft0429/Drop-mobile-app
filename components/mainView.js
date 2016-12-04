import React from 'react';
import { 
          StyleSheet, 
          Text, 
          View, 
          Button,
          Image,
          StatusBar, 
          Dimensions 
        } from 'react-native';

class mainViewCompo extends React.Component {
  constructor(props) {
    super(props)
    
  }


  render() {
    return (
    	<View style={{flex: 1}}>
        <StatusBar
          backgroundColor="#ffffff"
          barStyle="dark-content"
        />
        <View style={styles.navbar}>
          <Text style={styles.navbarText}>One swipe to order!</Text>
        </View>
        <View style={styles.mainView}>
          <View style={styles.dropView}>
            <Image source={require('../images/main_slider.png')} style={styles.bgImg}>
              <Text style={styles.welcome}>
                Welcome to React Native!gfiyfgygyujfgysdfasdfasdfsadfdsa
              </Text>
            </Image>
          </View>
          <View style={styles.btnView}>
          </View>
        </View>
      </View>
      
    );
  }

}


export default mainViewCompo

var DeviceWidth = Dimensions.get('window').width;
var DeviceHeight = Dimensions.get('window').height;

var styles = StyleSheet.create({
  navbar:{
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  navbarText:{
    fontSize: 20,
    fontFamily: 'Lato-Medium',
    color: '#000000'
  },
  mainView:{
    backgroundColor: '#ededed',
    flex: 1,
  },
  dropView:{
    flex: .55,
    padding: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
    
  },
  btnView:{
    backgroundColor: 'blue',
    flex: .45,

  },
  bgImg:{
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'aqua',
    resizeMode: 'contain',
  }
});