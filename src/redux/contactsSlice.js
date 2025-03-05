import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';


axios.defaults.baseURL = 'https://67bd9519321b883e790d12c1.mockapi.io/api/v1/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      if (response.statusText === 'OK') {
        return response.data;
      } else {
        throw new Error();
      }
    } catch (error) {
      return rejectWithValue(
        'Error: An error occurred while fetching contacts'
      );
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newContact => {
    try {
      const response = await axios.post('/contacts', newContact);
      if (response.statusText === 'Created') {
        return response.data;
      } else {
        throw new Error();
      }
    } catch (e) {
      Notify.failure('Error: Contact not added');
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      if (response.statusText === 'OK') {
        return response.data;
      } else {
        throw new Error();
      }
    } catch (e) {
      Notify.failure('Error: the contact was not deleted');
    }
  }
);

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
export const getError = state => state.contacts.error;
export const getIsLoading = state => state.contacts.isLoading;
export const getContacts = state => state.contacts.items;
