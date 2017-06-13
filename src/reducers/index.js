import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators/AppNavigator';

import { tracks } from '../tracks';

// Start with two routes: The Main screen, with the Login screen on top.
// const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
// const tempNavState = AppNavigator.router.getStateForAction(firstAction);
// const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
// const initialNavState = AppNavigator.router.getStateForAction(
//   secondAction,
//   tempNavState
// );

// function nav(state = initialNavState, action) {
function nav(state = null, action) {
    let nextState;
    switch (action.type) {
    case 'Login':
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.back(),
                state
            );
            break;
        case 'Logout':
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Login' }),
                state
            );
            break;

        case 'BigPlayer':
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'BigPlayer '}),
                state
            )

        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

// const initialAuthState = { isLoggedIn: false };
// const initialAuthState = { isLoggedIn: true };

// function auth(state = initialAuthState, action) {
//   switch (action.type) {
//     case 'Login':
//       return { ...state, isLoggedIn: true };
//     case 'Logout':
//       return { ...state, isLoggedIn: false };
//     default:
//       return state;
//   }
// }


const test = (state = 0, action) => {
    // let message;
    switch (action.type) {
        case 'changeMessage':
            // return 'kukkuu';
            return action.message;
    
        default:
            return 'initialMessage';
    }
    // return (message && message.length > 0) ? message : "initialmessage";
}

// function test(state = null, message = "jeejee") {
//     return (message && message.length > 0) ? message : "initialmessage";
// }



const allTracks = (state = tracks, action) => {
    return state;
}


const nowPlaying = (state = null, action) => {
    switch (action.type) {
        case 'GET_NOW_PLAYING':
            return state;

        case 'SET_NOW_PLAYING':
            return action.nowPlaying;

        case 'STOP':
            return null;
    
        default:
            return state;
    }
}



const AppReducer = combineReducers({
    nav,
    // auth,
    test,
    allTracks,
    nowPlaying
});

export default AppReducer;