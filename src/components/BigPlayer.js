import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';



const BigPlayer = () => (
    <View  style={styles.container}>
        <Text>
            Tämä on se iso soitin
        </Text>
    </View>
) 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default BigPlayer;