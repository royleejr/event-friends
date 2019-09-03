import React from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator} from 'react-native';
import axios from 'axios';

import Header from '../components/Header';
import Featured from '../components/Featured';
import FeaturedCard from '../components/FeaturedCard';
import HotEvents from '../components/HotEvents';
import IndividualCard from '../components/IndividualCard';
import SmallCard from '../components/SmallCard';



export default class Event extends React.Component {

  state = {
    eventData: [],
    fontLoaded: false,
    featuredData: [],
    hotData: []
  }

componentDidMount () { 
    this.getData()
  }

  getData = () => {
    axios.get('http://0df41a98.ngrok.io')
    .then(response => {
      this.setState({
        eventData: response.data
      })
      this.getFeatured()
    })
    .catch(err => console.log(err))
  }

  getFeatured = () => {
    if (this.state.eventData) {
      const featuredData = this.state.eventData.filter(items => items.featured === true)
      this.setState({
          featuredData : featuredData
        })
    }
    this.getHot()
  }

  getHot = () => {
    if (this.state.eventData) {
      const hotData = this.state.eventData.filter(items => items.hot === true)
      this.setState({
        hotData: hotData
      }) 
    }
  }

  render () {
    return (
      <>
      {/* <Header /> */}
      <ScrollView style={styles.home}>
        <View style={styles.featuredContainer}>
            <Text style={styles.featuredTitle}>Featured</Text>
            <ScrollView 
            horizontal={true}
            style={styles.featuredScroll}>
                {this.state.featuredData.length > 0 ? this.state.featuredData.map(items => {
                    return <FeaturedCard key={items.id} featuredData={items} onPress={() => {
                        this.props.navigation.navigate('EventDetail', {
                            data: items
                        })
                    }}
                    />
                }) : <ActivityIndicator/>}
            </ScrollView>
        </View>   
        {/* <HotEvents hotData={this.getHot()}/> */}

        <View style={styles.hotEvents}>
            <Text style={styles.hotEventsText}>Hot Events</Text>
            <View style={styles.hotEventsContainer}>
                {
                    this.state.hotData.length > 0 ? this.state.hotData.map(item => {
                        return <SmallCard hotData={item} key={item.title} onPress={() => {
                            this.props.navigation.navigate('EventDetail', {
                                data: item
                            })
                        }}/>
                    }) : <ActivityIndicator/>
                }
            </View>
        </View>

        <View style={styles.upcoming}>
          <Text style={styles.upcomingTitle}>Upcoming Events</Text>
          {
            this.state.eventData ? this.state.eventData.map(item => {
              return <IndividualCard eventData={item} key={item.location} onPress={() => {
                  this.props.navigation.navigate('EventDetail', {
                      data: item
                  })
              }}/>
            })
            :  <Text>Loading..</Text>
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
  featuredContainer: {
    height: 300,
    width: "100%",
    backgroundColor: '#fff',
    paddingBottom: 20,
    paddingLeft: 12,
},
featuredTitle: {
    fontSize: 25,
    paddingTop: 15,
    fontFamily: 'LatoBold',
},
featuredScroll: {
    height: 230
},
hotEvents : {
    marginTop: 10,
    paddingLeft: 12,
    paddingRight: 12,
    width: 100 + '%',
    backgroundColor: '#fff',
    flex: 1,
}, 
hotEventsText: {
    fontSize: 25,
    marginTop: 20,
    fontFamily: 'LatoBold',
},
hotEventsContainer: {
    width: 100 + '%',
    display: 'flex',
    flexWrap: 'wrap',
    height: 355,
    marginTop: 10,
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
