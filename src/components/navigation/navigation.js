import React from 'react';
import './navigation.css';

function Navbar() {
  const navItems = [
    { text: 'Home', href: '#' },
    { text: 'Services', href: '#services', dropdown: [
      { text: 'Web Development', href: '#web-development' },
      { text: 'App Development', href: '#app-development' },
      { text: 'SEO Services', href: '#seo-services' }
    ] },
    { text: 'Contact', href: '#contact' }
  ];

  return (
    <div className="navbar">
      {navItems.map((item, index) => (
        <div key={index} className="nav-item">
          <a href={item.href} className="nav-link">
            {item.text}
          </a>
          {item.dropdown && (
            <div className="dropdown">
              {item.dropdown.map((subItem, subIndex) => (
                <a key={subIndex} href={subItem.href} className="dropdown-link">
                  {subItem.text}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Navbar;
