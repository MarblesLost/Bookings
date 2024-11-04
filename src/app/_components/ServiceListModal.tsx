'use client'

import React, { useState } from "react";
import Modal from "./Modal"; // Adjust the import path accordingly

const ServiceListModal: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [savedValue, setSavedValue] = useState<string | null>(null);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleSave = async (newInputValue: string) => {
    console.log("Saving value:", newInputValue); // Debugging

    // Save the input value in the state
    setSavedValue(newInputValue);

    try {
      // Simulating API call to save the value to a database
      await saveToDatabase(newInputValue);
      console.log("Value saved to database successfully!");
    } catch (error) {
      console.error("Error saving value to the database:", error);
    }
  };

  const saveToDatabase = async (value: string) => {
    // Simulating saving data to a database
    // You can replace this with an actual API call
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <div className="p-8">
      <button
        onClick={openModal}
        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add Service
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal} onSave={handleSave} />

      {savedValue && (
        <p className="mt-4 text-green-500">Saved Value: {savedValue}</p>
      )}
    </div>
  );
};

export default ServiceListModal;