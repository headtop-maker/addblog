import { ActionType } from "./actions";
import { IAuthForm } from "./types";

const initialState: IAuthForm = {
  loginInfo: "",
};

const authFormReducer = (
  state = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case ActionType.addAuthForm:
        console.log(state.loginInfo);
      return {
        ...state,
        loginInfo: action.payload,
      };
    default:
      return state;
  }
};
export default authFormReducer;
