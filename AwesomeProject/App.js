import React from 'react';
import {StatusBar} from 'react-native'
import Navigation from './app/navigation/Navigation'
import { Provider } from 'react-redux'
import store from './app/redux/store'

function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#22B56E" barStyle="light-content"  />
      <Navigation />
    </Provider>
  );
}
export default App