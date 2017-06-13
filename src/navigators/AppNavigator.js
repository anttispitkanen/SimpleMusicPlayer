import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import MainListView from '../components/MainListView';
import LoginScreen from '../components/LoginScreen';
import MainScreen from '../components/MainScreen';
import BigPlayer from '../components/BigPlayer';
// import ProfileScreen from '../components/ProfileScreen';

export const AppNavigator = StackNavigator({
  MainListView: { screen: MainListView },
  Main: { screen: MainScreen },
  BigPlayer: { screen: BigPlayer },
  Login: { screen: LoginScreen },
  
  // Profile: { screen: ProfileScreen },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);