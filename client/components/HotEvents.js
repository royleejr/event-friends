import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import SmallCard from './SmallCard';

export default class HotEvents extends React.Component {
    render() {
        return (
            <View style={styles.hotEvents}>
                <Text style={styles.hotEventsText}>Hot Events</Text>
                <View style={styles.hotEventsContainer}>
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    hotEvents : {
        marginTop: 10,
        paddingLeft: 12,
        paddingRight: 12,
        width: '100%',
        backgroundColor: '#fff',
        flex: 1,
    }, 
    hotEventsText: {
        fontSize: 30,
        marginTop: 20
    },
    hotEventsContainer: {
        width: '100%',
        flex: 1,
        flexWrap: 'wrap',
        height: 330,
        marginTop: 10
    }
})