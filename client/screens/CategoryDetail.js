import React from 'react';
import {ScrollView, Text, Image, StyleSheet, ActivityIndicator} from 'react-native';


import IndividualCard from '../components/IndividualCard';

export default class CategoryDetail extends React.Component {

    state = {
        newData : []
    }
    componentDidMount() {
        const data1 = this.props.navigation.getParam('data', 'no-data')
        const eventData1 = this.props.navigation.getParam('eventData', 'no-data')

        this.newData(data1, eventData1)
    }
    
    newData = (data, eventData1) => {

        const newData = eventData1.filter( (item) => {
            return (item.catagories.includes(data.categorie.toLowerCase()) === true )
        })

        this.setState({
            newData: newData
        })
    }
    
    
    render() {
        const data = this.props.navigation.getParam('data', 'no-data')

        return (
            <ScrollView style={styles.catDetail}>
                <Text style={styles.catTitle}>{data.categorie}</Text>
                {
                    this.state.newData.length > 0 ? this.state.newData.map(item => {
                        return <IndividualCard eventData={item} key={item.address} onPress={() => this.props.navigation.navigate('EventDetail', {
                            data: item
                        })}/>
                    })
                    : <ActivityIndicator />
                }

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    catDetail: {
        backgroundColor: '#fff',
        paddingLeft: 12,
        paddingRight: 12
    },
    catTitle: {
        fontSize: 25,
        fontFamily: 'LatoBold',
        marginTop: 30,
        marginBottom: 20
    }
})