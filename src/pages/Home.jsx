import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#F5F5F7',
      textAlign: 'center',
      padding: '0 20px',
      boxSizing: 'border-box',
      position: 'relative'
    }}>
      {/* Logos */}
      <div style={{ display: 'flex', gap: 40, marginBottom: 60 }}>
        <img src="/GoM.png" alt="GoM Logo" style={{ height: 100 }} />
        <img src="/PHD.png" alt="PHD Logo" style={{ height: 100 }} />
      </div>

      {/* Main Heading */}
      <h1 style={{
        fontSize: 64,
        fontWeight: 700,
        color: '#1D1D1F',
        margin: 0
      }}>
        Coming Soon
      </h1>

      {/* Scrolling Subtitle */}
      <marquee
        style={{
          fontSize: 32,
          color: '#6E6E73',
          marginTop: 16,
          marginBottom: 40,
          whiteSpace: 'nowrap'
        }}
        scrollamount="10"
      >
        Maharashtra Health Technology Mission
      </marquee>

      {/* CTA Button */}
      <Link to="/dash">
        <button
          style={{
            padding: '16px 40px',
            fontSize: 20,
            background: 'rgba(183,28,28,0.9)',
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            backdropFilter: 'blur(6px)',
            boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
            cursor: 'pointer',
            transition: 'transform 0.2s ease'
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          Explore health portals →
        </button>
      </Link>

      {/* Footer Note */}
      <div style={{
        position: 'absolute',
        bottom: 20,
        fontSize: 22,
        color: '#999'
      }}>
        Public Health Department, Maharashtra
      </div>
    </div>
  );
}
