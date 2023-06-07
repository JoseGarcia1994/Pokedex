import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const usersNameSlice = createSlice({
	name: 'userName',
    initialState: "",
    reducers: {
        getUserName: (state, action) => {
            const newUser = action.payload
            return newUser
        }
    }
})

export const { getUserName } = usersNameSlice.actions;

export default usersNameSlice.reducer;