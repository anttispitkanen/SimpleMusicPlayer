import React from 'react';
import {
    TouchableHighlight,
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const ListSingleTrack = ({ name, imgSrc, play }) => (
    <TouchableHighlight 
        onPress={() => { play(name) }}
        style={styles.container}>
        
        <View style={styles.trackInfo}>
            <Image source={{ uri: imgSrc }} style={styles.img} />
            <Text style={styles.trackName}>{name}</Text>
        </View>
    </TouchableHighlight>
)


const styles = StyleSheet.create({
    container: {
        margin: 1,
    },
    trackInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    trackName: {
        marginLeft: 20
    },

    img: {
        height: 50,
        width: 50
    }

})

ListSingleTrack.propTypes = {
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    play: PropTypes.func.isRequired
}


const mapDispatchToProps = (dispatch) => ({
    play: (newSong) => dispatch({ type: 'SET_NOW_PLAYING', nowPlaying: newSong })
})

export default connect(null, mapDispatchToProps)(ListSingleTrack);
