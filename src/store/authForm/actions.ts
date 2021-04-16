export enum ActionType {
  addAuthForm = "ADD_AUTH_FORM",
}

export const authFormAction = (loginInfo: string) => {
  return {
    type: ActionType.addAuthForm,
    payload: loginInfo,
  };
};
