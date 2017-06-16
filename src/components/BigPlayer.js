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

import Sound from 'react-native-sound';


export class BigPlayer extends Component {

    track = null;

    componentDidMount() {
        
        this.track = new Sound(this.props.previewTrack.sourceFile, Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                alert('mönkään meni');
            }
        })
        
    }

    async play() {
        await this.props.play({
            ...this.props.previewTrack,
            track: this.track
        })

        this.props.player.track.play();
        
    }

    render() {

        const { player, previewTrack, play } = this.props;

        return (
            <View  style={styles.container}>
                <Image 
                    source={{ uri: previewTrack.imgSrc}}
                    style={styles.img}
                />

                <Button
                    title={'Play ' + previewTrack.name}
                    onPress={() => {
                        if (player.track && player.name !== previewTrack.name) { 
                            // release previous playing track
                            player.track.release() 
                        };
                        this.play();

                    }}
                />

            </View>
        )
    }
}


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