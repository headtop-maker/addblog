import { ActionType } from "./actions";
import { IRegForm } from "./types";

const initialState: IRegForm = {
  regInfo: [],
};

const regFormReducer = (
  state = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case ActionType.addReg:
      return {
        ...state,
        // regInfo: [...state.regInfo, action.payload],
        regInfo: state.regInfo.concat(action.payload),
      };

    default:
      return state;
  }
};
export default regFormReducer;
