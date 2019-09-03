import React from "react";
import { createStackNavigator, createAppContainer, createBottomTabNavigator} from "react-navigation";

import { Ionicons }from '@expo/vector-icons';

import Header from './components/Header';
import Landing from './screens/Landing';
import Event from './screens/Event';
import Categories from './screens/Categories';
import CategoryDetail from './screens/CategoryDetail';
import EventDetail from "./screens/EventDetail";
import Favourite from './screens/Favourite';

const EventNavigator = createStackNavigator({
  Event: Event,
  EventDetail: EventDetail,
},{
  defaultNavigationOptions: {
    headerTitle: <Header />
}
},
{
  initialRouteName: "Event"
})

const CategoryNavigator = createStackNavigator({
  Cateogories: Categories,
  CategoryDetail: CategoryDetail
},
{
  defaultNavigationOptions: {
    headerTitle: <Header />
  }
})

const FavouriteNavigator = createStackNavigator({
  Favourite: Favourite,
  EventDetail: EventDetail
},
{
  defaultNavigationOptions: {
    headerTitle: <Header />
  }
})

const tabNavigator = createBottomTabNavigator(
  {
  Home: {
    screen: EventNavigator, 
    navigationOptions: {
    tabBarLabel: 'Home',
    tabBarIcon : ({tintColor}) => (
      <Ionicons name='ios-home' size={30} color={tintColor}/>
    )
  },
},
  Categories: {
    screen: CategoryNavigator,
    navigationOptions: {
    tabBarLabel: 'Categories',
    tabBarIcon: ({tintColor}) => (
      <Ionicons name='ios-search' size={30} color={tintColor} />
    )
  },
  },
  Favourite: {
    screen: FavouriteNavigator,
      navigationOptions: {
      tabBarLabel: 'Favourite',
      tabBarIcon: ({tintColor}) => (
        <Ionicons name='ios-heart' size={30} color={tintColor}/>
      ),
    }
  },
},
{
  order: ['Home', 'Categories', 'Favourite'],
  tabBarOptions: {
    showIcon: true,
    activeTintColor: "#00ACF0",
    inactiveTintColor: 'gray',
    style: {
      backgroundColor: '#fff'
    },
  }
}
)


const AppNavigator = createStackNavigator({
  Home: Landing,
  Events: tabNavigator
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




// {
//   defaultNavigationOptions: ({navigation}) => ({
//     tabBarIcon: ({focused, horizontal, tintColor}) => {
//       const {routeName} = navigation.state;
//       let IconComponent = Ionicons;
//       let iconName;
//       if (routeName === 'Home') {
//         iconName = `ios-information-circle${focused ? '' : '-outline'}`;
//           IconComponent = HomeIconWithBadge; 
//         } else if (routeName === 'Catagories') {
//           iconName = `ios-options`;
//         }
//       return <IconComponent name={iconName} size={25} color={tintColor} />
//     }
//   }),
//   tabBarOptions: {
//     activeTintColor: 'tomato',
//     inactiveTintColor: 'gray',
//   },
// }