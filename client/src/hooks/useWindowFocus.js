import { useState } from "react";

export default function useWindowFocus() {
  const [windowIsFocused, setWindowIsFocused] = useState(document.hasFocus());
  //when browser tab is active, setWindowIsFocused to true
  window.addEventListener("blur", () => setWindowIsFocused(false));
  //when browser tab is inactive, setWindowIsFocused to false
  window.addEventListener("focus", () => setWindowIsFocused(true));

  return windowIsFocused;
}
