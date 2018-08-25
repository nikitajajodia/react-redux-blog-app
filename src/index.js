import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter,
  Route,
  browserHistory,
  Switch
} from 'react-router-dom';

import { HomePage, AddPost } from './screens';

import {
  Provider
} from 'react-redux';

import './style/style.css';

import configureStore from './store';
const store = configureStore();

class App extends React.Component {
  render() {
    return (
    	<Provider store={store}>
    		<BrowserRouter history={browserHistory}>
            <Switch>
              <Route exact path="/" component={HomePage} />
            	<Route path="/posts/new" component={AddPost} />
            </Switch>
            </BrowserRouter>
    	</Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
