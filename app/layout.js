'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({ children }) {
  return (
    <html>

      <body>{children}</body>

    </html>
  );
}
