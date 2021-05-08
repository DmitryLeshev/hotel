import { Modes, Mode } from "../store/types/app";

export default (mode: Mode) => {
  return mode === Modes.LIGHT ? Modes.DARK : Modes.LIGHT;
};
