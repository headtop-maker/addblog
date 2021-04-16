import { IAddImg } from "./types";
import { ActionType } from "./actions";

const initialState: IAddImg = {
  login: "",
  content: [],
  shortImgSrch: [
    //начальное состояние
    { imgSrc: "https://img.fonwall.ru/o/cw/vecher-more-poberege-doma.jpg" },
    {
      imgSrc:
        "https://i1.wallbox.ru/wallpapers/main/201133/gornoe-ozero-sosny-0e1d0fd.jpg",
    },
    {
      imgSrc:
        "https://get.wallhere.com/photo/1920x1080-px-nature-sunset-water-1031319.jpg",
    },
  ],
};

const addImagereducer = (
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
        author: action.payload[0].author,
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

export default addImagereducer;
// console.log(action.payload[0].imgSrc);
