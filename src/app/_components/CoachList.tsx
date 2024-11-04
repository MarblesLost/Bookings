'use client';

import { useEffect, useState, } from 'react';
import CoachModal from './CoachModal';
import TestEditModal from './TestEditModal';

interface Coach {
  id: string;
  email: string;
}

export default function CoachList() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [savedValue, setSavedValue] = useState<string | null>(null);
  const [services, setServices] = useState<Coach[]>([]);
  const openCoachModal = () => setModalOpen(true);
  const openTestEditModal = () => setEditModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const closeEditModal = () => setEditModalOpen(false);
  const [selectedItem, setSelectedItem] = useState('')
  
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

    const handleEditSave = async (newInputValue: string) => {
      console.log("Saving value:", newInputValue); // Debugging
  
      // Save the input value in the state
      setSavedValue(newInputValue);
  
      try {
        const response = await fetch('/api/coach', {
          method: 'PUT', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({coach.id}), 
        });
        
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
        const response = await fetch('/api/coach', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: value}), 
      });
        
          
      }  catch (error) {
            console.error('handleSave failed to fetch coaches:', error);    
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
          <h1 className="text-base font-semibold leading-6 text-gray-900">Coaches</h1>
          <p className="mt-2 text-sm text-gray-700 flex-row">
            A list of all the coaches in your account including their name, and email.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex-row">
          <button
          onClick={openCoachModal}
          className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex-row"
          >
            Add Coach
          </button>

          <CoachModal isOpen={isModalOpen} onClose={closeModal} 
          //onSave={handleSave} 
          />

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
              <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">
              Email
              </th>
            
            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
          {services.map((coach) => (
            <tr key={coach.id}>
              <td className="w-screen max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                {coach.id}
                <dl className="font-normal lg:hidden">
                  <dt className="sr-only sm:hidden">Email</dt>
                  <dd className="mt-1 truncate text-gray-500 sm:hidden">{coach.email}</dd>
                </dl>
              </td>
              <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{coach.email}</td>
              <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                <button 
                  onClick= {openTestEditModal}
                  className="text-indigo-600 hover:text-indigo-900">
                  Edit          
                </button>
               
                <TestEditModal isOpen={isEditModalOpen} onClose={closeEditModal} onSave={handleEditSave} initialValue={selectedItem}/>
              
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}



 

  
    // Here you can send the updated name to the database using fetch/axios
    // Example:
    // fetch(`/api/people/${id}`, {
    //   method: 'PUT',
    //   body: JSON.stringify({ name: newName }),
    //   headers: { 'Content-Type': 'application/json' },
    // })
    // .then(response => response.json())
    // .then(data => console.log('Updated successfully', data));