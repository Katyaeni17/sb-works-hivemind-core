
// API service configuration and endpoints
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const apiService = {
  // User authentication endpoints
  auth: {
    login: `${API_BASE_URL}/auth/login`,
    register: `${API_BASE_URL}/auth/register`,
    logout: `${API_BASE_URL}/auth/logout`,
    profile: `${API_BASE_URL}/auth/profile`,
  },
  
  // Project management endpoints
  projects: {
    list: `${API_BASE_URL}/projects`,
    create: `${API_BASE_URL}/projects`,
    details: (id: string) => `${API_BASE_URL}/projects/${id}`,
    update: (id: string) => `${API_BASE_URL}/projects/${id}`,
    delete: (id: string) => `${API_BASE_URL}/projects/${id}`,
  },
  
  // Freelancer endpoints
  freelancers: {
    list: `${API_BASE_URL}/freelancers`,
    profile: (id: string) => `${API_BASE_URL}/freelancers/${id}`,
    skills: `${API_BASE_URL}/freelancers/skills`,
  },
  
  // Proposal endpoints
  proposals: {
    list: `${API_BASE_URL}/proposals`,
    create: `${API_BASE_URL}/proposals`,
    update: (id: string) => `${API_BASE_URL}/proposals/${id}`,
  },
  
  // Messaging endpoints
  messages: {
    list: (projectId: string) => `${API_BASE_URL}/messages/${projectId}`,
    send: `${API_BASE_URL}/messages`,
  },
  
  // Admin endpoints
  admin: {
    users: `${API_BASE_URL}/admin/users`,
    projects: `${API_BASE_URL}/admin/projects`,
    disputes: `${API_BASE_URL}/admin/disputes`,
    reports: `${API_BASE_URL}/admin/reports`,
  }
};

export default apiService;
