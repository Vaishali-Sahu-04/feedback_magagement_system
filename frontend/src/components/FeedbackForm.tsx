// src/components/FeedbackForm.tsx
import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm: React.FC = () => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/feedback', { name, feedback });
      setMessage(response.data.message);
      //console.log("response ",response.data.message)
      setName('');
      setFeedback('');
    } catch (error: any) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name:
        </label>
        <input 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          id="name" 
          type="text" 
          placeholder="Enter your name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="feedback">
          Feedback:
        </label>
        <textarea 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          id="feedback" 
          placeholder="Enter your feedback" 
          value={feedback} 
          onChange={(e) => setFeedback(e.target.value)} 
          required 
        />
      </div>
      <div className="flex items-center justify-between">
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
          type="submit"
        >
          Submit
        </button>
        {message && <p className="text-red-500 text-xs italic">{message}</p>}
      </div>
    </form>
  );
  
};

export default FeedbackForm;
