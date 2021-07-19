import {INPUT_CHANGE} from "./types";

export function inputChange(data) {
  return {
    type: INPUT_CHANGE,
    data
  }
}