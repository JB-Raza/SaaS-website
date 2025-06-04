import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: JSON.parse(localStorage.getItem("user")),
  // user: {},
  isLoading: false,
  error: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    clearUser: (state) => {
      localStorage.removeItem("user")
      localStorage.removeItem("accessToken")
      state.user = null
    },
    // wishlist reducers
    addItemToWishlist: (state, action) => {
      console.log("state - ",state)
      console.log("payload - ",action.payload)
      state.user.wishlist.push(action.payload)
    },
    removeItemFromWishlist: (state, action) => {
      state.user.wishlist = state.user.wishlist.filter((item) => item !== action.payload)
    },
    clearWishlist: (state) => {
      state.user.wishlist = []
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    }
  }
})
export const { setUser, clearUser, setLoading, setError, addItemToWishlist, clearWishlist, removeItemFromWishlist } = userSlice.actions
export default userSlice.reducer