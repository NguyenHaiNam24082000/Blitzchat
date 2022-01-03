import ContentEditable from "react-contenteditable";
import React, { useState, useRef } from "react";
import { Draggable } from "react-beautiful-dnd";
import {
  toggleBlurState,
  smallTextState,
} from "../../../recoils/controlsState";
import { useRecoilState } from "recoil";
import TagSelectorMenu from "../TagSelectorMenu";

const CMD_KEY = "/";

export default function EditorBlock({ id, deleteBlock, addBlock }) {
  const contentEditableRef = useRef();
  const [html, setHtml] = useState("");
  const [htmlBackup, setHtmlBackup] = useState("");
  const [tag, setTag] = useState("p");
  const [imageUrl, setImageUrl] = useState("");
  const [previousKey, setPreviousKey] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [tagSelectorMenuOpen, setTagSelectorMenuOpen] = useState(false);
  const [tagSelectorMenuPosition, setTagSelectorMenuPosition] = useState({
    x: null,
    y: null,
  });
  const [actionMenuOpen, setActionMenuOpen] = useState(false);
  const [actionMenuPosition, setActionMenuPosition] = useState({
    x: null,
    y: null,
  });
  const [toggleBlur, setToggleBlur] = useRecoilState(toggleBlurState);
  const [smallText, setSmallText] = useRecoilState(smallTextState);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const handleChange = (e) => {
    setHtml(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === CMD_KEY) {
      // If the user starts to enter a command, we store a backup copy of
      // the html. We need this to restore a clean version of the content
      // after the content type selection was finished.
      setHtmlBackup(html);
    } else if (e.key === "Backspace" && !html) {
      deleteBlock({ id: id });
    } else if (
      e.key === "Enter" &&
      previousKey !== "Shift" &&
      !tagSelectorMenuOpen
    ) {
      // If the user presses Enter, we want to add a new block
      // Only the Shift-Enter-combination should add a new paragraph,
      // i.e. Shift-Enter acts as the default enter behaviour
      e.preventDefault();
      addBlock({
        id: id,
        html: html,
        tag: tag,
        imageUrl: imageUrl,
        ref: contentEditableRef.current,
      });
    }
    // We need the previousKey to detect a Shift-Enter-combination
    setPreviousKey(e.key);
  };

  // const handleFocus = (e) => {

  return (
    <ContentEditable
      ref={contentEditableRef}
      html={html}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
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
      // contentEditable={true}
      // placeholder="Type '/' for commands"
    />
  );
}
