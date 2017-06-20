import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TouchableHighlight,
    Image,
    Platform
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';

import Video from 'react-native-video';

import MusicControl from 'react-native-music-control';

import MiniPlayerStatus from './MiniPlayerStatus';
import MiniPlayerButtons from './MiniPlayerButtons';
import MiniPlayerProgress from './MiniPlayerProgress';



const poetkoeImgSrc = 'https://i1.sndcdn.com/avatars-000284687259-vg7rsa-t200x200.jpg';

// MusicControl.setNowPlaying({
//     title: player.name,
//     artist: 'Poetkoe',
//     duration: player.duration,
//     artwork: (player.imgSrc !== null) ? player.imgSrc : '' 
// })

const MiniPlayerContainer = ({ pause, play, player, currentTime, updateCurrentTime, updateDuration, initiateMusicControl }) => {

    
    const os = Platform.OS;

    
    const renderVideo = () => {
        if (player.sourceFile) {

            return (
                <Video 
                    
                    source={
                        (os === 'ios') ? 
                        { uri: player.sourceFile + '.mp3' }:    // ios wants the file extensions
                        { uri: player.sourceFile }              // android does not
                    }
                    ref={ref => this.audio = ref}
                    volume={1}
                    
                    paused={player.playstate !== 'PLAYING'}
                    onLoad={(params) => {
                        updateDuration(params.duration)
                    }}
                    onEnd={() => {}}
                    repeat={false}
                    playInBackground={true}
                    onProgress={(params) => updateCurrentTime(params.currentTime)}
                />
            )
        }
    }



    if (player.name && player.duration > 1 && !player.musicControlInitiated) {
        
        // MusicControl.enableBackgroundMode(true);
        
        MusicControl.setNowPlaying({
            title: player.name,
            artist: 'Poetkoe',
            duration: player.duration,
            artwork: (player.imgSrc !== null) ? player.imgSrc : '' 
        })
        
        initiateMusicControl();
        
        MusicControl.updatePlayback({
            state: MusicControl.STATE_PLAYING,
            elapsedTime: 0
        })

    }

    
    MusicControl.enableControl('play', true);
    MusicControl.enableControl('pause', true);
    MusicControl.enableControl('seek', true);
    MusicControl.enableControl('previousTrack', true);
    MusicControl.enableControl('nextTrack', true);

    MusicControl.on('play', () => {
        play();
        MusicControl.updatePlayback({
            state: MusicControl.STATE_PLAYING,
            elapsedTime: Math.floor(currentTime)
        })
    });
    MusicControl.on('pause', () => {
        pause();
        MusicControl.updatePlayback({
            state: MusicControl.STATE_PAUSED,
            elapsedTime: Math.floor(currentTime)
        })
    });


    return (
        <View style={styles.container}>

            <Image 
                style={styles.img}
                source={player.imgSrc ? { uri: player.imgSrc } : { uri: poetkoeImgSrc }}
            />

            <View style={styles.info}>

                <MiniPlayerStatus 
                    player={player}
                />

                <MiniPlayerButtons 
                    pause={pause}
                    play={play}
                    player={player}
                />

                <MiniPlayerProgress 
                    player={player}
                    currentTime={currentTime}
                    updateCurrentTime={(newTime) => {
                        updateCurrentTime(newTime);
                        if (this.audio) {
                            this.audio.seek(newTime);
                        }
                    }}
                />

            </View>

            {renderVideo()}            
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 1,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopColor: '#b3b3b3',
        borderTopWidth: 1
    },
    img: {
        height: 120,
        width: 120
    },
    info: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
})


MiniPlayerContainer.propTypes = {

}

const mapStateToProps = state => ({
    player: state.player,
    currentTime: state.currentTime
})

const mapDispatchToProps = dispatch => ({
    play: () => dispatch({ type: 'PLAY' }),
    pause: () => dispatch({ type: 'PAUSE' }),
    updateCurrentTime: (newTime) => dispatch({ type: 'UPDATE_TIME', newTime: newTime }),
    updateDuration: (duration) => dispatch({ type: 'UPDATE_DURATION', duration: duration }),
    initiateMusicControl: () => dispatch({ type: 'INITIATE_MUSIC_CONTROL' })
})

export default connect(mapStateToProps, mapDispatchToProps)(MiniPlayerContainer);