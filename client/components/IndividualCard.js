import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image} from 'react-native';


export default class IndividualCard extends React.Component {
    render () {
        return (
            <View style={styles.individualCard}>
                <Image style={styles.individualCardImg} source={require('../assets/pic.jpg')}></Image>
                <Text style={styles.individualCardTitle}>This is the title for the event</Text>
                <View style={styles.individualCardContainer}>
                    <Text style={styles.individualCardDate}>September 4, 2019</Text>
                    <Text style={styles.individualCardTime}>5:00pm - 9:30pm</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    individualCard: {
        flex: 1,
        marginTop: 10,
        backgroundColor: '#fff',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'silver',
        marginBottom: 20

    },
    individualCardImg: {
        height: 170,
        width: 350,
        alignSelf: 'center',
        borderRadius: 4

    }, 
    individualCardTitle: {
        paddingTop: 20,
        fontSize: 20,
        paddingBottom: 20
    },
    individualCardContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    individualCardDate: {
        paddingBottom: 30,
        color: 'grey'
    },
    individualCardTime: {
        color: 'grey'
    }   

})