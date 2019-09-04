import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import SmallCard from './SmallCard';

export default class HotEvents extends React.Component {
    render() {
        return (
            <View style={styles.hotEvents}>
                <Text style={styles.hotEventsText}>Hot Events</Text>
                <View style={styles.hotEventsContainer}>
                    {
                        this.props.hotData ? this.props.hotData.map(item => {
                            return <SmallCard hotData={item} key={item.id}/>
                        }) : "loading.."
                    }
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
    }
})