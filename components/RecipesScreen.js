import React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Category from './CategoryScreen';

class RecipesScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>List of Recipes</Text>
                <Button
                    title="Go to Category"
                    onPress={() => this.props.navigation.navigate('Category')}
                />
            </View>
        );
    }
}




const AppNavigator = createStackNavigator({
    Home: {
        screen: RecipesScreen,
    },
    Category: Category,
},
    {
        initialRouteName: 'Home',
    });

export default createAppContainer(AppNavigator);