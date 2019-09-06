import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Default from './components/Default'
import Menu from './components/Menu'
import Contact from './components/Contact'
import About from './components/About'


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Switch>
          {/* path="/restaurant-phoenix/" */}
          <Route exact path="/" component={Home}></Route>
          <Route path="/menu" component={Menu}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/about" component={About}></Route>
          <Route component={Default}></Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
