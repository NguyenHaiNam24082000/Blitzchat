import React, { useState } from "react";
import Dock from "../Dock/Dock";
import "./Note.css";
import Selecto from "react-selecto";
import { Banner } from "@douyinfe/semi-ui";
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import EditorBlock from "./EditorBlock/EditorBlock";
import {
  Switch,
  Button,
  Image,
  Menu,
  ActionIcon,
  Text,
  Divider,
  Drawer,
} from "@mantine/core";
import {
  ChatBubbleIcon,
  CounterClockwiseClockIcon,
  DotsHorizontalIcon,
  TrashIcon,
} from "@modulz/radix-icons";
import { useModals } from "@mantine/modals";
import {
  toggleBlurState,
  smallTextState,
  fullWidthState,
} from "../../recoils/controlsState";
import { useRecoilState } from "recoil";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Note() {
  const deleteModal = useModals();
  const [toggleBlur, setToggleBlur] = useRecoilState(toggleBlurState);
  const [smallText, setSmallText] = useRecoilState(smallTextState);
  const [fullWidth, setFullWidth] = useRecoilState(fullWidthState);
  const [openedComments, setOpenedComments] = useState(false);
  const [openedHistory, setOpenedHistory] = useState(false);
  const openDeleteModal = () => {
    deleteModal.openConfirmModal({
      title: "Delete your profile",
      children: (
        <Text size="sm">
          Are you sure you want to delete your profile? This action is
          destructive and you will have to contact support to restore your data.
        </Text>
      ),
      labels: { confirm: "Delete account", cancel: "No don't delete it" },
      confirmProps: { color: "red" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => console.log("Confirmed"),
    });
  };
  return (
    <div
      className="relative h-full bg-white overflow-hidden flex flex-col flex-shrink-0"
      style={{ width: "calc(100% - 240px)" }}
    >
      <div className="w-full h-12 flex items-center justify-between px-3 flex-shrink-0">
        <Button
          leftIcon={
            <Image
              width={18}
              height={18}
              withPlaceholder
              fit="cover"
              src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fabc20e77-8715-4749-a134-f325bbd5f467%2FFrame_9.png?table=block&id=e084471a-84f8-44f0-9984-9d4bcb00209f&spaceId=86d76048-41ba-4806-8699-e4485dce59df&width=40&userId=b382d89d-5014-4226-bfd6-35b709b7e34f&cache=v2"
            />
          }
          variant="default"
          compact
          className="border-none"
        >
          Abc
        </Button>
        <div className="flex w-auto">
          <ActionIcon onClick={() => setOpenedHistory(!openedHistory)}>
            <CounterClockwiseClockIcon />
          </ActionIcon>
          <ActionIcon onClick={() => setOpenedComments(!openedComments)}>
            <ChatBubbleIcon />
          </ActionIcon>
          <Menu
            closeOnItemClick={false}
            position="left"
            size="lg"
            control={
              <ActionIcon>
                <DotsHorizontalIcon />
              </ActionIcon>
            }
          >
            <Menu.Label>STYLE</Menu.Label>
            <Divider />
            <Menu.Item
              rightSection={
                <Switch
                  checked={smallText}
                  onChange={(event) =>
                    setSmallText(event.currentTarget.checked)
                  }
                />
              }
            >
              Small Text
            </Menu.Item>
            <Menu.Item
              rightSection={
                <Switch
                  className="cursor-pointer"
                  checked={fullWidth}
                  onChange={(event) =>
                    setFullWidth(event.currentTarget.checked)
                  }
                />
              }
            >
              Full Width
            </Menu.Item>
            <Divider />
            <Menu.Item
              rightSection={
                <Switch
                  className="cursor-pointer"
                  checked={toggleBlur}
                  onChange={(event) =>
                    setToggleBlur(event.currentTarget.checked)
                  }
                />
              }
            >
              Toggle Blur
            </Menu.Item>
            <Divider />
            <Menu.Item>Messages</Menu.Item>
            <Menu.Item>Gallery</Menu.Item>
            <Menu.Item
              rightSection={
                <Text size="xs" color="gray">
                  ⌘K
                </Text>
              }
            >
              Search
            </Menu.Item>
            <Divider />
            <Menu.Label>Danger zone</Menu.Label>
            <Menu.Item>Transfer my data</Menu.Item>,
            <Menu.Item
              onClick={openDeleteModal}
              color="red"
              icon={<TrashIcon />}
            >
              Delete this note
            </Menu.Item>
          </Menu>
        </div>
      </div>
      <DropDownMenu />
      <Banner
        className="h-8 flex items-center justify-between"
        type="warning"
        icon={null}
        description="Hey 👋 You can type '/' for commands."
      />
      <Selecto
        dragContainer={".editor-group"}
        selectableTargets={[".editor-group h1"]}
        hitRate={100}
        selectByClick={true}
        selectFromInside={true}
        toggleContinueSelect={["shift"]}
        ratio={0}
        onSelect={(e) => {
          e.added.forEach((el) => {
            el.classList.add("editor-selected");
          });
          e.removed.forEach((el) => {
            el.classList.remove("editor-selected");
          });
        }}
      ></Selecto>
      <div
        className="editor-group w-full flex flex-col items-center overflow-y-auto pb-28"
        style={{ height: "calc(100% - 50px)" }}
      >
        <div
          className={`${fullWidth ? "w-4/5" : "w-3/5"} h-auto`}
          style={{ transition: "width 0.3s linear" }}
        >
          <EditorBlock />
          <EditorBlock />
          <EditorBlock />
          <EditorBlock />
          <EditorBlock />
          <EditorBlock />
          <EditorBlock />
          <EditorBlock />
          <EditorBlock />
          <EditorBlock />
          <EditorBlock />
          <EditorBlock />
          <EditorBlock />
          <EditorBlock />
          <EditorBlock />
          <EditorBlock />
          <EditorBlock />
          <EditorBlock />
          <EditorBlock />
          <EditorBlock />
          <EditorBlock />
          <EditorBlock />
          <EditorBlock />
          <EditorBlock />
          <EditorBlock />
          <EditorBlock />
          <EditorBlock />
          <EditorBlock />
          <EditorBlock />
          <EditorBlock />
          <EditorBlock />
          <EditorBlock />
          <EditorBlock />
          <EditorBlock />
          <EditorBlock />
        </div>
      </div>
      <Dock />
      <Drawer
        opened={openedComments}
        onClose={() => setOpenedComments(false)}
        title="Comments"
        padding="md"
        shadow="xs"
        noOverlay
        noFocusTrap
        noScrollLock
      ></Drawer>
      <Drawer
        opened={openedHistory}
        onClose={() => setOpenedHistory(false)}
        title="History"
        padding="md"
        shadow="xs"
        noOverlay
        noFocusTrap
        noScrollLock
      ></Drawer>
    </div>
  );
}
