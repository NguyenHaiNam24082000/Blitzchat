import React, { useState } from "react";
import { Editor, EditorState, RichUtils, getDefaultKeyBinding } from "draft-js";
import {
  ActionIcon,
  Group,
  Button,
  Avatar,
  Badge,
  Divider,
} from "@mantine/core";
import {
  IconOrderedList,
  IconList,
  IconCode,
  IconLink,
  IconH1,
  IconH2,
  IconH3,
  IconClose,
  IconAt,
  IconArticle,
  IconImage,
} from "@douyinfe/semi-icons";
import { Star } from "iconsax-react";
import "draft-js/dist/Draft.css";
import "./RichTextEditor.css";
import Chamthan from "../../assets/images/chamthan.gif";
import Bell from "../../assets/images/bell.gif";
import {
  FaBold,
  FaSubscript,
  FaSuperscript,
  FaItalic,
  FaUnderline,
  FaQuoteLeft,
  FaStrikethrough,
  FaHighlighter,
  FaEraser,
  FaUndoAlt,
  FaRedoAlt,
  FaIndent,
  FaOutdent,
  FaExclamation,
  FaPaperclip,
  FaStar,
} from "react-icons/fa";
import { TiFlash } from "react-icons/ti";
import { MdGif } from "react-icons/md";
const BLOCK_TYPES = [
  { label: "H1", style: "header-one" },
  { label: "H2", style: "header-two" },
  { label: "H3", style: "header-three" },
  { label: "H4", style: "header-four" },
  { label: "H5", style: "header-five" },
  { label: "H6", style: "header-six" },
  { label: "Blockquote", style: "blockquote" },
  { label: "UL", style: "unordered-list-item" },
  { label: "OL", style: "ordered-list-item" },
  { label: "Code Block", style: "code-block" },
];

const styleRTE = {
  // border: "1px solid #c4c7c8",
  // border: "1px solid #ffb32b",
  border: "1px solid #f36",
  borderRadius: "4px",
  padding: "14px 16px",
  position: "relative",
};

export default function RichTextEditor() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const avatar = (
    <Avatar
      alt="Avatar for badge"
      size={24}
      style={{ marginRight: 5 }}
      // className="rounded-full"
      src="https://d10oy3rrrp8hu2.cloudfront.net/05b5a1114e1a50c01113d64df3ffcd1c_s195.jpg"
    />
  );
  const onTab = (e) => {
    if (e.keyCode === 9 /* TAB */) {
      // setEditorState(editorState => RichUtils.onTab(e, editorState, 4));
      return;
    }
    return getDefaultKeyBinding(e);
  };

  const onBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
    console.log("ABC");
  };
  const onItalicClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
    console.log("ABC");
  };
  const onUnderlineClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"));
    console.log("ABC");
  };
  const onH1Click = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "H!"));
    console.log("ABC");
  };
  //   const onBoldClick = () => {
  //     setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  //     console.log("ABC");
  //   };
  //   const onBoldClick = () => {
  //     setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  //     console.log("ABC");
  //   };
  //   const onBoldClick = () => {
  //     setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  //     console.log("ABC");
  //   };
  //   const onBoldClick = () => {
  //     setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  //     console.log("ABC");
  //   };
  //   const onBoldClick = () => {
  //     setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  //     console.log("ABC");
  //   };
  return (
    <div style={styleRTE}>
      <img
        src={Chamthan}
        alt="bell"
        style={{ width: 32 }}
        className="absolute -top-1 -right-4"
      />
      <Group spacing="xs">
        <Button variant="light" compact>
          Tag
        </Button>
        <Badge
          style={{ paddingRight: 3, paddingLeft: 0 }}
          classNames={{ leftSection: "flex items-center justify-center" }}
          size="lg"
          color="red"
          radius="sm"
          leftSection={
            <img src={Chamthan} alt="bell" style={{ width: 16 }} />
            // <IconAlertCircle />
          }
          rightSection={
            <ActionIcon
              size="xs"
              radius="xl"
              variant="transparent"
              style={{ color: "inherit" }}
            >
              <IconClose style={{ color: "inherit" }} size="small" />
            </ActionIcon>
          }
        >
          Important!!!
        </Badge>
        <Badge
          style={{ paddingRight: 3, paddingLeft: 0 }}
          classNames={{ leftSection: "flex items-center justify-center" }}
          size="lg"
          color="yellow"
          radius="sm"
          leftSection={
            <img src={Bell} alt="bell" style={{ width: 16 }} />
            // <IconAlertCircle />
          }
          rightSection={
            <ActionIcon
              size="xs"
              radius="xl"
              variant="transparent"
              style={{ color: "inherit" }}
            >
              <IconClose style={{ color: "inherit" }} size="small" />
            </ActionIcon>
          }
        >
          Emergency!!!
        </Badge>
        <Badge
          style={{ paddingRight: 3, paddingLeft: 0 }}
          size="lg"
          color="teal"
          radius="sm"
          leftSection={avatar}
          rightSection={
            <ActionIcon
              size="xs"
              style={{ color: "inherit" }}
              radius="xl"
              variant="transparent"
            >
              <IconClose style={{ color: "inherit" }} size="small" />
            </ActionIcon>
          }
        >
          Badge with Avatar
        </Badge>
      </Group>
      <Divider className="my-1" />
      <Group spacing="xs" className="mb-1">
        <Group spacing={0}>
          <ActionIcon
            className="text-gray-400 hover:text-gray-900"
            onClick={onBoldClick}
          >
            <FaBold />
          </ActionIcon>
          <ActionIcon
            className="text-gray-400 hover:text-gray-900"
            onClick={onItalicClick}
          >
            <FaItalic />
          </ActionIcon>
          <ActionIcon
            className="text-gray-400 hover:text-gray-900"
            onClick={onUnderlineClick}
          >
            <FaUnderline />
          </ActionIcon>
          <ActionIcon
            className="text-gray-400 hover:text-gray-900"
            onClick={onUnderlineClick}
          >
            <FaStrikethrough />
          </ActionIcon>
        </Group>
        <Divider orientation="vertical" className="flex items-center my-3" />
        <Group spacing={0}>
          <ActionIcon
            className="text-gray-400 hover:text-gray-900"
            onClick={onH1Click}
          >
            <FaHighlighter />
          </ActionIcon>
          <ActionIcon
            className="text-gray-400 hover:text-gray-900"
            onClick={onBoldClick}
          >
            <FaEraser />
          </ActionIcon>
        </Group>
        <Divider orientation="vertical" className="flex items-center my-3" />
        <Group spacing={0}>
          <ActionIcon
            className="text-gray-400 hover:text-gray-900"
            onClick={onH1Click}
          >
            <IconH1 />
          </ActionIcon>
          <ActionIcon
            className="text-gray-400 hover:text-gray-900"
            onClick={onBoldClick}
          >
            <IconH2 />
          </ActionIcon>
          <ActionIcon
            className="text-gray-400 hover:text-gray-900"
            onClick={onBoldClick}
          >
            <IconH3 />
          </ActionIcon>
        </Group>
        <Divider orientation="vertical" className="flex items-center my-3" />
        <Group spacing={0}>
          <ActionIcon
            className="text-gray-400 hover:text-gray-900"
            onClick={onBoldClick}
          >
            <FaQuoteLeft />
          </ActionIcon>
          <ActionIcon
            className="text-gray-400 hover:text-gray-900"
            onClick={onBoldClick}
          >
            <IconCode />
          </ActionIcon>
          <ActionIcon
            className="text-gray-400 hover:text-gray-900"
            onClick={onBoldClick}
          >
            <IconLink />
          </ActionIcon>
        </Group>
        <Divider orientation="vertical" className="flex items-center my-3" />
        <Group spacing={0}>
          <ActionIcon
            className="text-gray-400 hover:text-gray-900"
            onClick={onBoldClick}
          >
            <FaOutdent />
          </ActionIcon>
          <ActionIcon
            className="text-gray-400 hover:text-gray-900"
            onClick={onBoldClick}
          >
            <FaIndent />
          </ActionIcon>
          <ActionIcon
            className="text-gray-400 hover:text-gray-900"
            onClick={onBoldClick}
          >
            <IconList />
          </ActionIcon>
          <ActionIcon
            className="text-gray-400 hover:text-gray-900"
            onClick={onBoldClick}
          >
            <IconOrderedList />
          </ActionIcon>
        </Group>
        <Divider orientation="vertical" className="flex items-center my-3" />
        <Group spacing={0}>
          <ActionIcon
            className="text-gray-400 hover:text-gray-900"
            onClick={onBoldClick}
          >
            <FaSubscript />
          </ActionIcon>
          <ActionIcon
            className="text-gray-400 hover:text-gray-900"
            onClick={onBoldClick}
          >
            <FaSuperscript />
          </ActionIcon>
        </Group>
        <Divider orientation="vertical" className="flex items-center my-3" />
        <Group spacing={0}>
          <ActionIcon
            className="text-gray-400 hover:text-gray-900"
            onClick={onBoldClick}
          >
            <FaUndoAlt />
          </ActionIcon>
          <ActionIcon
            className="text-gray-400 hover:text-gray-900"
            onClick={onBoldClick}
          >
            <FaRedoAlt />
          </ActionIcon>
        </Group>
      </Group>
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        // keyBindingFn={(e) => {
        //   mapKeyToEditorCommand(e);
        // }}
        onTab={(e) => onTab(e)}
        placeholder='Type "/" for actions'
      />
      <Group spacing={0} className="mt-1">
        <ActionIcon className="text-gray-400 hover:text-gray-900">
          <IconArticle size="default" />
        </ActionIcon>
        <ActionIcon className="text-gray-400 hover:text-gray-900">
          <TiFlash size={20} />
        </ActionIcon>
        <ActionIcon
          className="text-gray-400 hover:text-gray-900"
          onClick={onBoldClick}
        >
          <FaExclamation size={16} />
        </ActionIcon>
        <ActionIcon
          className="text-gray-400 hover:text-gray-900"
          onClick={onBoldClick}
        >
          <IconImage />
        </ActionIcon>
        <ActionIcon
          className="text-gray-400 hover:text-gray-900"
          onClick={onBoldClick}
        >
          <FaPaperclip size={16} />
        </ActionIcon>
        <ActionIcon
          className="text-gray-400 hover:text-gray-900"
          onClick={onBoldClick}
        >
          <IconAt />
        </ActionIcon>
        <ActionIcon
          onClick={onBoldClick}
          className="text-gray-400 hover:text-gray-900"
        >
          <FaStar size={16} />
        </ActionIcon>
        <ActionIcon
          onClick={onBoldClick}
          className="text-gray-400 hover:text-gray-900"
        >
          <MdGif size={32} />
        </ActionIcon>
      </Group>
    </div>
  );
}
