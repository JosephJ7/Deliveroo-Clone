import { createSlice } from '@reduxjs/toolkit'

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    restaurant: {
        id:null,
        imgUrl :null,
        title:null,
        rating:null,
        genre:null,
        address:null,
        short_description:null,
        dishes:null,
    
    }
  },
  reducers: {
    SetRestaurant: (state,action) => {
      state.restaurant =  action.payload;
    },
    
    
    },
  });

// Action creators are generated for each case reducer function
export const { SetRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurant.restaurant;

export default restaurantSlice.reducer