import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

import { connect } from 'react-redux';

import ListSingleTrack from './ListSingleTrack';

import MiniPlayerContainer from './MiniPlayer/MiniPlayerContainer';

const MainListView = ({ tracks, nowPlaying }) => (
    <View style={styles.container}>

        <View style={styles.logoContainer}>
            <Image source={require('../../static/images/poetkoe-logo.png')} style={styles.mainLogo} />
        </View>


        {tracks.map((track) => {
            
            return (
                <ListSingleTrack 
                    {...track}
                    key={track.name} 
                />
            )
        })}

        <MiniPlayerContainer />

    </View>
);

MainListView.navigationOptions = {
    header: false
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    heading: {
        fontSize: 20,
        marginBottom: 20,
        marginTop: 30,
        textAlign: 'center'
    },
    logoContainer: {
        height: 100,
        backgroundColor: '#E2C627',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainLogo: {
        marginTop: 10,
        height: 60,
        resizeMode: 'contain'
    }
});


const mapStateToProps = state => ({
    tracks: state.allTracks,
    nowPlaying: state.nowPlaying
})


export default connect(mapStateToProps)(MainListView);
