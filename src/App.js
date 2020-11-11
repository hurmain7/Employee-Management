import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './Components/LoginForm';
import Router from './Router';

class App extends Component {
  componentDidMount() {
    const firebaseConfig = {
    apiKey: 'AIzaSyBhYm-BtvrBErqUnFr0-ARPiLkPnlWp1yk',
    authDomain: 'manager-e1471.firebaseapp.com',
    databaseURL: 'https://manager-e1471.firebaseio.com',
    projectId: 'manager-e1471',
    storageBucket: '',
    messagingSenderId: '513249060030',
    appId: '1:513249060030:web:f4486de7e9c05888'
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
