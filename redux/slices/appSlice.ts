import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

export const fetchApp = createAsyncThunk('app/fetchJSON', async () => {
  const response = await fetch(`api/getappinfo`);
  console.log("🚀 ~ file: appSlice.ts ~ line 6 ~ fetchApp ~ response", response)
  return (await response.json()) as IApp;
});

interface AppState {
  contacts: IContacts | any;
}

const initialState: AppState = {
  contacts: {
    // phones: ['+7 (812) 923-46-06', '+7 (812) 923-46-06'],
    // emails: ['test@test.ru', 'test2@test.ru'],
    // addresses: [  
    //   {
    //     title: 'Офис',
    //     value: 'Москва, Проектируемый проезд № 134, вл.4',
    //     iframe: 'https://api-maps.yandex.ru/frame/v1/-/CCUYiXRD-B',
    //   },
    // ],
    // socials: [],
    // workingHoars: ['<span class="text-bold">8:00–20:00</span>'],
  },
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setContacts: (state, action) => {
      state.contacts = action
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApp.fulfilled, (state, action) => {
      console.log("🚀 ~ file: appSlice.ts ~ line 38 ~ builder.addCase ~ state.contacts", state.contacts)
      state.contacts = action.payload.contacts;
    });
  },
});

const { actions, reducer } = appSlice;

export const selectContacts = (state: RootState) => {
  return state.app.contacts;
};

export default reducer;
