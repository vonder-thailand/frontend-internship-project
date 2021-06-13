import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from './Menu'
import { MenuOutlined , CloseOutlined}  from '@ant-design/icons';
import './Navbar.css';

const Burger = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
 <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <MenuOutlined  onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
              <CloseOutlined />
              </Link>
            </li>
            {Menu.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
    </div>
  )
}

export default Burger;