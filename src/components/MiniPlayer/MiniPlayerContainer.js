import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TouchableHighlight,
    Image
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';

import MiniPlayerStatus from './MiniPlayerStatus';
import MiniPlayerButtons from './MiniPlayerButtons';
import MiniPlayerProgress from './MiniPlayerProgress';


const poetkoeImgSrc = 'https://i1.sndcdn.com/avatars-000284687259-vg7rsa-t200x200.jpg';


const MiniPlayerContainer = ({ stop, pause, play, player }) => (

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
                stop={stop}
                pause={pause}
                play={play}
                player={player}
            />

            <MiniPlayerProgress />

        </View>
        
    </View>
)


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

export default connect(mapStateToProps, mapDispatchToProps)(MiniPlayerContainer);