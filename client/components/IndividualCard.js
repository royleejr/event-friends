import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';


export default class IndividualCard extends React.Component {
    render () {
        const { picture, date, time, title } = this.props.eventData
        return (
            <TouchableOpacity style={styles.individualCard} onPress={this.props.onPress}>
                <Image style={styles.individualCardImg} source={{uri: picture}}></Image>
                <Text style={styles.individualCardTitle}>{title}</Text>
                <View style={styles.individualCardContainer}>
                    <Text style={styles.individualCardDate}>{date}</Text>
                    <Text style={styles.individualCardTime}>{time}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create ({
    individualCard: {
        flex: 1,
        marginTop: 10,
        backgroundColor: '#fff',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#00ACF0',
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
        paddingBottom: 20,
        fontFamily: 'Lato'
    },
    individualCardContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    individualCardDate: {
        paddingBottom: 30,
        color: 'grey',
        fontFamily: 'Lato'
    },
    individualCardTime: {
        color: 'grey',
        fontFamily: 'Lato'
    }   

})