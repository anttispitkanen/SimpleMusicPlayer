import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Button
} from 'react-native';
import { NavigationActions } from 'react-navigation';

const TestButton = (props) => (
    <Button
        title="testbutton"
        onPress={() => alert('pressss')}
    />
)

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    
})

export default connect()(TestButton);