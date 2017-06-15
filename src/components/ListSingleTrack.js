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
import { NavigationActions } from 'react-navigation';


const ListSingleTrack = ({ name, sourceFile, imgSrc, play, openPlayer }) => (
    <TouchableHighlight 
        onPress={() => openPlayer({name, sourceFile, imgSrc})}
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

}


const mapDispatchToProps = (dispatch) => ({

    openPlayer: (track) => {
        dispatch({ type: 'PREVIEW_TRACK', previewTrack: track });
        dispatch(NavigationActions.navigate({ routeName: 'BigPlayer' }));
    }
})

export default connect(null, mapDispatchToProps)(ListSingleTrack);
