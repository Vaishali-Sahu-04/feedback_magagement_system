import express from 'express';
import { getAllFeedbackEntries, submitFeedback } from '../controllers/feedbackController';

const router = express.Router();

// Define routes
router.get('/', getAllFeedbackEntries);
router.post('/', submitFeedback);

export default router;
