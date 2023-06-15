import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    const response = await fetch('http://localhost:3000/greetings/random');
    const data = await response.json();
    return data.greeting;
  },
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: '',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.fulfilled, (state, action) => action.payload);
  },
});

export default greetingSlice.reducer;
export const { actions } = greetingSlice;
