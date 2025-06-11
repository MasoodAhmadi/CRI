// app/page.js
import React from 'react';
import Navbar from './components/navbars';

export default function Home() {
    return (
        <div>
            <Navbar />
            <h1>Welcome to the Homepage!</h1>
            <h1>Welcome, User!</h1>
            <a href="/logout">Logout</a>
        </div>
    );
}