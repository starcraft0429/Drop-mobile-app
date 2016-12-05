import React from 'react';
import { 
          StyleSheet, 
          Text, 
          View, 
          Button,
          Image,
          StatusBar, 
          Dimensions,
          TouchableHighlight
        } from 'react-native';
import Menu, {
                MenuContext,
                MenuOptions,
                MenuOption,
                MenuTrigger
              } from 'react-native-popup-menu';
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
        <MenuContext>
          <View style={styles.navbar}>
            <View style={styles.menuView}></View>
            <View style={styles.navbarTextView}>
              <Text style={styles.navbarText}>One swipe to order!</Text>
            </View>
            <View style={styles.menuView}>
              <Menu onSelect={value => alert(`Selected number: ${value}`)}>
                <MenuTrigger>
                  <Text style={styles.menuText}>● ● ●</Text>
                </MenuTrigger>
                <MenuOptions>
                  <MenuOption value={1} text='One' />
                  <MenuOption value={2}>
                    <Text style={{color: 'red'}}>Two</Text>
                  </MenuOption>
                  <MenuOption value={3} disabled={true} text='Three' />
                </MenuOptions>
              </Menu>
            </View>
          </View>
          <View style={styles.mainView}>
            <View style={styles.dropView}>
              <Image source={require('../images/main_slider.png')} style={styles.bgImg}>
                <Image source={require('../images/main_slide_button_letters.png')} style={styles.circleImg}>
                
                </Image>
              </Image>
            </View>
            <View style={styles.btnView}>
              <View style={styles.btnRow}>
                <Image style={styles.btnImg}
                  source={require('../images/main_time_icon.png')}
                />
                <Text style={styles.btnText}>7:00pm - 9:00pm Today</Text>
              </View>
              <View style={styles.btnRow}>
                <Image style={styles.btnImg}
                  source={require('../images/main_delivery_icon.png')}
                />
                <Text style={styles.btnText}>Duong Vung</Text>
              </View>
              <View style={styles.btnRow}>
                <Image style={styles.btnImg}
                  source={require('../images/main_location_icon.png')}
                />
                <Text style={styles.btnText}>Home</Text>
              </View>
              <View style={styles.btnRow}>
                <Image style={styles.btnImg}
                  source={require('../images/main_shoppingcart_icon.png')}
                />
                <Text style={styles.btnText}>150,000d for 13 items</Text>
              </View>
            </View>
          </View>
        </MenuContext>
      </View>
      
    );
  }

}


export default mainViewCompo

var DeviceWidth = Dimensions.get('window').width;
var DeviceHeight = Dimensions.get('window').height;

var styles = StyleSheet.create({
  navbar:{
    flexDirection: 'row',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  navbarTextView:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbarText:{
    fontSize: 20,
    fontFamily: 'Lato-Medium',
    color: '#000000',
  },
  menuView:{
    height: 50,
    width: 50,
    justifyContent: 'center',
  },
  menuText:{
    color: '#333',
    fontSize: 15,
  },
  mainView:{
    backgroundColor: '#ededed',
    flex: 1,
    padding: 20,
  },
  dropView:{
    flex: .55,
    alignSelf: 'stretch',
    alignItems: 'center',
    
  },
  bgImg:{
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
  },
  circleImg:{
    width: 220,
    height: 220,
  },
  btnView:{
    flex: .45,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
  },
  btnRow:{
    height: 50,
    width: 350,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  btnImg:{
    width: 50,
    height: 50,
    marginRight: 10,
  },
  btnText:{
    fontSize: 18,
    fontFamily: 'Lato-Regular',
  }
});