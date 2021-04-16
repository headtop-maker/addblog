export enum ActionType {
  addReg = "ADD_REGFORM",
}

export const regFormAction = (regInfo: any[]) => {
  return {
    type: ActionType.addReg,
    payload: regInfo,
  };
};
