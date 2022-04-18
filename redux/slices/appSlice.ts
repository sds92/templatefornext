import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

const fetchApp = createAsyncThunk('app/fetchJSON', async () => {
  const response = await fetch(`/api/app`);
  return (await response.json()) as IApp;
});

interface AppState {
  contacts: IContacts;
}

const initialState = {
  contacts: {
    phones: ['+7 (812) 923-46-06', '+7 (812) 923-46-06'],
    emails: ['test@test.ru', 'test2@test.ru'],
    addresses: [
      {
        title: 'Офис',
        value: 'Москва, Проектируемый проезд № 134, вл.4',
        iframe: 'https://api-maps.yandex.ru/frame/v1/-/CCUYiXRD-B',
      },
    ],
    socials: [],
    workingHoars: ['<span class="text-bold">8:00–20:00</span>'],
  },
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // fill in primary logic here
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApp.fulfilled, (state: { contacts: IContacts }, action) => {
      state.contacts = action.payload.contacts;
    });
  },
});

const { actions, reducer } = appSlice;

export const selectContacts = (state: RootState) => {
  console.log('🚀 ~ file: appSlice.ts ~ line 45 ~ selectContacts ~ state', state);
  return state.app.contacts;
};

export default reducer;
