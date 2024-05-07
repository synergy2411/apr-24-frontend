import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const app = initializeApp({
  apiKey: "AIzaSyDbE_YD2e_Ie9MvqfwLfvcu0ml6JWxVz4U",
  authDomain: "sk-hexa-app.firebaseapp.com",
});

const auth = getAuth(app);

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
      console.log("ERROR : ", err);
      return rejectWithValue("Unable to create new User");
    }
  }
);
