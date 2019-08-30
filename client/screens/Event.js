import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import axios from 'axios';


import Header from '../components/Header';
import Featured from '../components/Featured';
import HotEvents from '../components/HotEvents';
import IndividualCard from '../components/IndividualCard';

export default class Event extends React.Component {
  state = {
    eventData: [],
    fontLoaded: false
  }

componentDidMount () { 
    this.getData()
  }

  getData = () => {
    axios.get('http://localhost:8080')
    .then(response => {
      this.setState({
        eventData: response.data
      })
    })
    .catch(err => console.log(err))
  }

  getFeatured = () => {
    if (this.state.eventData) {
      const featuredData = this.state.eventData.filter(items => items.featured === true)
      return featuredData
    }
  }

  getHot = () => {
    if (this.state.eventData) {
      const hotData = this.state.eventData.filter(items => items.hot === true)
      return hotData
    }
  }

  render () {
 
    return (
      <>
      <Header />
      <ScrollView style={styles.home}>
        <Featured featuredData={this.getFeatured()}/>
        <HotEvents hotData={this.getHot()}/>
        <View style={styles.upcoming}>
          <Text style={styles.upcomingTitle}>Upcoming Events</Text>
          {
            this.state.eventData ? this.state.eventData.map(item => {
              return <IndividualCard eventData={item} key={item.location}/>
            })
            :  "loading..."
          }
        </View>
      </ScrollView>
      </>
    );
    }
}

//#2374ff
//#00ACF0
//#F4F5F1

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
    fontSize: 25,
    marginTop: 20,
    fontFamily: 'LatoBold'
  }
  
});
