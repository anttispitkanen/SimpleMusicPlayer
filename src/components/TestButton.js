import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Button, View
} from 'react-native';
import { NavigationActions } from 'react-navigation';

const TestButton = ({ message, alert, loginScreen, changeTitle, goToBigPlayer }) => (
    <View>
        {/*<Button
            title={message}
            onPress={() => changeTitle('pöllöjee')}
        />*/}
        
        <Button 
            title="go somewhere else"
            onPress={goToBigPlayer}
        />

    </View>
)

const mapStateToProps = state => ({
    message: state.test
})

const mapDispatchToProps = dispatch => ({
    // alert: () => alert('tää ois se dispätsi :D'),
    // loginScreen: () => dispatch(NavigationActions.navigate({ routeName: 'Login' })),
    goToBigPlayer: () => dispatch(NavigationActions.navigate({ routeName: 'BigPlayer' })),
    changeTitle: (m) => dispatch({ type: 'changeMessage', message: m })
})

export default connect(mapStateToProps, mapDispatchToProps)(TestButton);