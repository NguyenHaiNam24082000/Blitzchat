import ContentEditable from "react-contenteditable";
import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import {
  toggleBlurState,
  smallTextState,
} from "../../../recoils/controlsState";
import { useRecoilState } from "recoil";

const CMD_KEY = "/";

export default function EditorBlock() {
  const [toggleBlur, setToggleBlur] = useRecoilState(toggleBlurState);
  const [smallText, setSmallText] = useRecoilState(smallTextState);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  return (
    <h1
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className={`editor-block ${smallText ? "text-sm" : "text-base"}`}
      style={{
        filter:
          !toggleBlur || hovered || focused
            ? "blur(0px) opacity(1)"
            : "blur(4px) opacity(0.3)",
        transitionDuration: hovered || focused ? "200ms" : null,
      }}
      contentEditable={true}
      placeholder="Type '/' for commands"
    >
      I am editable by the user
    </h1>
  );
}
