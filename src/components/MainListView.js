import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { connect } from 'react-redux';


// import TestButton from './TestButton';

import ListSingleTrack from './ListSingleTrack';
import MiniPlayer from './MiniPlayer';


const MainListView = ({ tracks, nowPlaying }) => (
    <View style={styles.container}>
        <Text style={styles.heading}>Main list view</Text>
        
        {tracks.map((track, i) => {
            
            return (
                <ListSingleTrack 
                    {...track}
                    key={i} 
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
        // justifyContent: 'flex-start',
        // alignItems: 'center',
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


{/*return <TestButton title key={i} />*/}
{/*return <Text key={i}>{track.name}</Text>*/}

{/*<Button
    key={i} 
    title={track.name}
    onPress={() => alert(track.name)}
/>*/}