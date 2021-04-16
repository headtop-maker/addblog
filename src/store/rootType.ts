import { IAddImg } from "./addImage/types";
import { IAuthForm } from "./authForm/types";
import { IRegForm } from "./regPage/types";

type TState = {
  addImage: IAddImg;
  regForm: IRegForm;
  authForm: IAuthForm;
};

export default TState;
