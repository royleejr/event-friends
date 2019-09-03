import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';

import FeaturedCard from './FeaturedCard';

export default class Featured extends React.Component {
  render () {
      console.log(this.props.navigation)
    return (
    <View style={styles.featuredContainer}>
        <Text style={styles.featuredTitle}>Featured</Text>
        <ScrollView 
        horizontal={true}
        style={styles.featuredScroll}>
            {this.props ? this.props.featuredData.map(items => {
                return <FeaturedCard key={items.id} data={items} onPress={() => {
                    this.props.onPress, {
                        data: items
                    }}
                }
                />
            }) : "loading..."}
        </ScrollView>
    </View>      
    
    );
    }
}

const styles = StyleSheet.create({
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
        
    },
    // featuredImages: {
    //     marginTop: 10,
    //     marginRight: 20,
    //     height: 300,
    //     width: 320,
    //     borderRadius: 4,
    // },
    // featuredText: {
    //     color: 'black',
    //     position: 'relative',
    //     top: -40,
    //     right: 20
    // }
});