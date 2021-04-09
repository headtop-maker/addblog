import { IState } from "./types";

export const getUserLogin = (state: IState) => state.login;

export const get = (state: IState) => state.login;

export const getContent = (state:IState)=> state.content;

export const getShortImgSrch = (state:IState)=> state.shortImgSrch ;