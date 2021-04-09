import { IState } from "./types";
import { ActionType } from "./actions";

const initialState: IState = {
  login: "",
  content: [],
  shortImgSrch: [],
};

const reducer = (
  state = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case ActionType.userLogin:
      return {
        ...state,
        login: action.payload,
      };
    case ActionType.addShortImgSrch:
      return {
        ...state,
        shortImgSrch: state.shortImgSrch.concat(action.payload),
      };

    case ActionType.addContent:
      const newContent = {
        id: state.content.length,
        imgSrc: action.payload[0].imgSrc,
        imgText: "Фото",
        blogText: action.payload[0].blogText,
        author: "Undef",
        thisDate: action.payload[0].thisDate,
      };
      return {
        ...state,
        content: state.content.concat(newContent),
      };
    default:
      return state;
  }
};

export default reducer;
// console.log(action.payload[0].imgSrc);
