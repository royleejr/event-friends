import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import Featured from './components/Featured';

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.home}>
        <Header />
        <Featured />
        
      </View>
    );
    }
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: 'grey',
    flex: 1,
  },
  
});
