# Setup Guide - Study Planner Advanced

## Quick Start (5 minutes)

### Prerequisites
- Node.js 18+
- npm or yarn
- MongoDB (local or Atlas)
- Git

### 1. Clone & Install Backend

```bash
cd backend
npm install
cp .env.example .env
```

### 2. Configure .env (backend/.env)

```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/study-planner
JWT_SECRET=your_secret_key_here
FRONTEND_URL=http://localhost:3000
```

### 3. Run Backend

```bash
npm run dev
# Server runs on http://localhost:5000
```

### 4. Install Frontend (new terminal)

```bash
cd frontend
npm install
```

### 5. Run Frontend

```bash
npm run dev
# App runs on http://localhost:3000
```

## Full Setup with Database

### MongoDB Setup

**Option A: Local MongoDB**
```bash
# Mac
brew install mongodb-community
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

**Option B: MongoDB Atlas (Cloud)**
1. Create account at mongodb.com/cloud/atlas
2. Create cluster
3. Get connection string
4. Update MONGODB_URI in .env

### Firebase Setup (for Auth)

1. Go to firebase.google.com
2. Create new project
3. Enable Authentication
4. Download service account key
5. Add to backend/.env

## Project Structure

```
study-planner-advanced/
├── backend/
│   ├── src/
│   │   └── index.ts          # Main server
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
│
├── frontend/
│   ├── app/
│   │   └── page.tsx          # Home page
│   ├── package.json
│   ├── next.config.js
│   └── .env.local
│
├── README.md
├── LICENSE
└── SETUP_GUIDE.md
```

## Development

### Backend Commands
```bash
npm run dev      # Run development server
npm run build    # Build TypeScript
npm run start    # Run production build
npm run lint     # Run linter
```

### Frontend Commands
```bash
npm run dev      # Run dev server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run linter
```

## API Testing

### Health Check
```bash
curl http://localhost:5000/api/health
```

Expected response:
```json
{
  "status": "ok",
  "message": "Study Planner Advanced API is running",
  "timestamp": "2025-12-02T..."
}
```

## Deployment

### Deploy Backend to Railway/Render

1. Push to GitHub
2. Connect repository to Railway or Render
3. Add environment variables
4. Deploy

### Deploy Frontend to Vercel

```bash
npm i -g vercel
vercel login
vercel
```

Or use Vercel GitHub integration.

## Troubleshooting

### Port already in use
```bash
# Kill process on port 5000
lsof -i :5000
kill -9 <PID>
```

### MongoDB connection failed
- Check MongoDB is running
- Verify MONGODB_URI in .env
- Check network connectivity

### npm install errors
```bash
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

1. Create MongoDB models
2. Implement auth endpoints
3. Add study plan generator
4. Build React components
5. Deploy to production

## Support

For issues, create a GitHub issue or contact the maintainers.
