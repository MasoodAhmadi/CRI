'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ScrollToTop from './components/scroll';

export default function RootLayout({ children }) {
  return (
    <html>

      <body>{children}</body>

    </html>
  );
}
