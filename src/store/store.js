import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from './serviceSlice';
import premiumReducer from './premium.Slice';

const store = configureStore({
    reducer:  {
        services: serviceReducer,
        premiums : premiumReducer,
    },
});

export default store;