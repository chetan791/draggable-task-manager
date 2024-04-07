import { LOGINFAILURE, LOGINSUCCESS, LOGOUT } from "../ActionTypes";

const InitialState = {
  isAuthenticated: false,
  name: "",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NjAyYjdjNmE2MWNjZTE4NDczYzFhNTYiLCJpYXQiOjE3MTI0MzUyNTYsImV4cCI6MTcxNTAyNzI1Nn0.bR9HsRSpee8ru-yBnwIX7q-7bHT_XDnj19VpzGt0G5A",
  error: "",
};

export const AuthReducer = (state = InitialState, action) => {
  switch (action.type) {
    case LOGINSUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        name: action.payload.name,
        token: action.payload.token,
      };
    case LOGINFAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        name: "",
        token: "",
        error: "",
        isLoading: false,
      };
    default:
      return state;
  }
};
