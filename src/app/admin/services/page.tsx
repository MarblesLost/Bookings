'use client';

import { useEffect, useState } from 'react';

interface Service {
  name: string;
  role: string;
}

export default function AdminServices() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await fetch('/api/services');
        const data = (await response.json()) as Service[];
        setServices(data);
      } catch (error) {
        console.error('Failed to fetch services:', error);
      }
    }

    fetchServices();
  }, []);

  return (
    <div>
      <h1>Admin - Manage Services</h1>
      <ul>
        {services.map((service) => (
          <li key={service.name}>{service.role}</li>
        ))}
      </ul>
    </div>
  );
}
