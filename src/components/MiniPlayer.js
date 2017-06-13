import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const MiniPlayer = ({ nowPlaying, stop }) => (
    <View style={styles.container}>
        <Text>Now Playing {nowPlaying}</Text>
        <Button 
            title="stop"
            onPress={stop}
        />
    </View>
)


const styles = StyleSheet.create({
    container: {
        margin: 1,
        backgroundColor: 'pink',
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
    nowPlaying: state.nowPlaying
})

const mapDispatchToProps = dispatch => ({
    stop: () => dispatch({ type: 'STOP' })
})

export default connect(mapStateToProps, mapDispatchToProps)(MiniPlayer);