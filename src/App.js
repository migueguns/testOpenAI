import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CarList from './CarList';
import CarDetail from './CarDetail';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CarList />} />
      <Route path="/auto/:id" element={<CarDetail />} />
    </Routes>
  );
}
