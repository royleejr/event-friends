import React from 'react';
import {ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';

import GradientButton from 'react-native-gradient-buttons';


export default class Button1 extends React.Component {

    state = {
        fontLoaded: false
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Roboto': require('../assets/fonts/Roboto-Regular.ttf'),
            'RobotoBold': require('../assets/fonts/Roboto-Bold.ttf'),
            'Lato': require('../assets/fonts/Lato-Regular.ttf'),
            'LatoBold': require('../assets/fonts/Lato-Bold.ttf')
        })
        this.setState({ fontLoaded: true })
    }

    render() {
        return (
            this.state.fontLoaded ?
                <GradientButton
                    style={{ marginVertical: 8, alignSelf: 'center'}}
                    text="Let's Get Started"
                    textStyle={{ fontSize: 20, fontFamily: 'LatoBold' }}
                    gradientBegin="#000000"
                    gradientEnd="#00ACF0"
                    gradientDirection="diagonal"
                    height={60}
                    width={300}
                    radius={15}
                    impact
                    impactStyle='Light'
                    onPressAction={this.props.action}
                />
            : <ActivityIndicator />
        )
    }
}
