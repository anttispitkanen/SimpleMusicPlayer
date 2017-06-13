import React, { Component } from 'react';
import {
    View,
    Button,
    StyleSheet
} from 'react-native';
import Sound from 'react-native-sound';

export default class PlayingTest extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount() {
        let track = new Sound('justfunkythings.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                alert('failed to load sound');
                return;
            }

            track.setVolume(1);

            this.setState({
                track: track
            })

        })
    }

    play() {
        const track = this.state.track;

        track.play(success => {
            if (success) {
                // played through
            } else {
                alert('playback failed due to audio decoding errors');
            }
        })
    }

    pause() {
        const track = this.state.track;

        track.pause();
    }


    render() {
        return (
            <View style={styles.container}>
                <Button 
                    onPress={() => this.play()}
                    title="play"
                />
                <Button 
                    onPress={() => this.pause()}
                    title="pause"
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // height: 100,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})