/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppReducer from './src/reducers';
import AppWithNavigationState from './src/navigators/AppNavigator';

const store = createStore(AppReducer);

class ReduxExampleApp extends Component {

    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        )
    }
}


AppRegistry.registerComponent('SimpleMusicPlayer', () => ReduxExampleApp);

export default ReduxExampleApp;

console.disableYellowBox = true;