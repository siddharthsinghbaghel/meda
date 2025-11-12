import { createSlice } from "@reduxjs/toolkit";

// --- Safe Initial State ---

// 1. Get the TOKEN (it's a string, no parse needed)
const token = localStorage.getItem("token") || null;

// 2. Get the USER (it's an object, so we must safely parse it)
let user = null;
const userString = localStorage.getItem("user");

if (userString) {
  try {
    // This is where you parse JSON
    user = JSON.parse(userString);
  } catch (error) {
    // If parsing fails, clear the corrupted data
    console.error("Failed to parse user from localStorage:", error);
    localStorage.removeItem("user");
  }
}

// 3. Define the initial state
const initialState = {
  signupData: null,
  loading: false,
  token: token,
  user: user,
};

// --- The Slice ---

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setSignupData(state, value) {
      state.signupData = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setToken(state, value) {
      // Save token to state
      state.token = value.payload;
      
      // Also save token to localStorage
      if (value.payload) {
        localStorage.setItem("token", value.payload);
      } else {
        localStorage.removeItem("token");
      }
    },
    setUser(state, value) {
      // Save user to state
      state.user = value.payload;

      // Also save user to localStorage
      if (value.payload) {
        // User is an object, so we MUST stringify it
        localStorage.setItem("user", JSON.stringify(value.payload));
      } else {
        localStorage.removeItem("user");
      }
    },
  },
});

export const { setSignupData, setLoading, setToken, setUser } = authSlice.actions;

export default authSlice.reducer;