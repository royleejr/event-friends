import React from 'react';

import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';


export default class CategorieCard extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.cat} onPress={this.props.onPress}>
                <Image style={styles.catImg} source={{uri: this.props.categorieData.picture}} />
                <Text style={styles.catText}>{this.props.categorieData.categorie}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    cat: {
        width: '48%'
    },
    catImg: {
        height: 150,
        borderRadius: 4,
        width: '100%'
    },
    catText: {
        position: 'relative',
        top: -30,
        left: 12,
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
        width: 130,
        fontFamily: 'LatoBold',
    }
})