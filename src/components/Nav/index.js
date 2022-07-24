import React from 'react';

function Nav(props) {
    const { currentPage, setCurrentPage} = props;

  return (
    
        <nav className='Nav'>
            <ul>
               <li className={currentPage === 'about' ? 'navActive': 'link'} >
               <span onClick={() => setCurrentPage('about')}>About Me</span>
               </li>
               <li className={currentPage === 'projects' ? 'navActive': 'link'} >
               <span onClick={() => setCurrentPage('projects')}>Projects</span>
               </li>
               <li className={currentPage === 'contact' ? 'navActive': 'link'} >
               <span onClick={() => setCurrentPage('contact')}>Contact-Info</span>
               </li>
            </ul>
        </nav>
    
  );
}

export default Nav;