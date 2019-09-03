import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class SmallCard extends React.Component {
    render () {
        return (
            <TouchableOpacity style={styles.small} onPress={this.props.onPress}>
                <Image style={styles.smallImage} source={{uri: this.props.hotData.picture}}></Image>
                <Text style={styles.smallText}>{this.props.hotData.title}</Text>
            </TouchableOpacity>
        )
        
    }
}

const styles = StyleSheet.create({
    small: {
        marginBottom: 10,
        width: 180,
    },
    smallImage: {
        height: 100,
        width: 170,
        backgroundColor: '#fff',
        paddingBottom: 20,
        borderRadius: 4,
    },
    smallText: {
        fontSize: 15,
        width: '90%',
        paddingTop: 10,
        marginBottom: 20,
        fontFamily: 'Lato'
    }
})