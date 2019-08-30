import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LottieView from 'lottie-react-native';

export default class Header extends React.Component {
  render () {
    return (
        <View style={styles.header}> 
          {/* <LottieView style={styles.logo} source={require('../assets/images/light-logo.json')}/> */}
          <View style={{display: 'flex', flexDirection:'row'}}>
            <Text style={styles.headerText}>Event</Text>
            <Text style={styles.headerFriends}>Friends</Text>
          </View>
          
        </View>
    );
    }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'silver',
    paddingTop: 30,
  },
  headerText: {
    color: 'black',
    height: 30,
    fontSize: 20,
    fontFamily: 'LatoBold',
  },
  headerFriends: {
    color: '#00ACF0',
    fontFamily: 'LatoBold',
    fontSize: 20
  },
  // logo: {
  //   height: 60,
  // }
});