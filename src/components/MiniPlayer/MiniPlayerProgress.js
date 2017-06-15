import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import Slider from 'react-native-slider';


export const MiniPlayerProgress = () => (
    <View style={styles.container}>
        <Text style={{color: 'grey'}}>Tähän se slider :D</Text>

    </View>
)


const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'lightblue'
    }
})

export default MiniPlayerProgress;