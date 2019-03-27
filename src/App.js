import React from 'react';
import Header from './common/header';
import { Provider } from "react-redux";
import store from './store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
      </Provider>
    );
  }
}
