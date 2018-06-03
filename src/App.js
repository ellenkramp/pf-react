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
        <Route exact path="pf-react/about" component={About} />
        <Route path="pf-react/education" component={Education} />
        <Route path="pf-react/skills" component={Skills} />
        <Route path="pf-react/github" component={Github} />
        <Route path="pf-react/experience" component={Experience} />
        <Route path="pf-react/contact" component={Contact} />
        <Route exact path="/" component={Home} />
        <Nav className="nav"/>
      </div>
    )};
  }

export default App;
