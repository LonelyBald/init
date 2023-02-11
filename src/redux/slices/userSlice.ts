import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserType {
  user: StateUserType;
}
export interface StateUserType {
  email: string | null;
  token: string | null;
  id: string | null;
}

const initialState: StateUserType = {
  email: null,
  token: null,
  id: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<StateUserType>) => {
      const { email, token, id } = action.payload;
      state.email = email;
      state.token = token;
      state.id = id;
    },
    removeUser: (state) => {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
