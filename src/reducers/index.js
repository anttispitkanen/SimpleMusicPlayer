import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators/AppNavigator';

import { tracks } from '../tracks';


function nav(state = null, action) {
    let nextState;
    switch (action.type) {
       
        case 'BigPlayer':
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'BigPlayer '}),
                state
            )
            break;

        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}


// playstate constants
const STOPPED = 'STOPPED';
const PAUSED = 'PAUSED';
const PLAYING = 'PLAYING';

const initPlayingTrack = {
    track: null, // the Sound object
    name: null,
    sourceFile: null,
    imgSrc: null,
    playstate: null
}

export const player = (state = initPlayingTrack, action) => {
    
    switch (action.type) {

        case 'SET_PLAYING_TRACK':
            return {...action.newPlayingTrack, playstate: 'STOPPED'};

        case 'GET_PLAYING_TRACK':
            return state;


        case 'PLAY':
            if (state.track) {
                return {...state, playstate: PLAYING};
            }
            return state;

        case 'PAUSE':
            if (state.track) {
                return {...state, playstate: PAUSED};
            }
            return state;

        case 'STOP':
            if (state.track) {
                return {...state, playstate: STOPPED};
            }
            return state;

        default:
            return state;
    }
}

export const previewTrack = (state = initPlayingTrack, action) => {
    switch (action.type) {

        case 'PREVIEW_TRACK':
            return {...state, ...action.previewTrack}

        default:
            return state;
    }
}


const allTracks = (state = tracks, action) => {
    return state;
}


const AppReducer = combineReducers({
    nav,
    player,
    allTracks,
    previewTrack
});

export default AppReducer;