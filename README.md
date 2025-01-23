# Modern Full-Stack Application Template

A production-ready template for building modern web applications with React, Node.js, and MongoDB.

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

```bash
# In the server directory, create a .env file
cp .env.example .env

# In the client directory, create a .env file
cd ../client
cp .env.example .env
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

### Using Docker

To run the entire application using Docker:

```bash
docker-compose up --build
```

## 📦 Project Structure

```
my-fullstack-app/
├── client/                 # Frontend React application
├── server/                 # Backend Express application
├── docker/                 # Docker configuration files
├── .github/               # GitHub Actions for CI/CD
├── .gitignore
└── README.md
```

## 🔧 Available Scripts

### Frontend

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run test         # Run tests
```

### Backend

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run test         # Run tests
```

## 🌐 API Documentation

The API endpoints are available at `http://localhost:3000`

Base endpoints:

- GET `/` - Welcome message
- Additional endpoints documentation coming soon...

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
