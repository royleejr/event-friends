import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Landing from './screens/Landing';
import Event from './screens/Event';


const AppNavigator = createStackNavigator({
  Home: Landing,
  Events: Event
},{
  defaultNavigationOptions: {
    header: null
  }
},{
  initialRouteName: "Home"
}
);


const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

