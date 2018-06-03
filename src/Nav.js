import React from 'react';
import {Link} from 'react-router-dom';

export const Nav = () =>
(<div className="nav">
    <Link to="/"><button>Home</button></Link>
    <Link to="/about"><button>About</button></Link>  
    <Link to="/education"><button>Education</button></Link>
    <Link to="/skills"><button>Skills</button></Link>
    <Link to="/github"><button>Projects</button></Link>
    <Link to="/experience"><button>Experience</button></Link>
    <Link to="/contact"><button>Contact</button></Link>       
</div>)