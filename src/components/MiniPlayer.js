import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const MiniPlayer = ({ nowPlaying, mountedTrack, stop, pause, play, player, mount }) => (
    console.log(player),

    <View style={styles.container}>

        <Text>
            {!nowPlaying ? 'Select a track to play' : 'Now playing ' + nowPlaying.name}
        </Text>

        <Button 
            title="mount"
            onPress={mount}
        />

        <Button 
            title="play"
            onPress={() => play(mountedTrack)}
            
        />

        {/*disabled={!mountedTrack}*/}

        <Button
            title="pause"
            onPress={pause}
        />

        <Button 
            title="stop"
            onPress={stop}
        />
    </View>
)


const styles = StyleSheet.create({
    container: {
        marginTop: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'grey',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    }
})


MiniPlayer.propTypes = {
    stop: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    // nowPlaying: state.nowPlaying,
    // mountedTrack: state.mountSong,
    player: state.player
})

const mapDispatchToProps = dispatch => ({
    stop: () => dispatch({ type: 'STOP' }),
    pause: () => dispatch({ type: 'PAUSE' }),
    play: (track) => {
        // dispatch({ type: 'SET_NOW_PLAYING', nowPlaying: track });
        dispatch({ type: 'SET_PLAYING_TRACK', newPlayingTrack: {
            track: 'jee',
            name: 'jeppis',
            sourceFile: 'joujou',
            imgSrc: 'asdasda'
        } })
    },

    mount: () => dispatch({ type: 'SET_PLAYING_TRACK', newPlayingTrack: {
        track: 'jee',
        name: 'Catventure',
        sourceFile: 'catventure.mp3',
        imgSrc: 'https://i1.sndcdn.com/artworks-000161478011-rixhcu-t500x500.jpg'
    }})
})

export default connect(mapStateToProps, mapDispatchToProps)(MiniPlayer);