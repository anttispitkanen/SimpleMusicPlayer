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



/*const BigPlayer = ({ mountedTrack, play }) => (
    <View  style={styles.container}>
        <Button
            title={'Play ' + mountedTrack}
            onPress={() => play(mountedTrack)}
        />
    </View>
) */


export class BigPlayer extends Component {

    track = null;

    componentDidMount() {
        console.log(this.props);
        

        this.track = new Sound(this.props.playingTrack.sourceFile, Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                alert('mönkään meni');
            }
        })

       

        
    }

    play() {
        this.track.play();
    }

    componentWillUnmount() {
        this.track.stop();
        this.track.release();
    }

    render() {

        const { playingTrack, play } = this.props;

        return (
            <View  style={styles.container}>
                <Image 
                    source={{ uri: playingTrack.imgSrc}}
                    style={styles.img}
                />

                <Button
                    title={'Play ' + playingTrack.name}
                    onPress={() => {
                        {/*play({mountedTrack, track: this.track});*/}
                        this.play();
                    }}
                />

                {/*<Button
                    title="testplay"
                    onPress={() => this.track.play()}
                />*/}
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
    // mountedTrack: state.mountSong,
    playingTrack: state.player
})

const mapDispatchToProps = dispatch => ({
    play: (newSong) => {
        dispatch({ type: 'SET_NOW_PLAYING', nowPlaying: newSong });

    }
})


export default connect(mapStateToProps, mapDispatchToProps)(BigPlayer);