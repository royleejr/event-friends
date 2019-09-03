import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';



export default class FeaturedCard extends React.Component {
    render() {
        return(
            <TouchableOpacity style={styles.featuredCard} onPress={this.props.onPress}>
                <Image style={styles.featuredCardImages} source={{uri: this.props.featuredData.picture}} />
                <Text style={styles.featuredCardText}>{this.props.featuredData.title}</Text>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    featuredCard: {
        marginTop: 10,
        marginRight: 20,
        width: 320,
        height: '100%'
    },
    featuredCardImages: {
        height: '100%',
        width: '100%',
        borderRadius: 4,
        // opacity: 0.8

    },
    featuredCardText: {
        position: 'relative',
        width: '80%',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        top: -60,
        left: 15,
        zIndex: 1

    }
})