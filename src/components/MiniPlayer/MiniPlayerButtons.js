import React from 'react';
import {
    View,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export const MiniPlayerButtons = ({ pause, play, player }) => (
    <View style={styles.container}>

        {/* BACK BUTTON */}
        <TouchableHighlight
            underlayColor="rgba(0,0,0,0)"
            onPress={() => {
                {/*player.playstate === 'PLAYING' ? pause() : play();*/}
            }}
            style={styles.button}
        >
            
            <Icon name="step-backward" size={20} color='grey' />
            
        </TouchableHighlight>     
        

        {/* PLAY/PAUSE BUTTON*/}
        <TouchableHighlight
            underlayColor="rgba(0,0,0,0)"
            onPress={() => {
                player.playstate === 'PLAYING' ? pause() : play();
            }}
            style={styles.button}
        >
            
            {player.playstate === 'PLAYING' ?
                <Icon name="pause" size={35} color='grey' /> :
                <Icon name="play" size={35} color='grey' />
            }
            
        </TouchableHighlight>     


        {/* FORWARD BUTTON */}
        <TouchableHighlight
            underlayColor="rgba(0,0,0,0)"
            onPress={() => {
                {/*player.playstate === 'PLAYING' ? pause() : play();*/}
            }}
            style={styles.button}
        >
            
            <Icon name="step-forward" size={20} color='grey' />
            
        </TouchableHighlight>     

    </View>
)


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginLeft: 20,
        marginRight: 20,
    }
})


export default MiniPlayerButtons;