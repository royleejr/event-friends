import React from 'react';
import {Text} from 'react-native';

export default class CustomText extends React.Component {

    setFontType = (type) => {
        switch (type) {
            case 'regular':
                return 'Lato-Regular'
        }
    }
    render() {
        const font = this.setFontType(this.props.type ? this.props.type : 'normal')
        return <Text>{this.props.children}</Text>
    }
}