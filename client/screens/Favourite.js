import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import axios from 'axios';

import IndiviualCard from '../components/IndividualCard';

export default class Favourite extends React.Component {
    state = {
        favouriteData: []
    }

    componentDidMount () {
        setInterval(() => this.getFavouriteData(), 2000)
        // this.getFavouriteData()
    }

    // componentDidUpdate (prevProps, prevState) {

    //     if (this.state.favouriteData.length != prevState.favouriteData.length){
    //         this.getFavouriteData()
    //         console.log('prev state' + prevState.favouriteData.length)
    //         console.log('new state' + this.state.favouriteData.length)
    //     }
    // }

    getFavouriteData = () => {
        axios.get('http://5f46425d.ngrok.io')
        .then(response => {
            const data = response.data.filter(item => item.favourite === true)
            console.log(response.length)
            this.setState({
                favouriteData: data
            })
        })
    }

    render() {
        
        // console.log(this.state.favouriteData)
        return (
            <ScrollView style={styles.favourite}>
                <Text style={styles.favouriteTitle}>Favourites</Text>
                {
                    this.state.favouriteData.length > 0? this.state.favouriteData.map((item) => {
                    return <IndiviualCard eventData={item} key={item.picture} onPress={() => this.props.navigation.navigate('EventDetail', {
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