import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import Slider from 'react-native-slider';


export const MiniPlayerProgress = () => (
    <View style={styles.container}>
        {/*<Text style={{color: 'grey'}}>Tähän se slider :D</Text>*/}
        <Slider 
            value={0.5}
            style={styles.slider} 
            minimumTrackTintColor="#E2C627"
            thumbTintColor="grey"
            thumbStyle={styles.thumb}
            trackStyle={styles.track}
        />

    </View>
)


const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'lightblue',
        // alignItems: 'stretch'
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
        // display: 'none'
    },
    track: {
        height: 1,
        padding: 0,
        margin: 0
    }
})

export default MiniPlayerProgress;