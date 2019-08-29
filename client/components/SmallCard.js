import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

export default class SmallCard extends React.Component {
    render () {
        return (
            <View style={styles.small}>
                <Image style={styles.smallImage} source={{uri: this.props.hotData.picture}}></Image>
                <Text style={styles.smallText}>{this.props.hotData.title}</Text>
            </View>
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
        marginBottom: 20
    }
})