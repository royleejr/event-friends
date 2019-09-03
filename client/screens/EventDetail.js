import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet, Modal, Button, TextInput} from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

import {Ionicons} from '@expo/vector-icons'

import Header from '../components/Header';

export default class EventDetail extends React.Component {

    state = {
        modalVisible: false,
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

    render() {

        const data = this.props.navigation.getParam('data', 'no-data')

        return (
            <ScrollView style={styles.detail}>
                <Image style={styles.detailImg} source={{uri: data.picture}} />
                <View style={styles.detailContainer}>
                    <Text style={styles.detailTitle}>{data.title}</Text>
                    <View style={styles.detailContainer2}>
                        <Text style={styles.detailLocation}>{data.location}</Text>
                        <Text style={styles.detailAddress}>{data.address}</Text>
                    </View>
                    <View style={styles.detailFlex}>
                        <Text style={styles.detailDate}>{data.date}</Text>
                        <Text style={styles.detailTime}>{data.time}</Text>
                        {/* <Ionicons name='ios-home' size={30} color={tintColor}/> */}
                    </View>
                    <Text style={styles.detailDescription}> {data.description}</Text>
                    {/* <View style={styles.detailButtonContainer}>
                        <Button color="#00ACF0" onPress={() => this.setModalVisible(true)} title="Create Event"></Button>
                    </View> */}
                    <View style={styles.detailMapContainer}>
                        <MapView 
                            style={styles.detailMap} 
                            initialRegion={{
                                latitude: data.lat,
                                longitude: data.long,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0921
                            }}> 
                            <Marker  
                            coordinate = {{
                                latitude: data.lat,
                                longitude: data.long
                            }}
                            title = {data.location}
                            description = {data.address}
                            />
                        </MapView>
                    </View>
                </View>
                {/* <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={styles.modalButton}>
                        <Button color= "#00ACF0" onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }} title="Close Modal"></Button>
                    </View>

                    <TextInput style={styles.modalInput1} placeholder="Date"/>
                    

                </Modal> */}
            </ScrollView>

        )
        
    }
}

const styles = StyleSheet.create({
    detail: {

    },
    detailImg: {
        height: 300,
        width: '100%'
    },
    detailContainer : {
        paddingLeft: 24,
        paddingRight: 24
    },
    detailTitle : {
        paddingTop: 20,
        fontSize: 20,
        fontFamily: 'LatoBold'
    },
    detailFlex:{
        display: 'flex',
        paddingTop: 20,
        width: '100%'
    },
    detailDate: {
        fontFamily: 'Lato',
    },
    detailTime: {
        fontFamily: 'Lato',
    },
    detailDescription : {
        paddingTop: 20,
        color: 'grey',
        fontFamily: 'Lato'
    },
    detailContainer2: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 20,
        width: '100%'
    },
    detailLocation: {
        fontFamily: 'Lato'
    },
    detailAddress: {
        fontFamily: 'Lato'
    },
    detailMapContainer: {
        width: '100%',
        height: 300,
        marginTop: 30,
        marginBottom: 30
    },
    detailMap: {
        width: '100%',
        height: '100%'
    },
    detailButtonContainer: {
        marginTop: 20
    },
    modalButton: {
        marginTop: 10
    },
    modalInput1: {
        height: 40,
        width: '70%',
        borderWidth: 1,
        borderColor: 'gray',

    }
})