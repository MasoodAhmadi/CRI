'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Providers from './providers';

export default function RootLayout({ children }) {
  return (
    <html>

      <body>

        <Providers>{children}</Providers>

      </body>

    </html>
  );
}
