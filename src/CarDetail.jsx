import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { cars } from './CarList.jsx';
import Header from './Header.jsx';

export default function CarDetail() {
  const { id } = useParams();
  const car = cars.find(c => c.id.toString() === id);

  if (!car) {
    return (
      <div className="container mx-auto p-4">
        <Header />
        <h2 className="text-2xl font-bold mb-4">Auto no encontrado</h2>
        <Link to="/" className="text-blue-500 hover:underline">Volver</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <Header />
      <h2 className="text-2xl font-bold mb-4">Detalle de {car.marca}</h2>
      <div className="bg-white shadow rounded p-4">
        <p className="mb-2"><span className="font-semibold">Marca:</span> {car.marca}</p>
        <p className="mb-4"><span className="font-semibold">Precio:</span> ${car.precio}</p>
        <Link to="/" className="text-blue-500 hover:underline">Volver</Link>
      </div>
    </div>
  );
}
