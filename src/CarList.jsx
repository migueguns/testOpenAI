import React from 'react';
import { Link } from 'react-router-dom';

export const cars = [
  { id: 1, marca: 'Toyota', precio: 10000 },
  { id: 2, marca: 'Honda', precio: 12000 },
  { id: 3, marca: 'Ford', precio: 15000 }
];

export default function CarList() {
  return (
    <div>
      <h2>Lista de Autos</h2>
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            <Link to={`/auto/${car.id}`}>{car.marca} - ${car.precio}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
