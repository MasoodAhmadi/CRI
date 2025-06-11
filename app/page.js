// app/page.js
'use client';

import React from 'react';
import Navbar from './components/navbars';

export default function Home() {
    return (
        <div>
            <Navbar />
            <h1>Welcome to the Homepage!</h1>
        </div>
    );
}