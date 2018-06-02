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

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/about" component={About} />
        <Route path="/education" component={Education} />
        <Route path="/skills" component={Skills} />
        <Route path="/github" component={Github} />
        <Route path="/experience" component={Experience} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/" component={Home} />
        <Nav className="nav"/>
      </div>
    )};
  }

export default App;
