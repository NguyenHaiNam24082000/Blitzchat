import React, { useState, useRef } from "react";
import { RichUtils, getDefaultKeyBinding } from "draft-js";
import Editor, { createEditorStateWithText } from "@draft-js-plugins/editor";
import createMentionPlugin, {
  defaultSuggestionsFilter,
} from "@draft-js-plugins/mention";
import createSideToolbarPlugin from "@draft-js-plugins/side-toolbar";
import { Dropdown, Tag } from "@douyinfe/semi-ui";
import {
  ActionIcon,
  Group,
  Button,
  Image,
  Avatar,
  Badge,
  Divider,
  Popover,
  Menu,
  Popper,
  MenuItem,
  MenuLabel,
  Text,
  Tooltip,
} from "@mantine/core";
import {
  IconOrderedList,
  IconList,
  IconCode,
  IconLink,
  IconH1,
  IconH2,
  IconH3,
  IconHn,
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
  FaSquareRootAlt,
} from "react-icons/fa";
import { TiFlash } from "react-icons/ti";
import { MdGif } from "react-icons/md";
import createInlineToolbarPlugin from "@draft-js-plugins/inline-toolbar";
import editorStyles from "./editorStyles.module.css";
import buttonStyles from "./buttonStyles.module.css";
// import buttonStylesInlineToolbar from "./buttonStylesInlineToolbar.module.css";
import toolbarStyles from "./toolbarStyles.module.css";
import blockTypeSelectStyles from "./blockTypeSelectStyles.module.css";
import createCounterPlugin from "@draft-js-plugins/counter";
import createUndoPlugin from "@draft-js-plugins/undo";
import createMarkdownShortcutsPlugin from "draft-js-markdown-shortcuts-plugin";
import createAutoListPlugin from "draft-js-autolist-plugin";
import createHashtagPlugin from "@draft-js-plugins/hashtag";
import "@draft-js-plugins/hashtag/lib/plugin.css";
import Prism from 'prismjs';
import PrismDecorator from 'draft-js-prism';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-scala';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-kotlin';
import 'prismjs/components/prism-perl';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-swift';
import './prism.css';
// import createPrismPlugin from 'draft-js-prism-plugin';
const prismPlugin = {
  decorators: [
    new PrismDecorator({
      prism: Prism,
      getSyntax(block) {
        const language = block.getData().get('language');
        if (typeof Prism.languages[language] === 'object') {
          return language;
        }
        return null;
      },
      render({ type, children }) {
        return <span className={`prism-token token ${type}`}>{children}</span>;
      },
    }),
  ],
};
const hashtagPlugin = createHashtagPlugin();
const autoListPlugin = createAutoListPlugin();
// const counterPlugin = createCounterPlugin();
// const { CustomCounter } = counterPlugin;
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
const markdownShortcutsPlugin = createMarkdownShortcutsPlugin();
const sideToolbarPlugin = createSideToolbarPlugin({
  theme: { buttonStyles, toolbarStyles, blockTypeSelectStyles },
});
const inlineToolbarPlugin = createInlineToolbarPlugin({
  theme: { toolbarStyles },
});
const undoPlugin = createUndoPlugin({
  undoContent: (
    <ActionIcon className="text-gray-400 hover:text-gray-900">
      <FaUndoAlt />
    </ActionIcon>
  ),
  redoContent: (
    <ActionIcon className="text-gray-400 hover:text-gray-900">
      <FaRedoAlt />
    </ActionIcon>
  ),
});
const { UndoButton, RedoButton } = undoPlugin;
const { InlineToolbar } = inlineToolbarPlugin;
const { SideToolbar } = sideToolbarPlugin;
const mentionPlugin = createMentionPlugin({ mentionTrigger: ["@", "("] });
const { MentionSuggestions } = mentionPlugin;
const plugins = [
  prismPlugin,
  hashtagPlugin,
  sideToolbarPlugin,
  mentionPlugin,
  inlineToolbarPlugin,
  undoPlugin,
  markdownShortcutsPlugin,
  autoListPlugin,
];
const readingTime = (text) => {
  //According to a speed-reading test sponsored by Staples as part of an e-book promotion, here are the typical speeds at which humans read, and in theory comprehend, at various stages of educational development :

  // Third-grade students = 150 words per minute (wpm)
  // Eighth grade students = 250 wpm
  // Average college student = 450 wpm
  // Average "high-level exec" = 575 wpm
  // Average college professor = 675 wpm
  // Speed readers = 1,500 wpm
  // World speed reading champion = 4,700 wpm
  // Average adult = 300 wpm
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
};

export default function RichTextEditor1() {
  //   const [editorState, setEditorState] = useState(() =>
  //     EditorState.createEmpty()
  //   );
  const text = "";
  const [editorState, setEditorState] = useState(() =>
    createEditorStateWithText(text)
  );
  const editor = useRef();
  const avatar = (
    <Avatar
      alt="Avatar for badge"
      size={24}
      style={{ marginRight: 5 }}
      // className="rounded-full"
      src="https://d10oy3rrrp8hu2.cloudfront.net/05b5a1114e1a50c01113d64df3ffcd1c_s195.jpg"
    />
  );
  //   const onTab = (e) => {
  //     if (e.keyCode === 9 /* TAB */) {
  //       // setEditorState(editorState => RichUtils.onTab(e, editorState, 4));
  //       return;
  //     }
  //     return getDefaultKeyBinding(e);
  //   };
  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return true;
    }
    return false;
  };
  const onChange = (editorState) => {
    setEditorState(editorState);
  };

  const onBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
    console.log("ABC");
  };
  //   const onItalicClick = () => {
  //     setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
  //     console.log("ABC");
  //   };
  //   const onUnderlineClick = () => {
  //     setEditorState(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"));
  //     console.log("ABC");
  //   };
  //   const onH1Click = () => {
  //     setEditorState(RichUtils.toggleInlineStyle(editorState, "H!"));
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
          <ActionIcon className="text-gray-400 hover:text-gray-900">
            <FaItalic />
          </ActionIcon>
          <ActionIcon className="text-gray-400 hover:text-gray-900">
            <FaUnderline />
          </ActionIcon>
          <ActionIcon className="text-gray-400 hover:text-gray-900">
            <FaStrikethrough />
          </ActionIcon>
        </Group>
        <Divider orientation="vertical" className="flex items-center my-2" />
        <Group spacing={0}>
          <ActionIcon className="text-gray-400 hover:text-gray-900">
            <FaHighlighter />
          </ActionIcon>
          <ActionIcon className="text-gray-400 hover:text-gray-900">
            <FaEraser />
          </ActionIcon>
        </Group>
        <Divider orientation="vertical" className="flex items-center my-2" />
        <Group spacing={0}>
          <ActionIcon className="text-gray-400 hover:text-gray-900">
            <IconH1 />
          </ActionIcon>
          <ActionIcon className="text-gray-400 hover:text-gray-900">
            <IconH2 />
          </ActionIcon>
          <ActionIcon className="text-gray-400 hover:text-gray-900">
            <IconH3 />
          </ActionIcon>
        </Group>
        <Divider orientation="vertical" className="flex items-center my-2" />
        <Group spacing={0}>
          <ActionIcon className="text-gray-400 hover:text-gray-900">
            <FaQuoteLeft />
          </ActionIcon>
          <ActionIcon className="text-gray-400 hover:text-gray-900">
            <IconCode />
          </ActionIcon>
          <ActionIcon className="text-gray-400 hover:text-gray-900">
            <IconLink />
          </ActionIcon>
        </Group>
        <Divider orientation="vertical" className="flex items-center my-2" />
        <Group spacing={0}>
          <ActionIcon className="text-gray-400 hover:text-gray-900">
            <FaOutdent />
          </ActionIcon>
          <ActionIcon className="text-gray-400 hover:text-gray-900">
            <FaIndent />
          </ActionIcon>
          <ActionIcon className="text-gray-400 hover:text-gray-900">
            <IconList />
          </ActionIcon>
          <ActionIcon className="text-gray-400 hover:text-gray-900">
            <IconOrderedList />
          </ActionIcon>
        </Group>
        <Divider orientation="vertical" className="flex items-center my-2" />
        <Group spacing={0}>
          <ActionIcon className="text-gray-400 hover:text-gray-900">
            <FaSubscript />
          </ActionIcon>
          <ActionIcon className="text-gray-400 hover:text-gray-900">
            <FaSuperscript />
          </ActionIcon>
          <ActionIcon className="text-gray-400 hover:text-gray-900">
            <FaSquareRootAlt />
          </ActionIcon>
        </Group>
        <Divider orientation="vertical" className="flex items-center my-2" />
        <Group spacing={0}>
          <UndoButton />
          <RedoButton />
        </Group>
      </Group>
      <div className={editorStyles.editor}>
        <Editor
          editorState={editorState}
          onChange={onChange}
          handleKeyCommand={handleKeyCommand}
          // keyBindingFn={(e) => {
          //   mapKeyToEditorCommand(e);
          // }}
          // onTab={(e) => onTab(e)}
          plugins={plugins}
          placeholder='Type "/" for actions'
          spellCheck={true}
          ref={(element) => {
            editor.current = element;
          }}
        />
        <SideToolbar>
          {
            // may be use React.Fragment instead of div to improve perfomance after React 16
            (externalProps) => (
              <div
                className="flex flex-col bg-white w-64 p-1 overflow-y-auto overflow-x-hidden"
                style={{
                  borderRadius: 4,
                  border: "1px solid rgb(233, 236, 239)",
                  maxHeight: "300px",
                  boxShadow:
                    "rgb(0 0 0 / 5%) 0px 1px 3px, rgb(0 0 0 / 5%) 0px 20px 25px -5px, rgb(0 0 0 / 4%) 0px 10px 10px -5px",
                }}
              >
                <Button
                  className="bg-transparent text-black hover:bg-gray-200 flex h-auto pl-1 py-1"
                  onClick={onBoldClick}
                  leftIcon={
                    <Image
                      style={{
                        boxShadow: "rgb(15 15 15 / 10%) 0px 0px 0px 1px",
                        borderRadius: 4,
                      }}
                      src="https://www.notion.so/images/blocks/text.9fdb530b.png"
                      alt="Random unsplash image"
                      width={46}
                      height={46}
                    />
                  }
                >
                  <div className="flex flex-col truncate justify-center items-start">
                    <div className="font-bold text-sm truncate">Text</div>
                    <div className="text-2xs truncate text-gray-500">
                      just start writing with plain text
                    </div>
                  </div>
                </Button>
                <Button
                  className="bg-transparent text-black hover:bg-gray-200 flex h-auto pl-1 py-1"
                  leftIcon={
                    <Image
                      style={{
                        boxShadow: "rgb(15 15 15 / 10%) 0px 0px 0px 1px",
                        borderRadius: 4,
                      }}
                      src="https://www.notion.so/images/blocks/text.9fdb530b.png"
                      alt="Random unsplash image"
                      width={46}
                      height={46}
                    />
                  }
                >
                  Text
                </Button>
                <Button
                  className="bg-transparent text-black hover:bg-gray-200 flex h-auto pl-1 py-1"
                  leftIcon={
                    <Image
                      style={{
                        boxShadow: "rgb(15 15 15 / 10%) 0px 0px 0px 1px",
                        borderRadius: 4,
                      }}
                      src="https://www.notion.so/images/blocks/text.9fdb530b.png"
                      alt="Random unsplash image"
                      width={46}
                      height={46}
                    />
                  }
                >
                  Text
                </Button>
                <Button
                  className="bg-transparent text-black hover:bg-gray-200 flex h-auto pl-1 py-1"
                  leftIcon={
                    <Image
                      style={{
                        boxShadow: "rgb(15 15 15 / 10%) 0px 0px 0px 1px",
                        borderRadius: 4,
                      }}
                      src="https://www.notion.so/images/blocks/text.9fdb530b.png"
                      alt="Random unsplash image"
                      width={46}
                      height={46}
                    />
                  }
                >
                  Text
                </Button>
                <Button
                  className="bg-transparent text-black hover:bg-gray-200 flex h-auto pl-1 py-1"
                  leftIcon={
                    <Image
                      style={{
                        boxShadow: "rgb(15 15 15 / 10%) 0px 0px 0px 1px",
                        borderRadius: 4,
                      }}
                      src="https://www.notion.so/images/blocks/text.9fdb530b.png"
                      alt="Random unsplash image"
                      width={46}
                      height={46}
                    />
                  }
                >
                  Text
                </Button>
                <Button
                  className="bg-transparent text-black hover:bg-gray-200 flex h-auto pl-1 py-1"
                  leftIcon={
                    <Image
                      style={{
                        boxShadow: "rgb(15 15 15 / 10%) 0px 0px 0px 1px",
                        borderRadius: 4,
                      }}
                      src="https://www.notion.so/images/blocks/text.9fdb530b.png"
                      alt="Random unsplash image"
                      width={46}
                      height={46}
                    />
                  }
                >
                  Text
                </Button>
                <Button
                  className="bg-transparent text-black hover:bg-gray-200 flex h-auto pl-1 py-1"
                  leftIcon={
                    <Image
                      style={{
                        boxShadow: "rgb(15 15 15 / 10%) 0px 0px 0px 1px",
                        borderRadius: 4,
                      }}
                      src="https://www.notion.so/images/blocks/text.9fdb530b.png"
                      alt="Random unsplash image"
                      width={46}
                      height={46}
                    />
                  }
                >
                  Text
                </Button>
                <Button
                  className="bg-transparent text-black hover:bg-gray-200 flex h-auto pl-1 py-1"
                  leftIcon={
                    <Image
                      style={{
                        boxShadow: "rgb(15 15 15 / 10%) 0px 0px 0px 1px",
                        borderRadius: 4,
                      }}
                      src="https://www.notion.so/images/blocks/text.9fdb530b.png"
                      alt="Random unsplash image"
                      width={46}
                      height={46}
                    />
                  }
                >
                  Text
                </Button>
                <Button
                  className="bg-transparent text-black hover:bg-gray-200 flex h-auto pl-1 py-1"
                  leftIcon={
                    <Image
                      style={{
                        boxShadow: "rgb(15 15 15 / 10%) 0px 0px 0px 1px",
                        borderRadius: 4,
                      }}
                      src="https://www.notion.so/images/blocks/text.9fdb530b.png"
                      alt="Random unsplash image"
                      width={46}
                      height={46}
                    />
                  }
                >
                  Text
                </Button>
                <Button
                  className="bg-transparent text-black hover:bg-gray-200 flex h-auto pl-1 py-1"
                  leftIcon={
                    <Image
                      style={{
                        boxShadow: "rgb(15 15 15 / 10%) 0px 0px 0px 1px",
                        borderRadius: 4,
                      }}
                      src="https://www.notion.so/images/blocks/text.9fdb530b.png"
                      alt="Random unsplash image"
                      width={46}
                      height={46}
                    />
                  }
                >
                  Text
                </Button>
                <Button
                  className="bg-transparent text-black hover:bg-gray-200 flex h-auto pl-1 py-1"
                  leftIcon={
                    <Image
                      style={{
                        boxShadow: "rgb(15 15 15 / 10%) 0px 0px 0px 1px",
                        borderRadius: 4,
                      }}
                      src="https://www.notion.so/images/blocks/text.9fdb530b.png"
                      alt="Random unsplash image"
                      width={46}
                      height={46}
                    />
                  }
                >
                  Text
                </Button>
              </div>
            )
          }
        </SideToolbar>
        <InlineToolbar>
          {
            // may be use React.Fragment instead of div to improve perfomance after React 16
            (externalProps) => (
              <div
                className="flex bg-white h-8"
                style={{
                  borderRadius: 4,
                  border: "1px solid rgb(233, 236, 239)",
                  width: "100%",
                  boxShadow:
                    "rgb(0 0 0 / 5%) 0px 1px 3px, rgb(0 0 0 / 5%) 0px 20px 25px -5px, rgb(0 0 0 / 4%) 0px 10px 10px -5px",
                }}
              >
                <Group spacing="xs" className="mb-1">
                  <Group spacing={0}>
                    <ActionIcon
                      size={30}
                      className="text-gray-400 hover:text-gray-900"
                      onClick={onBoldClick}
                    >
                      <FaBold />
                    </ActionIcon>
                    <ActionIcon
                      size={30}
                      className="text-gray-400 hover:text-gray-900"
                    >
                      <FaItalic />
                    </ActionIcon>
                    <ActionIcon
                      size={30}
                      className="text-gray-400 hover:text-gray-900"
                    >
                      <FaUnderline />
                    </ActionIcon>
                    <ActionIcon
                      size={30}
                      className="text-gray-400 hover:text-gray-900"
                    >
                      <FaStrikethrough />
                    </ActionIcon>
                  </Group>
                  <Divider
                    orientation="vertical"
                    className="flex items-center my-2"
                  />
                  <Group spacing={0}>
                    <ActionIcon
                      size={30}
                      className="text-gray-400 hover:text-gray-900"
                    >
                      <IconHn />
                    </ActionIcon>
                  </Group>
                  <Divider
                    orientation="vertical"
                    className="flex items-center my-2"
                  />
                  <Group spacing={0}>
                    <ActionIcon
                      size={30}
                      className="text-gray-400 hover:text-gray-900"
                    >
                      <FaQuoteLeft />
                    </ActionIcon>
                    <ActionIcon
                      size={30}
                      className="text-gray-400 hover:text-gray-900"
                    >
                      <IconCode />
                    </ActionIcon>
                    <ActionIcon
                      size={30}
                      className="text-gray-400 hover:text-gray-900"
                    >
                      <IconLink />
                    </ActionIcon>
                  </Group>
                  <Divider
                    orientation="vertical"
                    className="flex items-center my-2"
                  />
                  <Group spacing={0}>
                    <ActionIcon className="text-gray-400 hover:text-gray-900">
                      <FaSquareRootAlt />
                    </ActionIcon>
                  </Group>
                  <Divider
                    orientation="vertical"
                    className="flex items-center my-2"
                  />
                  <Menu
                    classNames={{
                      item: "py-1 w-full",
                      itemInner: "w-full",
                      itemBody: "w-full",
                      itemLabel: "w-full",
                    }}
                    position="top"
                    placement="center"
                    trigger="hover"
                    delay={500}
                    closeOnScroll={false}
                    size="xl"
                  >
                    <Menu.Label>Application</Menu.Label>
                    <Menu.Item>
                      <div className="flex w-full h-full items-center ">
                        <Tooltip
                          gutter={20}
                          label={
                            <Image
                              style={{
                                boxShadow:
                                  "rgb(15 15 15 / 10%) 0px 0px 0px 1px",
                                borderRadius: 4,
                              }}
                              src="https://www.notion.so/images/blocks/text.9fdb530b.png"
                              alt="Random unsplash image"
                              width={145}
                              height={100}
                            />
                          }
                          position="left"
                        >
                          <Image
                            style={{
                              boxShadow: "rgb(15 15 15 / 10%) 0px 0px 0px 1px",
                              borderRadius: 4,
                            }}
                            src="https://www.notion.so/images/blocks/text.9fdb530b.png"
                            alt="Random unsplash image"
                            width={22}
                            height={22}
                          />
                        </Tooltip>
                        <div
                          className="ml-2"
                          style={{ width: "calc(100% - 30px)" }}
                        >
                          Text
                        </div>
                      </div>
                    </Menu.Item>
                    <Menu.Item>Messages</Menu.Item>
                    <Menu.Item>Gallery</Menu.Item>
                    <Menu.Item>Gallery</Menu.Item>
                    <Menu.Item>Gallery</Menu.Item>
                    <Menu.Item>Gallery</Menu.Item>
                    <Menu.Item>Gallery</Menu.Item>
                    <Menu.Item>Gallery</Menu.Item>
                    <Menu.Item>Gallery</Menu.Item>
                    <Menu.Item>Gallery</Menu.Item>
                    <Menu.Item>Gallery</Menu.Item>
                  </Menu>
                </Group>
              </div>
            )
          }
        </InlineToolbar>
      </div>
      <div className="flex mt-1 justify-between items-center">
        <Group spacing={0}>
          <ActionIcon className="text-gray-400 hover:text-gray-900">
            <IconArticle size="default" />
          </ActionIcon>
          <ActionIcon className="text-gray-400 hover:text-gray-900">
            <TiFlash size={20} />
          </ActionIcon>
          <ActionIcon
            className="text-gray-400 hover:text-gray-900"
            //
          >
            <FaExclamation size={16} />
          </ActionIcon>
          <ActionIcon
            className="text-gray-400 hover:text-gray-900"
            //
          >
            <IconImage />
          </ActionIcon>
          <ActionIcon
            className="text-gray-400 hover:text-gray-900"
            //   onClick={onBoldClick}
          >
            <FaPaperclip size={16} />
          </ActionIcon>
          <ActionIcon className="text-gray-400 hover:text-gray-900">
            <IconAt />
          </ActionIcon>
          <ActionIcon className="text-gray-400 hover:text-gray-900">
            <FaStar size={16} />
          </ActionIcon>
          <ActionIcon className="text-gray-400 hover:text-gray-900">
            <MdGif size={32} />
          </ActionIcon>
        </Group>
        <div>
          {/* <CustomCounter countFunction={readingTime} /> */}
          <span> mins reading</span>
        </div>
      </div>
    </div>
  );
}
