# Study Planner Advanced

🎓 AI-powered study planner for CBSE board exams with intelligent schedule generation, progress tracking, and analytics.

## Features

- 🤖 **ML-Based Schedule Generation** - AI creates personalized study plans based on your syllabus and board exam dates
- 📊 **Real-time Progress Tracking** - Track your study hours, chapters completed, and performance metrics
- 📚 **Subject-wise Resources** - Curated study materials for Physics, Chemistry, Mathematics, and Physical Education
- 📝 **Mock Tests** - Practice with CBSE-style mock exams and get instant analytics
- ⏱️ **Pomodoro Timer** - Built-in focus timer with customizable intervals
- 📈 **Analytics Dashboard** - Visualize your study patterns and improvements
- 🎯 **Smart Recommendations** - AI suggests what to study next based on your weaknesses
- 🔔 **Smart Notifications** - Get reminders and motivational alerts
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile

## Tech Stack

### Backend
- **Node.js** + Express.js (TypeScript)
- **MongoDB** for data storage
- **Firebase** for authentication
- **TensorFlow.js** for ML models
- **Socket.io** for real-time updates

### Frontend
- **React** 18+ with TypeScript
- **Next.js** 14+ for server-side rendering
- **TailwindCSS** for styling
- **Recharts** for data visualization
- **Redux Toolkit** for state management

## Project Structure

```
study-planner-advanced/
├── backend/              # Node.js Express API
│   ├── src/
│   │   ├── routes/      # API endpoints
│   │   ├── models/      # MongoDB schemas
│   │   ├── controllers/ # Business logic
│   │   ├── middleware/  # Auth, validation
│   │   ├── services/    # AI/ML services
│   │   └── config/      # Configuration
│   └── package.json
├── frontend/            # Next.js React app
│   ├── app/            # Next.js app directory
│   ├── components/     # React components
│   ├── pages/          # Page routes
│   ├── public/         # Static assets
│   └── package.json
├── ml/                 # Machine Learning models
│   ├── models/        # Trained models
│   └── training/      # Training scripts
└── docs/              # Documentation
```

## Installation

### Prerequisites
- Node.js 18+
- npm or yarn
- MongoDB (local or Atlas)
- Firebase account

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB and Firebase credentials
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## API Documentation

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Study Plans
- `GET /api/study-plans` - Get user's study plans
- `POST /api/study-plans` - Create new study plan
- `PUT /api/study-plans/:id` - Update study plan
- `DELETE /api/study-plans/:id` - Delete study plan

### Progress
- `GET /api/progress` - Get study progress
- `POST /api/progress/log` - Log study session
- `GET /api/analytics` - Get analytics data

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Author

**Arpan** - [@arpancodez](https://github.com/arpancodez)

---

⭐ If you found this helpful, please consider giving it a star!
