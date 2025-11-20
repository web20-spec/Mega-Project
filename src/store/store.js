import {configureStore} from '@reduxjs/toolkit'
import { login, logout } from './authSlice'
import authSlice from './authSlice';
import Post from '../pages/Post';

const store = configureStore({
    reducer:{
        auth: authSlice,
        login,
        logout
    }
})

export default store