import React from 'react';


import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
  render () {
    return (
        <View style={styles.header}> 
          <Text style={styles.headerText}>EventFriends</Text>
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
  }
});