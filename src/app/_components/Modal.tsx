'use client'

import React, { useState, FormEvent } from "react";
import CoachServices from "./CoachServices";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (inputValue: string) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSave }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSave(inputValue); // Call the parent onSave function
    onClose(); // Close the modal after saving
  };


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <div className="flex justify-end">
          <button className="text-gray-500" onClick={onClose}>
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex-row">
            <label htmlFor="inputField" className="block text-md font-semibold text-gray-700">
              Name of Service:
            </label>
            <input
              id="inputField"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Service Name..."
            />
          </div>
          <div className= "mb-4">
            <label htmlFor="checkbox" className= "block text-md font-semibold text-gray-700">
             Choose a Coach:   
            </label>
            <CoachServices/>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;