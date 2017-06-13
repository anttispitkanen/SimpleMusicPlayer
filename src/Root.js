import React, { Component } from 'react';
import {
    View, Text
} from 'react-native';
import { 
    addNavigationHelpers,
    StackNavigator
} from 'react-navigation';
import { 
    connect,
    Provider 
} from 'react-redux';


import AppWithNavigationState from './navigators/AppNavigator';

// IMPORT STORE
import store from './reducers';


// const mapStateToProps = (state) => ({
//     nav: state.nav
// })


/*
export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        )
    }
}
*/


export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        )
    }
}

{/*<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>jee</Text>
            </View>*/}