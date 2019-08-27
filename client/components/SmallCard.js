import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image} from 'react-native';

export default class SmallCard extends React.Component {
    render () {
        return (
            <View style={styles.small}>
                <Image style={styles.smallImage} source={require('../assets/park.jpg')}></Image>
                <Text style={styles.smallText}>This is the title for the event</Text>
            </View>
        )
        
    }
}

const styles = StyleSheet.create({
    small: {
        marginBottom: 10,
        
    },
    smallImage: {
        height: 100,
        width: 160,
        backgroundColor: '#fff',
        paddingBottom: 20,
        borderRadius: 4,
    },
    smallText: {
        fontSize: 15,
        width: '70%',
        paddingTop: 10,
        marginBottom: 20
    }
})