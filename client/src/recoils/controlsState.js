import { atom } from "recoil";

export const brightnessState = atom({
  key: "brightness",
  default: 70,
});

export const toggleBlurState = atom({
  key: "toggleBlur",
  default: false,
})

export const smallTextState = atom({
  key: "smallText",
  default: false,
})

export const fullWidthState = atom({
  key: "fullWidth",
  default: false,
})
