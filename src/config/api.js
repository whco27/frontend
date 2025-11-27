/**
 * API configuration module
 * Reads the backend API URL from environment variables
 */

// Base URL for the twende-backend API
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

// Daraja payment API URL
export const DARAJA_API_URL = import.meta.env.VITE_DARAJA_API_URL || 'http://localhost:5000';
