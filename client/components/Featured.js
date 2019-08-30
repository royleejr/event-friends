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
            {this.props ? this.props.featuredData.map(items => {
                return <Image style={styles.featuredImages} key= {items.id} source={{uri: items.picture}} />
            }) : "loading..."}
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
        fontSize: 25,
        paddingTop: 15,
        fontFamily: 'LatoBold',
    },
    featuredScroll: {
        
    },
    featuredImages: {
        marginTop: 10,
        marginRight: 20,
        height: 300,
        width: 320,
        borderRadius: 4,
    }
});