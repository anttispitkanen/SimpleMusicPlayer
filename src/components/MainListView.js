import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { connect } from 'react-redux';


// import TestButton from './TestButton';

import ListSingleTrack from './ListSingleTrack';
import MiniPlayer from './MiniPlayer';
import PlayingTest from './PlayingTest';


const MainListView = ({ tracks, nowPlaying }) => (
    <View style={styles.container}>
        <Text style={styles.heading}>Poetkoe player</Text>
        
        {tracks.map((track, i) => {
            
            return (
                <ListSingleTrack 
                    {...track}
                    key={track.name} 
                />
            )
        })}

        <MiniPlayer />

    </View>
);

MainListView.navigationOptions = {
    header: false
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    heading: {
        fontSize: 20,
        marginBottom: 20,
        marginTop: 30,
        textAlign: 'center'
    }
});


const mapStateToProps = state => ({
    tracks: state.allTracks,
    nowPlaying: state.nowPlaying
})


export default connect(mapStateToProps)(MainListView);
