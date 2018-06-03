import React from 'react';
import {Link} from 'react-router-dom';

export const Nav = () =>
(<div className="nav">
    <Link to="/"><button>Home</button></Link>
    <Link to="/pf-react/about"><button>About</button></Link>  
    <Link to="/pf-react/education"><button>Education</button></Link>
    <Link to="/pf-react/skills"><button>Skills</button></Link>
    <Link to="/pf-react/github"><button>Projects</button></Link>
    <Link to="/pf-react/experience"><button>Experience</button></Link>
    <Link to="/pf-react/contact"><button>Contact</button></Link>       
</div>)