'use client';

import { useState } from "react";

export default function NewService() {
    const [open, setOpen ] = useState(true);    
    const [service, setService] = useState({
            name: ''
        });
        console.log(service)
        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            const { name, value, type } = e.target;
            setService({
              ...service,
              [name]: value
            });
        };

        async function handleSubmit(e: React.FormEvent) {
            e.preventDefault();
            try {
                const response = await fetch('/api/services', {
                    method: 'POST', 
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(service), 
                  });
                
                const data = await response.json();
                setService(data);
                console.log(data);
                if (response.ok) {
                    setOpen(false);
                  } else {
                    console.error('Failed to submit service');
                  }
                } catch (error) {
                  console.error('Error submitting form:', error);
                }
            } 
            //catch (error) {
           //     console.error('Failed to fetch services:', error);
            //    }

            //this manipulation of state is not recommended for clearing inputs on submit; previous attempt did not succeed.
            setService({
                name: ''
            })
            setOpen(true)
        

         //this manipulation of state is not recommended for clearing inputs on submit; previous attempts did not succeed.
        // const handleReset = () => setService({
         //   name:''

         //})   
        
        return (
          <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2">
            <h1 className="font-bold p-2"> Add New Service</h1>
            <form className="p-2"
                  onSubmit={handleSubmit}>
                <label htmlFor="name" className="block text-xs font-medium text-gray-900">
                 Name
                </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter Service Name"
                        className="inline w-fit border-2 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        value= {service.name}
                        onChange= {handleChange} 
                    />

                <button type="submit" className="inline rounded-md bg-indigo-600 px-3 py-2 ml-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>

                <button type="button" 
                    //onClick={handleReset} 
                    className="inline rounded-md bg-indigo-600 px-3 py-2 ml-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Reset</button>

            </form>        
          </div>
        )
    }