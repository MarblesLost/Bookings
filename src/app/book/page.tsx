'use client';

import { useEffect, useState } from 'react';

export default function Book() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/api/services')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h1>Book a Service</h1>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            {service.name}
            {/* Add booking logic here */}
          </li>
        ))}
      </ul>
    </div>
  );
}
