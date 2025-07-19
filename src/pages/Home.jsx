import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{
      fontFamily: 'Poppins, sans-serif',
      backgroundColor: '#f8f9fa',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* PHD Logo on top-right */}
      <div style={{
        position: 'absolute',
        top: 20,
        right: 20
      }}>
        <img src="/PHD.png" alt="PHD Logo" style={{ height: '100px' }} />
      </div>

      {/* Hero Section */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '72px',
          fontWeight: '700',
          marginBottom: '20px',
          color: '#1c1c1c',
          animation: 'fadeIn 2s ease-out'
        }}>
          Coming Soon
        </h1>
        <p style={{
          fontSize: '42px',
          fontWeight: '500',
          maxWidth: '800px',
          color: '#444',
          animation: 'fadeIn 3s ease-out'
        }}>
          Maharashtra Health Technology Mission
        </p>

        <Link to="/dash" style={{
          marginTop: '40px',
          padding: '14px 28px',
          backgroundColor: '#B71C1C',
          color: '#fff',
          fontSize: '20px',
          borderRadius: '30px',
          textDecoration: 'none',
          fontWeight: '600',
          transition: 'background-color 0.3s ease'
        }}>
          Explore Health Portals
        </Link>
      </div>

      {/* Footer */}
      <div style={{
        textAlign: 'center',
        padding: '20px',
        fontSize: '20px',
        color: '#666'
      }}>
        Public Health Department, Maharashtra
      </div>
    </div>
  );
}
