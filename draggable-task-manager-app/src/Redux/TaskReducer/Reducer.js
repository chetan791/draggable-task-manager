import {
  ADDTASK,
  DELETETASK,
  EDITTASK,
  EMPTYTALLTASK,
  LOADTASK,
  LOADTASKFAILURE,
  LOADTASKSUCCESS,
} from "../ActionTypes";

const InitialState = {
  tasks: [],
  isLoading: false,
  error: "",
};

export const TaskReducer = (state = InitialState, action) => {
  switch (action.type) {
    case LOADTASK:
      return {
        ...state,
        isLoading: true,
      };
    case LOADTASKSUCCESS:
      return {
        ...state,
        tasks: action.payload,
        isLoading: false,
      };
    case LOADTASKFAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case ADDTASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case EDITTASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task._id === action.payload._id) {
            return action.payload;
          }
          return task;
        }),
      };
    case DELETETASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload),
      };
    case EMPTYTALLTASK:
      return {
        tasks: [],
        isLoading: false,
        error: "",
      };
    default:
      return state;
  }
};
