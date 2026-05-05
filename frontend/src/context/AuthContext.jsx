import { createContext, useContext, useState } from 'react';
import api from '../services/api.js';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('shopflow_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  async function login(email, password) {
    const response = await api.post('/auth/login', { email, password });
    localStorage.setItem('shopflow_token', response.data.token);
    localStorage.setItem('shopflow_user', JSON.stringify(response.data.user));
    setUser(response.data.user);
    return response.data.user;
  }

  async function register(name, email, password) {
    const response = await api.post('/auth/register', { name, email, password });
    localStorage.setItem('shopflow_token', response.data.token);
    localStorage.setItem('shopflow_user', JSON.stringify(response.data.user));
    setUser(response.data.user);
    return response.data.user;
  }

  function logout() {
    localStorage.removeItem('shopflow_token');
    localStorage.removeItem('shopflow_user');
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
