import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center p-4">
        <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
        <Link to="/" className="text-xl font-bold">Autos</Link>
      </div>
    </header>
  );
}
