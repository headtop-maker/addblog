export enum ActionType {
  userLogin = "USER_LOGIN",
  addContent = "ADD_CONTENT",
  addShortImgSrch = "ADD_SHORT_IMG_SRCH",
}

export const userLoginAction = (login: string) => {
  return {
    type: ActionType.userLogin,
    payload: login,
  };
};

export const addContentAction = (content: any[]) => {
  return {
    type: ActionType.addContent,
    payload: content,
  };
};

export const addShortImgSrchAction = (content: any[]) => {
  return {
    type: ActionType.addShortImgSrch,
    payload: content,
  };
};
