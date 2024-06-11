import { Request, Response } from 'express';

// Define the Feedback interface directly in the controller
interface Feedback {
    name: string;
    feedback: string;
}

// In-memory data structure to store feedback entries
const feedbacks: Feedback[] = [];

// Controller for retrieving all feedback entries
export const getAllFeedbackEntries = (req: Request, res: Response) => {
    res.json(feedbacks);
};

// Controller for submitting new feedback
export const submitFeedback = (req: Request, res: Response) => {
    const { name, feedback } = req.body;
    if (!name || !feedback) {
        return res.status(400).json({ message: 'Name and feedback are required' });
    }
    feedbacks.push({ name, feedback });
    res.status(201).json({ message: 'Feedback submitted successfully!' });
};
