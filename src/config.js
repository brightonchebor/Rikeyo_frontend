// src/config.js
export const API_BASE_URL = 'http://localhost:8000';

export const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

// Geofence configuration (to be updated with actual building coordinates)
export const GEOFENCE_CONFIG = {
  // Center coordinates of the building
  center: { lat: 37.7749, lng: -122.4194 }, // Example: San Francisco
  // Radius in meters (example: 100m radius)
  radius: 100,
  // Or specific polygon points for more accurate boundary
  polygonPoints: [
    { lat: 37.775, lng: -122.420 },
    { lat: 37.776, lng: -122.420 },
    { lat: 37.776, lng: -122.418 },
    { lat: 37.775, lng: -122.418 }
  ]
};