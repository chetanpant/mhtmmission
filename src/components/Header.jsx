import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const { pathname } = useLocation();
  return (
    <div style={{
      display: 'flex',
      padding: 20,
      borderBottom: '1px solid #ddd',
      justifyContent: 'center',
      gap: 30,
      backgroundColor: '#fff',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <Link
        to="/"
        style={{
          color: pathname === '/' ? 'crimson' : '#333',
          fontWeight: pathname === '/' ? 600 : 400,
          fontSize: '20px',         // ← added
          textDecoration: 'none'
        }}
      >
        Home
      </Link>
      <Link
        to="/dash"
        style={{
          color: pathname === '/dash' ? 'crimson' : '#333',
          fontWeight: pathname === '/dash' ? 600 : 400,
          fontSize: '20px',         // ← added
          textDecoration: 'none'
        }}
      >
        Health Portals
      </Link>
    </div>
  );
}
