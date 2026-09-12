import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    const savedEnrollments = localStorage.getItem('enrollments');
    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedEnrollments) setEnrollments(JSON.parse(savedEnrollments));
    setLoading(false);
  }, []);

  const register = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.email === email)) {
      return { success: false, error: 'Email already registered' };
    }
    const newUser = { id: Date.now(), name, email, password, createdAt: new Date().toISOString() };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    const { password: _, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);
    localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
    return { success: true };
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const found = users.find(u => u.email === email && u.password === password);
    if (!found) return { success: false, error: 'Invalid email or password' };
    const { password: _, ...userWithoutPassword } = found;
    setUser(userWithoutPassword);
    localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  const enroll = (courseId) => {
    if (!user) return { success: false, error: 'Please login to enroll' };
    const existing = enrollments.find(e => e.userId === user.id && e.courseId === courseId);
    if (existing) return { success: false, error: 'Already enrolled in this course' };
    const newEnrollment = {
      id: Date.now(),
      userId: user.id,
      courseId,
      enrolledAt: new Date().toISOString(),
      status: 'Active',
      progress: 0
    };
    const updated = [...enrollments, newEnrollment];
    setEnrollments(updated);
    localStorage.setItem('enrollments', JSON.stringify(updated));
    return { success: true, enrollment: newEnrollment };
  };

  const getUserEnrollments = () => {
    if (!user) return [];
    return enrollments.filter(e => e.userId === user.id);
  };

  const isEnrolled = (courseId) => {
    if (!user) return false;
    return enrollments.some(e => e.userId === user.id && e.courseId === courseId);
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout, enroll, getUserEnrollments, isEnrolled }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
