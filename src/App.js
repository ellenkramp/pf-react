import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import { Nav } from './Nav';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Github } from './components/Github';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
const a = process.env.PUBLIC_URL;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path={process.env.PUBLIC_URL + "/about"} component={About} />
        <Route path={process.env.PUBLIC_URL + "/education"} component={Education} />
        <Route path={process.env.PUBLIC_URL + "/skills"} component={Skills} />
        <Route path={process.env.PUBLIC_URL + "/github"} component={Github} />
        <Route path={process.env.PUBLIC_URL + "/experience"} component={Experience} />
        <Route path={process.env.PUBLIC_URL + "/contact"} component={Contact} />
        <Route exact path= {process.env.PUBLIC_URL + '/'} component={Home} />
        <Nav className="nav"/>
      </div>
    )};
  }

export default App;
