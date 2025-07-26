# Poker Planning Application

A real-time poker planning (story point estimation) application built with React and Material-UI. This application helps agile teams conduct planning sessions efficiently by providing a virtual environment for story point estimation.

## Features

- **User Authentication**
  - Login/Signup functionality
  - Password reset capability
  - Profile management

- **Session Management**
  - Create new planning sessions
  - Join existing sessions via code
  - View session history
  - Private/Public session options

- **Planning Features**
  - Real-time voting system
  - Multiple point systems (Fibonacci, Sequential, T-shirt sizes)
  - Vote revelation control
  - Session statistics and results
  - Participant management

## Tech Stack

- **Frontend**
  - React.js
  - Material-UI (MUI)
  - React Router DOM
  - Context API for state management

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will start running at `http://localhost:3000`

## Project Structure

```
client/
├── public/
│   └── index.html
├── src/
│   ├── components/     # Reusable UI components
│   ├── contexts/       # React Context providers
│   ├── hooks/         # Custom React hooks
│   ├── layouts/       # Page layout components
│   ├── pages/         # Main page components
│   ├── theme/         # MUI theme configuration
│   ├── utils/         # Utility functions
│   ├── App.jsx        # Main App component
│   ├── index.jsx      # Entry point
│   └── routes.jsx     # Route configurations
└── package.json
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner

## Pages and Routes

- `/` - Home page
- `/login` - User login
- `/signup` - New user registration
- `/reset-password` - Password reset
- `/create-session` - Create new planning session
- `/join-session` - Join existing session
- `/session/:id` - Active planning session
- `/profile` - User profile management
- `/history` - Session history

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- Material-UI for the awesome component library
- React team for the amazing framework

## Contact

Your Name - your.email@example.com
Project Link: [https://github.com/yourusername/poker-planning](https://github.com/yourusername/poker-planning)
