// src/Sidebar.js
import React, { useState } from 'react';
import Sidebar from 'react-sidebar';
import './Sidebar.css';

function CustomSidebar({ onMenuItemClick }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const onSetSidebarOpen = (open) => {
    setSidebarOpen(open);
  };

  const menuItems = [
    { label: 'Shuttle', value: 'shuttle' },
    { label: 'Zippy', value: 'zippy' },
    { label: 'Tunnel', value: 'tunnel' },
  ];

  return (
    <Sidebar
      sidebar={
        <div className="sidebar-content">
          {menuItems.map((item) => (
            <div
              key={item.value}
              className="menu-item"
              onClick={() => {
                onMenuItemClick(item.value);
                onSetSidebarOpen(false);
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      }
      open={sidebarOpen}
      onSetOpen={onSetSidebarOpen}
      styles={{ sidebar: { background: 'white', width: '250px' } }}
    >
      {!sidebarOpen && (
        <button className="menu-button" onClick={() => onSetSidebarOpen(true)}>
          ☰
        </button>
      )}
    </Sidebar>
  );
}

export default CustomSidebar;
