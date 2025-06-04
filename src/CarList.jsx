import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';

export const cars = [
  { id: 1, marca: 'Toyota', precio: 10000 },
  { id: 2, marca: 'Honda', precio: 12000 },
  { id: 3, marca: 'Ford', precio: 15000 }
];

export default function CarList() {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <h2 className="text-2xl font-bold mb-4">Lista de Autos</h2>
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b p-2 text-left">Marca</th>
            <th className="border-b p-2 text-left">Precio</th>
            <th className="border-b p-2"></th>
          </tr>
        </thead>
        <tbody>
          {cars.map(car => (
            <tr key={car.id} className="hover:bg-gray-50">
              <td className="border-b p-2">{car.marca}</td>
              <td className="border-b p-2">${car.precio}</td>
              <td className="border-b p-2">
                <Link to={`/auto/${car.id}`} className="text-blue-500 hover:underline">Ver detalle</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
