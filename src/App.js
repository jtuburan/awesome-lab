import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import NavbarHeader from './header/nav-bar';
import Home from './home/home';
import Products from './prod-list/products';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <NavbarHeader> </NavbarHeader>
            <Switch>
              <Route path= '/' component = { Home } exact ></Route>
              <Route path= '/products' component = { Products }></Route>
            </Switch>
          </div>
      </BrowserRouter>

    );
  }
}

export default App;
