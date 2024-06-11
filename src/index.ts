import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import rateLimit from 'express-rate-limit';
import cors from 'cors';

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());
// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 10 * 1000, // 10 seconds
  max: 1, // Limit each IP to 1 request per windowMs
  message: 'Too many requests, please try again later.'
});

// In-memory data structure to store feedback entries
interface Feedback {
  name: string;
  feedback: string;
}

const feedbacks: Feedback[] = [];

// Endpoint to retrieve all feedback entries
app.get('/feedback', (req: Request, res: Response) => {
  res.json(feedbacks);
});

// Endpoint to submit new feedback
app.post('/feedback', limiter, (req: Request, res: Response) => {
  const { name, feedback } = req.body;
  if (!name || !feedback) {
    return res.status(400).json({ message: 'Name and feedback are required' });
  }
  feedbacks.push({ name, feedback });
  res.status(201).json({ message: 'Feedback submitted successfully!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
