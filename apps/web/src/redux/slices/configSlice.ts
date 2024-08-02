import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface ConfigState {
  test: boolean
}

// Define the initial state using that type
const initialState: ConfigState = {
  test: true,
};

export const configSlice = createSlice({
  name: 'config',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTest: (state, { payload }: PayloadAction<boolean>) => ({ ...state, test: payload }),
  },
});

export const {
  setTest,
} = configSlice.actions;

export default configSlice.reducer;
