import React, { useState, useRef } from "react";
import {
  Button,
  Group,
  useMantineTheme,
  Popover,
  Text,
  Image,
  Tooltip,
  ActionIcon,
  Menu,
  Divider,
} from "@mantine/core";
import { IconPlus, IconHandle } from "@douyinfe/semi-icons";
import {
  TrashIcon,
  StackIcon,
  LoopIcon,
  TriangleRightIcon,
  FileIcon,
  Link1Icon,
  PinRightIcon,
} from "@modulz/radix-icons";
import { GrPaint } from "react-icons/gr";
import { useClickOutside } from "@mantine/hooks";
import "./DropDownMenu.css";

const colorOptions = {
  lastUsed:
  [
    {
      label: "Default",
      color: "black",
    }
  ],
  textColor: [
    {
      label: "Default",
      color: "black",
    },
    {
      label: "Red",
      color: "#FF968A",
    },
    {
      label: "Green",
      color: "#CCE2CB",
    },
    {
      label: "Yellow",
      color: "#FFFFB5",
    },
    {
      label: "Blue",
      color: "#ABDEE6",
    },
    {
      label: "Gray",
      color: "#787774",
    },
    {
      label: "Brown",
      color: "#BBAC9B",
    },
    {
      label: "Orange",
      color: "#FFC8A2",
    },
    {
      label: "Purple",
      color: "#CBAACB",
    },
    {
      label: "Pink",
      color: "#F3B0C3",
    },
  ],
  backgroundColor: [
    {
      label: "Default background",
      color: "white",
    },
    {
      label: "Red background",
      color: "#FF968A",
    },
    {
      label: "Green background",
      color: "#CCE2CB",
    },
    {
      label: "Yellow background",
      color: "#FFFFB5",
    },
    {
      label: "Blue background",
      color: "#ABDEE6",
    },
    {
      label: "Gray background",
      color: "#787774",
    },
    {
      label: "Brown background",
      color: "#BBAC9B",
    },
    {
      label: "Orange background",
      color: "#FFC8A2",
    },
    {
      label: "Purple background",
      color: "#CBAACB",
    },
    {
      label: "Pink background",
      color: "#F3B0C3",
    },
  ],
};

export default function DropDownMenu() {
  const [referenceElement, setReferenceElement] = useState(null);
  const [visible, setVisible] = useState(true);
  const ref = useClickOutside(() => setVisible(false));
  const menuRef = useRef(null);
  const theme = useMantineTheme();

  return (
    <Group spacing={0}>
      <Popover
        opened={visible}
        position="bottom"
        placement="start"
        classNames={{ body: "w-80 h-80 overflow-y-auto" }}
        spacing="xs"
        gutter={5}
        target={
          <Tooltip
            label={
              <div className="text-center">
                <b>Click</b> to add a block below
              </div>
            }
          >
            <ActionIcon ref={ref} onClick={() => setVisible((m) => !m)}>
              <IconPlus />
            </ActionIcon>
          </Tooltip>
        }
      >
        <Button
          classNames={{ label: "w-full" }}
          leftIcon={
            <Image
              style={{
                borderRadius: 4,
                boxShadow: "rgb(15 15 15 / 10%) 0px 0px 0px 1px",
              }}
              width={46}
              height={46}
              withPlaceholde={true}
              src="https://www.notion.so/images/blocks/text.9fdb530b.png"
            />
          }
          variant="default"
          fullWidth={true}
          className="border-0 h-auto py-1 pl-2"
        >
          <div className="text-left">
            <Text size="sm">Bob Handsome</Text>
            <Text size="xs" color="gray">
              bob@handsome.inc
            </Text>
          </div>
        </Button>
      </Popover>
      <Menu
        size="lg"
        position="left"
        placement="center"
        classNames={{ itemLabel: "w-full h-full", itemBody: "h-full" }}
        control={
          <div>
            <Tooltip
              label={
                <div className="text-center">
                  <div>
                    <b>Drag</b> to move
                  </div>
                  <div>
                    <b>Click</b> to open menu
                  </div>
                </div>
              }
            >
              <ActionIcon style={{ cursor: "grab" }}>
                <IconHandle />
              </ActionIcon>
            </Tooltip>
          </div>
        }
      >
        <Menu.Label>Application</Menu.Label>
        <Menu.Item icon={<TrashIcon />} rightSection={<small className="text-gray-400">Del</small>}>Delete</Menu.Item>
        <Menu.Item icon={<StackIcon />}>Duplicate</Menu.Item>
        <Menu.Item className="py-0" style={{ height: 35 }}>
          <Menu
            position="right"
            placement="center"
            gutter={20}
            control={
              <div className="flex w-full h-full justify-between items-center">
                <LoopIcon />
                <div
                  className="text-left"
                  style={{ width: "calc(100% - 50px)" }}
                >
                  Turn into
                </div>
                <TriangleRightIcon />
              </div>
            }
            trigger="hover"
            delay={500}
            closeOnScroll={false}
          >
            <Menu.Label>Application</Menu.Label>
          </Menu>
        </Menu.Item>
        <Menu.Item className="py-0" style={{ height: 35 }}>
          <Menu
            position="right"
            placement="center"
            gutter={20}
            classNames={{ itemLabel: "w-full h-full", itemBody: "h-full" }}
            control={
              <div className="flex w-full h-full justify-between items-center">
                <FileIcon style={{ marginRight: 10 }} />
                <div
                  className="text-left"
                  style={{ width: "calc(100% - 40px)" }}
                >
                  Turn into page in
                </div>
                <TriangleRightIcon />
              </div>
            }
            trigger="hover"
            delay={500}
            closeOnScroll={false}
          >
            <Menu.Label>Application</Menu.Label>
          </Menu>
        </Menu.Item>
        <Menu.Item icon={<Link1Icon />}>Copy link</Menu.Item>
        <Divider />
        <Menu.Item
          icon={<PinRightIcon />}
          rightSection={<small className="text-gray-400">Ctrl+Shift+P</small>}
        >
          Move to
        </Menu.Item>
        <Divider />
        <Menu.Item className="py-0" style={{ height: 35 }}>
          <Menu
            size="lg"
            position="right"
            placement="center"
            classNames={{
              body: "h-96 overflow-y-auto",
              itemLabel: "w-full h-full",
              itemBody: "h-full",
            }}
            gutter={20}
            control={
              <div className="flex w-full h-full justify-between items-center">
                <GrPaint />
                <div
                  className="text-left"
                  style={{ width: "calc(100% - 50px)" }}
                >
                  Color
                </div>
                <TriangleRightIcon />
              </div>
            }
            trigger="hover"
            delay={500}
            closeOnScroll={false}
          >
            <Menu.Label>LAST USED</Menu.Label>
            {colorOptions.lastUsed &&
              colorOptions.lastUsed.map((value, index) => (
                <Menu.Item className="py-0" style={{ height: 35 }}>
                  <div className="flex w-full h-full justify-start items-center">
                    <div
                      className="flex justify-center items-center mr-3"
                      style={{
                        borderRadius: 4,
                        width: 25,
                        height: 25,
                        background: "#fff",
                        color: value.color,
                        boxShadow: "rgb(15 15 15 / 10%) 0px 0px 0px 1px inset",
                      }}
                    >
                      <b>A</b>
                    </div>
                    <div
                      className="text-left"
                      style={{ width: "calc(100% - 50px)" }}
                    >
                      {value.label}
                    </div>
                  </div>
                </Menu.Item>
              ))}
            <Divider />
            <Menu.Label>COLORS</Menu.Label>
            {colorOptions.textColor &&
              colorOptions.textColor.map((value, index) => (
                <Menu.Item className="py-0" style={{ height: 35 }}>
                  <div className="flex w-full h-full justify-start items-center">
                    <div
                      className="flex justify-center items-center mr-3"
                      style={{
                        borderRadius: 4,
                        width: 25,
                        height: 25,
                        background: "#fff",
                        color: value.color,
                        boxShadow: "rgb(15 15 15 / 10%) 0px 0px 0px 1px inset",
                      }}
                    >
                      <b>A</b>
                    </div>
                    <div
                      className="text-left"
                      style={{ width: "calc(100% - 50px)" }}
                    >
                      {value.label}
                    </div>
                  </div>
                </Menu.Item>
              ))}
            <Divider />
            <Menu.Label>BACKGROUND COLOR</Menu.Label>
            {colorOptions.backgroundColor &&
              colorOptions.backgroundColor.map((value, index) => (
                <Menu.Item className="py-0" style={{ height: 35 }}>
                  <div className="flex w-full h-full justify-start items-center">
                    <div
                      className="flex justify-center items-center mr-3"
                      style={{
                        borderRadius: 4,
                        width: 25,
                        height: 25,
                        background: value.color,
                        color: "#000",
                        boxShadow: "rgb(15 15 15 / 10%) 0px 0px 0px 1px inset",
                      }}
                    >
                      <b>A</b>
                    </div>
                    <div
                      className="text-left"
                      style={{ width: "calc(100% - 50px)" }}
                    >
                      {value.label}
                    </div>
                  </div>
                </Menu.Item>
              ))}
          </Menu>
        </Menu.Item>
        <Divider />
        <Menu.Label>
          <div>Last edited by Hải Nam Nguyễn</div>
          <div>Today at 9:07 PM</div>
        </Menu.Label>
      </Menu>
    </Group>
  );
}
