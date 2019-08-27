import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';

export default class Featured extends React.Component {
  render () {
    return (
    <View style={styles.container}>
        <Text style={styles.featuredTitle}>Featured</Text>
        <ScrollView 
        horizontal={true}
        style={styles.featuredScroll}>
        <Image style={styles.featuredImages} source={require('../assets/park.jpg')} />
        <Image style={styles.featuredImages} source={require('../assets/hearts.png')} />
        <Image style={styles.featuredImages} source={require('../assets/pic.jpg')} />
        <Image style={styles.featuredImages} source={require('../assets/icon.png')} />
        </ScrollView>
    </View>      
    
    );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 300,
        width: 100 + "%",
        backgroundColor: '#fff',
        paddingBottom: 20,
        paddingLeft: 12,
    },
    featuredTitle: {
        fontSize: 30,
        paddingTop: 15
    },
    featuredScroll: {
        
    },
    featuredImages: {
        marginTop: 10,
        marginRight: 30,
        height: 300,
        width: 350,
        borderRadius: 4,
    }
});