import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {

  return (
    <header>
         <h1>
         <Link to='/' >Mohamed Abdullahi</Link>
        </h1>
        <nav className='Nav'>
            <ul>
               <Link to='/' className='link' >About Me</Link>
               <Link to='/' className='link' >Projects</Link>
               <Link to='/' className='link' >Contact-Info</Link>
            </ul>
        </nav>
    </header>
  );
}

export default Nav;