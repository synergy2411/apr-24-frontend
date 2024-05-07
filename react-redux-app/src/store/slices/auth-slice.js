import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const app = initializeApp({
  apiKey: "AIzaSyDbE_YD2e_Ie9MvqfwLfvcu0ml6JWxVz4U",
  authDomain: "sk-hexa-app.firebaseapp.com",
});

const auth = getAuth(app);

const initialState = {
  token: null,
  loading: false,
  error: null,
};

export const userRegistration = createAsyncThunk(
  "auth/registration",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const token = await userCredentials.user.getIdToken();
      console.log(token);
      return token;
    } catch (err) {
      console.log("ERROR : ", err);
      return rejectWithValue("Unable to create new User");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(userRegistration.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(userRegistration.fulfilled, (state, action) => {
      state.token = action.payload;
      state.loading = false;
    });
    builder.addCase(userRegistration.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const authReducer = authSlice.reducer;
