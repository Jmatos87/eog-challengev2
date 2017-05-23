import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
import rngApp from './reducers'
import { valueChanger } from './actions'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App.js';

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

let store = createStore(rngApp);

// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

// Dispatch some actions

// setInterval(store.dispatch(valueChanger()),1000);

setInterval(() => {
  store.dispatch(valueChanger())
}, 1000)

const mapStateToProps = (state, ownProps) => {
  return state
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onClick: () => {
//       dispatch(setVisibilityFilter(ownProps.filter))
//     }
//   }
// };

const ConnectedApp = connect(mapStateToProps, null)(App);
 
ReactDOM.render(<Provider store={store}>
	<MuiThemeProvider>
    	<ConnectedApp />
    </MuiThemeProvider>
  </Provider>, document.getElementById('root'));