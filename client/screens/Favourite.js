import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import axios from 'axios';

import IndiviualCard from '../components/IndividualCard';

export default class Favourite extends React.Component {
    state = {
        favouriteData: []
    }

    componentDidMount () {
        this.getFavouriteData()
    }

    getFavouriteData = () => {
        axios.get('http://0df41a98.ngrok.io')
        .then(response => {
            const data = response.data.filter(item => item.favourite === true)
            this.setState({
                favouriteData: data
            })
        })
    }

    render() {
        return (
            <ScrollView style={styles.favourite}>
                <Text style={styles.favouriteTitle}>Favourites</Text>
                {
                    this.state.favouriteData.length > 0? this.state.favouriteData.map((item) => {
                    return <IndiviualCard eventData={item} key={item.location} onPress={() => this.props.navigation.navigate('EventDetail', {
                        data: item
                    })}/>
                }) : <Text style={styles.favouriteText}>You have no favourited events</Text>
                }

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    favourite: {
        paddingLeft: 12,
        paddingRight: 12,
        backgroundColor: '#fff'
    },
    favouriteTitle: {
        fontSize: 25,
        fontFamily: 'LatoBold',
        marginTop: 30,
        marginBottom: 20
    }  ,
    favouriteText: {
        color: '#00ACF0'
    }
})