import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface TransportState {
    locations: Array<any>;
    routes: Array<any>;
    notifications: Array<any>;
  }

  
const initialState: TransportState = {
    locations: [],
    routes: [],
    notifications: [],
  };

  const transportSlice = createSlice({
    name: 'transport',
    initialState,
    reducers: {
      setLocations: (state, action: PayloadAction<Array<any>>) => {
        state.locations = action.payload;
      },
      setRoutes: (state, action: PayloadAction<Array<any>>) => {
        state.routes = action.payload;
      },
      setNotifications: (state, action: PayloadAction<Array<any>>) => {
        state.notifications = action.payload;
      },
    },
  });
  
  export const { setLocations, setRoutes, setNotifications } = transportSlice.actions;
  
  export default transportSlice.reducer;