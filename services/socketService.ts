// src/services/socketService.ts
import io from 'socket.io-client';
import { setLocations } from '../store/transportSlice';
import { store } from '../store/store';

// Replace with your WebSocket server URL
const socket = io('https://your-websocket-server-url');

// Start listening to real-time updates
export const startRealTimeTracking = () => {
  socket.on('locationUpdate', (locations: Array<any>) => {
    store.dispatch(setLocations(locations));
  });
};
