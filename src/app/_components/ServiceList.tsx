'use client';

import { useEffect, useState, } from 'react';

import Modal from './Modal';

interface Service {
  name: string;
}



export default function ServiceList() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [savedValue, setSavedValue] = useState<string | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  async function fetchServices() {
    try {
      const response = await fetch('/api/services');
      const data = (await response.json()) as Service[];
      setServices(data);
      console.log(data);
    } catch (error) {
      console.error('Failed to fetch services:', error);
    }
  }

  const handleSave = async (newInputValue: string) => {
    console.log("Saving value:", newInputValue); // Debugging

    // Save the input value in the state
    setSavedValue(newInputValue);

    try {
      // Simulating API call to save the value to a database
      await saveToDatabase(newInputValue);
      fetchServices();
      console.log("Value saved to database successfully!");
    } catch (error) {
      console.error("Error saving value to the database:", error);
    }
  };

  const saveToDatabase = async (value: string) => {

    try {
      const response = await fetch('/api/services', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name: value}), 
    });
      
        
    }  catch (error) {
          console.error('handleSave failed to fetch services:', error);    
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };
  }    
  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center flex-row">
        <div className="">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Services</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of services in your account.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex-row">
          <button
          onClick={openModal}
          className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex-row"
          >
            Add Service
          </button>

          <Modal isOpen={isModalOpen} onClose={closeModal} onSave={handleSave} />

          {savedValue && (
            <p className="mt-4 text-green-500 flex-row">Saved Value: {savedValue}</p>
          )}
        </div>
      </div>
      <div className="-mx-4 mt-8 sm:-mx-0">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
          <tr>
            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
              Name
            </th>
            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
          {services.map((service) => (
            <tr key={service.name}>
              <td className="w-screen max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                {service.name}
                <dl className="font-normal lg:hidden">
                  <dt className="sr-only sm:hidden">Email</dt>
                  <dd className="mt-1 truncate text-gray-500 sm:hidden">{service.name}</dd>
                </dl>
              </td>
              <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                  Edit<span className="sr-only"></span>
                </a>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};