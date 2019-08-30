import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import * as Font from 'expo-font';

import LottieView from 'lottie-react-native';
import Button1 from '../components/Button1';

class Landing extends React.Component {

    state = {
        fontLoaded: false
    }

    async componentDidMount () {
        await Font.loadAsync({
            'Roboto': require('../assets/fonts/Roboto-Regular.ttf'),
            'RobotoBold' : require('../assets/fonts/Roboto-Bold.ttf'),
            'Lato' : require('../assets/fonts/Lato-Regular.ttf'),
            'LatoBold': require('../assets/fonts/Lato-Bold.ttf')
        })
        this.setState({fontLoaded:true})
    }
    render() {
        return (
            <View style={styles.landing}>
                {
                    this.state.fontLoaded ? (
                    <> 
                        <View style={styles.flex}>  
                            <Text style={styles.title}>Event</Text>
                            <Text style={styles.friends}>Friends</Text>
                        </View>
                        
                        
                        <Text style={styles.text}>Where people become friends</Text> 
                    </>
                    ): <ActivityIndicator size="large"/>
                }
                <LottieView style={styles.logo} source={require('../assets/images/new-logo.json')} autoPlay loop />
                <Button1 style={styles.button} title="Let's get started" action={() => this.props.navigation.navigate('Events')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    landing: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    logo: {
        width: '100%',
        marginBottom: 50
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    title: {
        fontFamily: "LatoBold",
        textAlign: 'center',
        fontSize: 40
    },
    friends: {
        fontFamily: "LatoBold",
        color: "#00ACF0",
        fontSize: 40
    },
    text: {
        fontFamily: "Lato",
        textAlign: 'center',
        color: 'grey',
        marginBottom: 50
    }
})

export default Landing;