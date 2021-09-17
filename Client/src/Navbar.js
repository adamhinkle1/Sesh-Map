import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { LoggedInOptions, LoggedOutOptions } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import {useStateValue} from './Context/StateProvider'

function Navbar(props) {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = (() => {
    setSidebar(!sidebar);
  })
  const [{user}, dispatch] = useStateValue()

  var sidebarData = LoggedOutOptions
  if (user) {
    sidebarData = LoggedInOptions
  }

  return (
    <div className="nav_container">
      <IconContext.Provider className="closed-menu" value={{ color: `${props.color}` }}>
        <div className='home-navbar'>
          <Link to='#' className={sidebar ? 'menu-bars active' : 'menu-bars'}>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
      </IconContext.Provider>
      <IconContext.Provider className="open-menu" value={{color:'white'}}>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <div className='nav-menu-items' onClick={showSidebar}>
            <div className='navbar-toggle'>
              <Link to='#' className={sidebar ? 'menu-x active' : 'menu-x'}>
                <AiIcons.AiOutlineClose />
              </Link>
            </div>
            {sidebarData.map((item, index) => {
              return (
                <div key={index} className="nav-text">
                  <Link className="nav-text_icon" to={item.path}>
                    {item.icon}
                    &nbsp;
                    <p className="nav-text_text">{item.title}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
