import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { cars } from './CarList.jsx';

export default function CarDetail() {
  const { id } = useParams();
  const car = cars.find(c => c.id.toString() === id);

  if (!car) {
    return (
      <div>
        <h2>Auto no encontrado</h2>
        <Link to="/">Volver</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Detalle de {car.marca}</h2>
      <p>Marca: {car.marca}</p>
      <p>Precio: ${car.precio}</p>
      <Link to="/">Volver</Link>
    </div>
  );
}
