import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from './Pages/Main';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
        </Switch>
      </BrowserRouter>
    );
  }
}
  

export default App;
