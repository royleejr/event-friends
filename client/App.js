import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

import Header from './components/Header';
import Featured from './components/Featured';
import HotEvents from './components/HotEvents';
import IndividualCard from './components/IndividualCard';

export default class App extends React.Component {
  render () {
    return (
      <ScrollView style={styles.home}>
        <Header />
        <Featured />
        <HotEvents />
        <View style={styles.upcoming}>
          <Text style={styles.upcomingTitle}>Upcoming Events</Text>
          <IndividualCard />
          <IndividualCard />
          <IndividualCard />
          <IndividualCard />
          <IndividualCard />
          <IndividualCard />
        </View>
        
      </ScrollView>
    );
    }
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: '#F4F5F1',
    flex: 1,
    fontFamily: 'Helvetica',
  },
  upcoming: {
    backgroundColor: '#fff',
    marginTop: 15,
    paddingLeft: 12,
    paddingRight: 12

  },
  upcomingTitle: {
    fontSize: 30,
    marginTop: 20
  }
  
});
