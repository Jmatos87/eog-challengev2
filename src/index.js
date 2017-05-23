import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import rngApp from './reducers';
import { valueChanger } from './actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App.js';

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

let store = createStore(rngApp);


// Dispatch some number generator

setInterval(() => {
  store.dispatch(valueChanger())
}, 1000);

const mapStateToProps = (state, ownProps) => {
  return state
};

//Connect App to Redux and provide App with Mui theme wrapper


const ConnectedApp = connect(mapStateToProps, null)(App);
 
ReactDOM.render(<Provider store={store}>
	<MuiThemeProvider>
    	<ConnectedApp />
    </MuiThemeProvider>
  </Provider>, document.getElementById('root'));