'use client';

import { useState } from 'react';
import TestEditModal from './TestEditModal';

//export default function EditButton () { 
//const handleEdit = useState
//
//    return(
//    <span className="sr-only">
//        <button 
//            //onClick={handleEdit} 
//        >
//            Edit
//        </button>
//    </span>
//    );
//};


interface Person {
  id: number;
  name: string;
}

interface EditButtonProps {
  person: Person;
  onNameUpdate: (id: number, newName: string) => void;
}

const EditButton: React.FC<EditButtonProps> = ({ person, onNameUpdate }) => {
  const [isEditing, setIsEditing] = useState(false); // Track whether we are editing
  const [newName, setNewName] = useState(person.name); // State to store the updated name

  // Handle button click to start editing
  const handleEditClick = () => {
    setIsEditing(true); // Show the input field
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  // Handle form submission to update the name
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNameUpdate(person.id, newName); // Call the function to update the name
    setIsEditing(false); // Close the edit form
  };

  return (
    <div className="p-2">
      {isEditing ? (
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={newName}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-1 mr-2"
          />
          <button
            type="submit"
            className="rounded bg-indigo-600 text-white px-2 py-1 hover:bg-indigo-500"
          >
            Save
          </button>
        </form>
      ) : (
        <>
          <span>{person.name}</span>
          <button
            onClick={handleEditClick}
            className="ml-2 rounded bg-blue-500 text-white px-2 py-1 hover:bg-blue-400"
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default EditButton;