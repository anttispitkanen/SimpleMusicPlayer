import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';


const MiniPlayer = ({ stop, pause, play, player }) => (

    <View style={styles.container}>

        <Text>
            {!player.name ? 'Select a track to play' : 'Now playing ' + player.name}
        </Text>

        <TouchableHighlight
            underlayColor="rgba(0,0,0,0)"
            onPress={() => {
                if (player.track) {
                    player.track.play();
                    play();
                }
            }}
        >
            <Icon name="play" size={20} />
        </TouchableHighlight>

        {/*disabled={!mountedTrack}*/}

        <TouchableHighlight
            underlayColor="rgba(0,0,0,0)"
            onPress={() => {
                if (player.track) {
                    player.track.pause();
                    pause();
                }
            }}
        >
            <Icon name="pause" size={20} />
        </TouchableHighlight>

        <TouchableHighlight
            underlayColor="rgba(0,0,0,0)"
            onPress={() => {
                if (player.track) {
                    player.track.stop();
                    stop();
                }
            }}
        >
            <Icon name="stop" size={20} />
        </TouchableHighlight>

        {/*<Button 
            title="stop"
            onPress={() => {
                if (player.track) {
                    player.track.stop();
                    stop();
                }
            }}
        />*/}
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
    player: state.player
})

const mapDispatchToProps = dispatch => ({
    play: () => dispatch({ type: 'PLAY' }),
    stop: () => dispatch({ type: 'STOP' }),
    pause: () => dispatch({ type: 'PAUSE' }),
})

export default connect(mapStateToProps, mapDispatchToProps)(MiniPlayer);