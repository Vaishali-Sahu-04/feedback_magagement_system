// src/components/FeedbackList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Feedback {
  name: string;
  feedback: string;
}

const FeedbackList: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const result = await axios.get('http://localhost:8000/feedback');
      //console.log("Result ",result.data)
      setFeedbacks(result.data);
    };

    fetchFeedbacks();
  }, []);

  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-xl font-bold mb-4">Feedbacks</h2>
      <ul>
        {feedbacks.map((fb, index) => (
          <li key={index} className="mb-2">
            <span className="font-bold">{fb.name}:</span> {fb.feedback}
          </li>
        ))}
      </ul>
    </div>
  );
  
};

export default FeedbackList;
