import React from 'react';
import {
    View,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export const MiniPlayerButtons = ({ stop, pause, play, player }) => (
    <View style={styles.container}>
        
        <TouchableHighlight
            underlayColor="rgba(0,0,0,0)"
            onPress={() => {
                if (player.track) {
                    player.track.stop();
                    stop();
                }
            }}
            style={styles.button}
        >
            
            <Icon name="stop" size={20} color='grey' />

        </TouchableHighlight>

        <TouchableHighlight
            underlayColor="rgba(0,0,0,0)"
            onPress={() => {
                if (player.track) {
                    player.track.play();
                    play();
                }
            }}
            style={styles.button}
        >
            
            <Icon name="play" size={35} color='grey' />

        </TouchableHighlight>



        <TouchableHighlight
            underlayColor="rgba(0,0,0,0)"
            onPress={() => {
                if (player.track) {
                    player.track.pause();
                    pause();
                }
            }}
            style={styles.button}
        >
            
            <Icon name="pause" size={20} color='grey' />

        </TouchableHighlight>        

    </View>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'white'

    },
    button: {
        marginLeft: 20,
        marginRight: 20,
    }
})


export default MiniPlayerButtons;