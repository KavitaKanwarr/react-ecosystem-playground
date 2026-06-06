import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type rtkUser = {
  name: string;
  pending: boolean;
  data: unknown;
};

const initialState: rtkUser = {
  name: "",
  pending: false,
  data: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload;
    },
  },
  // extraReducers -  to respond to actions that are outside the slice, here, for async thunk actions we need listeners
  //   extraReducers callback function - automatically provides builder tool as an argument. builder - was introduced to provide an explicit, error-free way to write this logic. Prior to RTK devs used string keys to listen to external actions, through builders it's simplified
  //   addCase: builder gives this method  builder.addCase(action, reducer Function)
  extraReducers: (builder) => {
    builder.addCase(fetchDataViaRtk.pending, (state) => {
      state.pending = true;
    });
    builder.addCase(fetchDataViaRtk.fulfilled, (state, action) => {
      state.data = action.payload;
      state.pending = false;
    });
    builder.addCase(fetchDataViaRtk.rejected, (state) => {
      state.pending = false;
    });
  },
});

export const fetchDataViaRtk = createAsyncThunk("user/api", async () => {
  const data = await fetch("https://api.github.com/emojis");
  const parsedData = await data.json();
  return Object.fromEntries(Object.entries(parsedData).slice(0, 40));
});

export const { setUser } = userSlice.actions;

const userReducer = userSlice.reducer;

export default userReducer;
