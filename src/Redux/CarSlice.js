/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Url from '../api/Urlapi';
const initialState = {
  loading: true,
  data: [],
  message: '',
  error: null,
  car: {},
};
const token = localStorage.getItem('token');
export const createCar = createAsyncThunk(
  'Car/createCar',
  async (car, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(`${Url}/api/v1/cars`, car, config);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
