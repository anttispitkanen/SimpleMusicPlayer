import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

const poetkoeImgSrc = 'https://i1.sndcdn.com/avatars-000284687259-vg7rsa-t200x200.jpg';

export const MiniPlayerStatus = ({ player }) => (
    <View style={styles.container}>

        {/*<Image 
            style={styles.img}
            source={player.imgSrc ? { uri: player.imgSrc} : {uri: poetkoeImgSrc}}
        />*/}

        <Text style={styles.trackName}>
            {player.name ? player.name : 'Select a track to play'}
        </Text>
        
    </View>
)

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'pink',
        flexDirection: 'row',
        alignItems: 'center'
    },
    img: {
        height: 50,
        width: 50
    },
    trackName: {
        margin: 5,
        color: 'grey'
    }
})


export default connect()(MiniPlayerStatus);