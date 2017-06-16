import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import Slider from 'react-native-slider';


export const MiniPlayerProgress = ({ player }) => {

    // just some value to avoid problems with no track being mounted yet
    const dur = player.track ? player.track.getDuration() : 1;

    let cur = 0;
    if (player.track) {
        setInterval(() => {
            player.track.getCurrentTime(time => {
                cur = time / dur;
                console.log('nyt mennyt: ' + cur);
            }) 
        }, 1000);
    }

    let i = 0.5;
    setInterval(() => {
        i = Math.random();
        // console.log('nyt i on ' + i)
    }, 1000);
    
    // const getValue = () => {
    //     if 
    // }

    return (
        
        <View style={styles.container}>
            {/*<Text style={{color: 'grey'}}>Tähän se slider :D</Text>*/}
            {/*value={cur ? cur : 0}*/}

            {/*setInterval(() => {
                        console.log('jee');
                        
                        return
                    }, 500)*/}
            <Slider 
                value={
                    0.3
                }
                style={styles.slider} 
                minimumTrackTintColor="#E2C627"
                thumbTintColor="grey"
                thumbStyle={styles.thumb}
                trackStyle={styles.track}
                onValueChange={(value) => {
                    if (player.track) {
                        player.track.setCurrentTime(value * dur);
                    }
                }}
            />

        </View>
    )
}


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