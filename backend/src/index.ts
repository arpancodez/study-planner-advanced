import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';

// Load environment variables
dotenv.config();

const app: Application = express();
const httpServer = createServer(app);
const io = new SocketIOServer(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'ok',
    message: 'Study Planner Advanced API is running',
    timestamp: new Date().toISOString()
  });
});

// Auth Routes
app.post('/api/auth/register', (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;
    // TODO: Implement registration logic with Firebase
    res.status(201).json({
      message: 'User registered successfully',
      user: { email, name }
    });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

app.post('/api/auth/login', (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    // TODO: Implement login logic with Firebase
    res.status(200).json({
      message: 'Login successful',
      token: 'jwt_token_here'
    });
  } catch (error) {
    res.status(401).json({ error: 'Login failed' });
  }
});

// Study Plans Routes
app.get('/api/study-plans', (req: Request, res: Response) => {
  // TODO: Fetch user's study plans from MongoDB
  res.status(200).json({
    message: 'Fetching study plans',
    plans: []
  });
});

app.post('/api/study-plans', (req: Request, res: Response) => {
  try {
    const { title, subjects, examDate } = req.body;
    // TODO: Create new study plan with ML scheduling
    res.status(201).json({
      message: 'Study plan created',
      plan: { title, subjects, examDate }
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create study plan' });
  }
});

// Real-time Socket.IO events
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('join-session', (data) => {
    console.log('User joined session:', data);
    socket.emit('session-joined', { message: 'Joined successfully' });
  });

  socket.on('update-progress', (data) => {
    console.log('Progress updated:', data);
    io.emit('progress-updated', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Error handling middleware
app.use((err: any, req: Request, res: Response) => {
  console.error('Error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: err.message
  });
});

const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, () => {
  console.log(`\n🚀 Study Planner Advanced Backend running on port ${PORT}`);
  console.log(`📍 Server: http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health\n`);
});

export { app, io };
