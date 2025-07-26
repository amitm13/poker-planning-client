import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

// Layout imports
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

// Page imports
import Login from './pages/Login';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import Home from './pages/Home';
import CreateSession from './pages/CreateSession';
import JoinSession from './pages/JoinSession';
import SessionRoom from './pages/SessionRoom';
import Profile from './pages/Profile';
import SessionHistory from './pages/SessionHistory';
import NotFound from './pages/NotFound';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Auth routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>

      {/* Protected routes */}
      <Route element={<PrivateRoute><MainLayout /></PrivateRoute>}>
        <Route path="/" element={<Home />} />
        <Route path="/create-session" element={<CreateSession />} />
        <Route path="/join-session" element={<JoinSession />} />
        <Route path="/session/:id" element={<SessionRoom />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<SessionHistory />} />
      </Route>

      {/* 404 route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
