import React, { useState, useEffect } from 'react';
import axios from '../axios-api';
import './Header.css';
import logo from '../images/logo.png';

const Header = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get('menuitems/');
        setMenuItems(response.data);
      } catch (error) {
        console.error('Ошибка при получении данных меню:', error);
      }
    };
    fetchMenuItems();
  }, []);

return (
    <header className="header">
        <a href="/" className="header-logo-link">
          <img src={logo} alt="Logo" className="header-logo" />
        </a>
        <nav className="header-nav">
        {menuItems.map(item => (
          <a key={item.id} href={item.link} className="nav-link">
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;