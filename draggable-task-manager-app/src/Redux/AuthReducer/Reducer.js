import { LOGINFAILURE, LOGINSUCCESS, LOGOUT } from "../ActionTypes";

const InitialState = {
  isAuthenticated: false,
  name: "",
  token: "",
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
