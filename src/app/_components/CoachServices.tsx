'use client'

import React, { useEffect, useState } from 'react';

interface Coach {
    id: string | number;
    email: string;
  }

const CoachServices: React.FC = () => {
     
    const [services, setServices] = useState<Coach[]>([]);
  
    useEffect(() => {
      async function fetchServices() {
        try {
          const response = await fetch('/api/coach');
          const data = (await response.json()) as Coach[];
          setServices(data);
          console.log(data);
        } catch (error) {
          console.error('Failed to fetch coaches:', error);
        }
      }
  
      fetchServices();
    }, []);  

  // State to track which checkboxes are checked
  const [checkedItems, setCheckedItems] = useState<{ [key: string | number]: boolean }>({});

  // Handle checkbox state change
  const handleCheckboxChange = (id: string | number) => {
    setCheckedItems({
      ...checkedItems,
      [id]: !checkedItems[id],  // Toggle the checkbox state
    });
  };

  return (
    <div className="p-4">
      <h3 className="text-md mb-4 underline">Available Coaches:</h3>

      {/* List of people providing the service with checkboxes */}
      <ul>
        {services.map((coach) => (
          <li key={coach.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`checkbox-${coach.id}`}
              checked={!!checkedItems[coach.id]}  // Ensure default unchecked if not in state
              onChange={() => handleCheckboxChange(coach.id)}  // Toggle checkbox state
              className="mr-2"
            />
            <label htmlFor={`checkbox-${coach.id}`} className="text-sm">
              {coach.id}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoachServices;