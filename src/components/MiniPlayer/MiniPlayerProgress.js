import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import Slider from 'react-native-slider';


export const MiniPlayerProgress = ({ player, currentTime, updateCurrentTime }) => {

    // just some value to avoid problems with no track being mounted yet
    // const dur = player.track ? player.track.getDuration() : 1;

    // let cur = 0;
    // if (player.track) {
    //     setInterval(() => {
    //         player.track.getCurrentTime(time => {
    //             cur = time / dur;
    //             console.log('nyt mennyt: ' + cur);
    //         }) 
    //     }, 1000);
    // }



    const duration = player.duration;

    return (
        
        <View style={styles.container}>
        
            <Slider 
                value={ currentTime / player.duration }
                style={styles.slider} 
                minimumTrackTintColor="#E2C627"
                thumbTintColor="grey"
                thumbStyle={styles.thumb}
                trackStyle={styles.track}
                onSlidingComplete={(value) => {
                    updateCurrentTime(value * duration)
                }}
            />

        </View>
    )
}


const styles = StyleSheet.create({
    container: {

    },
    slider: {
        width: 200,
        height: 10,
        margin: 0,
        padding: 0
    },
    thumb: {
        height: 5,
        width: 5,
        padding: 0,
        margin: 0
    },
    track: {
        height: 1,
        padding: 0,
        margin: 0
    }
})

export default MiniPlayerProgress;