import express from 'express';
import bodyParser from 'body-parser';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import feedbackRoutes from './routes/feedbackRoutes';

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

// Mount routes
app.use('/feedback', limiter, feedbackRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
