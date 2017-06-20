import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image
} from 'react-native';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Video from 'react-native-video';
import MusicControl from 'react-native-music-control';






export const BigPlayer = ({ player, previewTrack, play }) => (
    <View style={styles.container}>

        <Image
            source={{ uri: previewTrack.imgSrc }}
            style={styles.img}
        />

        <Button
            title={'Play ' + previewTrack.name}
            onPress={() => {
                if (previewTrack.name !== player.name) {
                    play(previewTrack);
                }
            }}
        />

    </View>
)



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        height: 300,
        width: 300
    }
})


const mapStateToProps = state => ({
    previewTrack: state.previewTrack,
    player: state.player
})

const mapDispatchToProps = dispatch => ({
    play: (newSong) => {
        dispatch({ type: 'SET_PLAYING_TRACK', newPlayingTrack: newSong })
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(BigPlayer);