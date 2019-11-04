import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import Recipes from './components/RecipesScreen'
import Restaurants from './components/RestaurantsScreen'

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Recipes ,
     Restaurants,
  },
  {

    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = MaterialIcons;
        let iconName;
        if (routeName === 'Restaurants') {
          iconName = `restaurant`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
         // IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Recipes') {
          iconName = `event-note`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),



    
    initialRouteName: 'Recipes',
    activeColor: 'green',
    inactiveColor: 'gray',
    barStyle: { backgroundColor: 'white' },
    labeled: false
  }
  );

export default createAppContainer(TabNavigator);