import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
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
      return token;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      const token = await userCred.user.getIdToken();
      console.log(token);
      localStorage.setItem("token", token);
      return token;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    //   USER REGISTRATION
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
    // USER LOGIN
    builder.addCase(userLogin.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.token = action.payload;
      state.loading = false;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const authReducer = authSlice.reducer;
