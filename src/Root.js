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




export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        )
    }
}

