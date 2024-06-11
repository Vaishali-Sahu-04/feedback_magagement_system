// src/App.tsx
import React from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-8">Feedback Management System</h1>
      
      {/* Main content */}
      <div className="flex flex-col md:flex-row justify-between w-full">
        {/* Feedback Form on the left */}
        <div className="md:w-3.5 lg:w-1/3 mb-8 md:mb-0 md:mr-2">
          <FeedbackForm />
        </div>
        
        {/* Feedback List on the right */}
        <div className="md:w-1/2">
          <FeedbackList />
        </div>
      </div>
    </div>
  );
  
};

export default App;
