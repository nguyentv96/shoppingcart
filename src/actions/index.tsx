import { LOAD_DATA } from "../constant/enum";
export const actLoadData = (content : any[]) => {
  return {
    type: LOAD_DATA,
    content,
  };
};