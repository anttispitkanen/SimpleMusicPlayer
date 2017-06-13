import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';



const BigPlayer = ({ mountedTrack, play }) => (
    <View  style={styles.container}>
        <Button
            title={'Play ' + mountedTrack}
            onPress={() => play(mountedTrack)}
        />
    </View>
) 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


const mapStateToProps = state => ({
    mountedTrack: state.mountSong
})

const mapDispatchToProps = dispatch => ({
    play: (newSong) => dispatch({ type: 'SET_NOW_PLAYING', nowPlaying: newSong }),
})


export default connect(mapStateToProps, mapDispatchToProps)(BigPlayer);