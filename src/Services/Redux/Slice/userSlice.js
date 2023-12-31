import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	currentUser: null,
	isFetching: false,
	error: false,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		userStart: (state) => {
			state.isFetching = true;
		},
		userSuccess: (state, action) => {
			state.isFetching = false;
			state.currentUser = action.payload;
			state.error = false;
		},
		userFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
	},
});

export const { userStart, userSuccess, userFailure } = userSlice.actions;
export default userSlice.reducer;
