# Modern Full-Stack Application Template

A production-ready template for building modern web applications with React, Node.js, and MongoDB, featuring a daily inspiration quote system.

## 🚀 Tech Stack

### Frontend

- React.js (Vite)
- TypeScript
- Tailwind CSS

### Backend

- Node.js with Express
- TypeScript
- MongoDB
- Docker

### DevOps

- Git Version Control
- CI/CD with GitHub Actions

## 🎯 Features

- **Daily Quotes**: Display inspiring quotes fetched from the backend
- Modern, responsive UI with Tailwind CSS
- Full-stack TypeScript integration
- Docker containerization
- MongoDB database integration
- Development and production configurations

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn
- Docker and Docker Compose
- MongoDB (for local development)
- Git

## 🛠️ Installation

1. Clone the repository

```bash
git clone <your-repo-url>
cd <project-name>
```

2. Install dependencies

```bash
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

3. Environment Setup

Create `.env` files in both client and server directories:

Server `.env`:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/myapp
```

Client `.env`:

```env
VITE_API_URL=http://localhost:3000
```

## 🚀 Development

### Running locally

1. Start the backend server:

```bash
cd server
npm run dev
```

2. Start the frontend development server:

```bash
cd client
npm run dev
```

3. Access the application:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000
   - Daily Quote API: http://localhost:3000/api/quote

### Using Docker

```bash
docker-compose up --build
```

## 📦 Project Structure

```
my-fullstack-app/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   │   └── DailyQuote.tsx
│   │   ├── App.tsx
│   │   └── main.tsx
├── server/                 # Backend Express application
│   ├── src/
│   │   └── index.ts      # Server setup and API routes
├── docker/                 # Docker configuration files
├── .github/               # GitHub Actions for CI/CD
├── docker-compose.yml
├── .gitignore
└── README.md
```

## 🔧 Available Scripts

### Frontend

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Backend

```bash
npm run dev          # Start development server with ts-node-dev
npm run build        # Build TypeScript to JavaScript
npm run start        # Start production server
```

## 🔧 API Endpoints

The API endpoints are available at `http://localhost:3000`

- GET `/` - Welcome message
- GET `/api/quote` - Retrieve today's inspiration quote

## 🚀 Deployment

1. Build the application:

```bash
# Build frontend
cd client
npm run build

# Build backend
cd ../server
npm run build
```

2. Deploy using Docker:

```bash
docker-compose -f docker-compose.prod.yml up --build
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- React.js
- Node.js
- MongoDB
- Docker
- GitHub Actions
