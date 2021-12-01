import React, { useState } from "react";
import { Layout, Tree, Nav, List, ButtonGroup } from "@douyinfe/semi-ui";
import { useHotkeys } from "@mantine/hooks";
import SliderControl from "../Slider/Slider";
import {
  IconComment,
  IconHash,
  IconAt,
  IconBookmark,
  IconSetting,
  IconMore,
  IconFile,
  IconBranch,
  IconLayers,
} from "@douyinfe/semi-icons";
import {
  Kbd,
  TextInput,
  ActionIcon,
  Space,
  Menu,
  Divider,
  Tooltip,
  Image,
  Popper,
} from "@mantine/core";
import { SearchNormal1, Folder2, DocumentDownload, Trash } from "iconsax-react";
import Icon from "supercons";
import { brightnessState } from "../../recoils/controlsState";
import { useRecoilState } from "recoil";
import {
  BsBrightnessAltHigh,
  BsPlayFill,
  BsPauseFill,
  BsFullscreen,
  BsFullscreenExit,
} from "react-icons/bs";
import Logo from "../../assets/images/logo/logo.svg";
import { IoSunny, IoMoon, IoVolumeHigh } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import { FiBluetooth, FiRss } from "react-icons/fi";
import { useClickOutside } from "@mantine/hooks";

const treeData = [
  {
    label: "Asia",
    value: "Asia",
    key: "0",
    children: [
      {
        label: "China",
        value: "China",
        key: "0-0",
        children: [
          {
            label: "Beijing",
            value: "Beijing",
            key: "0-0-0",
          },
          {
            label: "Shanghai",
            value: "Shanghai",
            key: "0-0-1",
          },
        ],
      },
      {
        label: "Japan",
        value: "Japan",
        key: "0-1",
        children: [
          {
            label: "Osaka",
            value: "Osaka",
            key: "0-1-0",
          },
        ],
      },
    ],
  },
  {
    label: "North America",
    value: "North America",
    key: "1",
    children: [
      {
        label: "United States",
        value: "United States",
        key: "1-0",
      },
      {
        label: "Canada",
        value: "Canada",
        key: "1-1",
      },
    ],
  },
];

const style = {
  border: "1px solid var(--semi-color-border)",
  backgroundColor: "var(--semi-color-bg-2)",
  borderRadius: "3px",
  paddingLeft: "20px",
  margin: "4px 2px",
};

const data = [
  {
    image: "https://images.unsplash.com/long-image-url-was-here.jpg",
    title: "Platform A",
  },
  {
    title: "Platform B",
  },
  {
    title: "Platform C",
  },
  {
    title: "Platform D",
  },
  {
    title: "Platform E",
  },
  {
    title: "Platform D",
  },
  {
    title: "Platform D",
  },
  {
    title: "Platform D",
  },
  {
    title: "Platform D",
  },
  {
    title: "Platform D",
  },
  {
    title: "Platform D",
  },
  {
    title: "Platform D",
  },
];

export default function Navigation() {
  const [openedMenuDownloaded, setOpenedMenuDownloaded] = useState(false);
  const [brightness, setBrightness] = useRecoilState(brightnessState);
  const downloadedRef = useClickOutside(() => setOpenedMenuDownloaded(false));
  useHotkeys([
    ["ctrl+J", () => setOpenedMenuDownloaded(!openedMenuDownloaded)],
  ]);
  const rightSection = (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Kbd className="mr-1">Ctrl</Kbd>
      <Kbd>/</Kbd>
    </div>
  );
  return (
    <>
      <Menu
        closeOnItemClick={false}
        zIndex={50}
        size={450}
        className="z-10"
        control={
          <div>
            <Tooltip
              label={
                <div className="flex items-center">
                  <div className="flex items-center">History</div>
                  <Space size="sm" />
                  <div className="flex items-center">
                    <Kbd>Ctrl</Kbd>
                    <Kbd className="ml-1">H</Kbd>
                  </div>
                </div>
              }
              position="bottom"
            >
              <ActionIcon variant="light" size="lg">
                <Icon glyph="history" size={22} />
              </ActionIcon>
            </Tooltip>
          </div>
        }
      >
        <Menu.Label>
          <div className="flex w-full items-center justify-between">
            <div className="text-lg font-bold">History</div>
            <div className="flex items-center h-full">
              <ActionIcon variant="light" size="md">
                <Icon glyph="search" size={22} />
              </ActionIcon>
              <Space w="xs" />
              <ActionIcon variant="light" size="md">
                <Icon glyph="pin" size={22} />
              </ActionIcon>
              <Space w="xs" />
              <Menu
                className="z-10"
                control={
                  <ActionIcon variant="light" size="md">
                    <Icon glyph="more" size={22} />
                  </ActionIcon>
                }
              >
                <Menu.Label>Recent</Menu.Label>
                <Menu.Item>Settings</Menu.Item>
                <Menu.Item>Messages</Menu.Item>
                <Menu.Item>Gallery</Menu.Item>
              </Menu>
            </div>
          </div>
        </Menu.Label>
        <Divider />
        <Menu.Label>Recent</Menu.Label>
        <Menu.Item>Settings</Menu.Item>
        <Menu.Item>Messages</Menu.Item>
        <Menu.Item>Gallery</Menu.Item>
        <Divider />
        <Menu.Item>Show more</Menu.Item>
      </Menu>
      <Space w="sm" />
      <Menu
        closeOnItemClick={false}
        zIndex={50}
        opened={openedMenuDownloaded}
        ref={downloadedRef}
        onOpen={() => setOpenedMenuDownloaded(true)}
        // onClose={() => setOpenedMenuDownloaded(false)}
        // onBlur={() => setOpenedMenuDownloaded(false)}
        size={450}
        control={
          <div>
            <Tooltip
              label={
                <div className="flex items-center">
                  <div className="flex items-center">Downloaded</div>
                  <Space size="sm" />
                  <div className="flex items-center">
                    <Kbd>Ctrl</Kbd>
                    <Kbd className="ml-1">J</Kbd>
                  </div>
                </div>
              }
              position="bottom"
            >
              <ActionIcon
                variant="light"
                size="lg"
                onClick={() => setOpenedMenuDownloaded(!openedMenuDownloaded)}
              >
                <Icon glyph="cloud-download" size={22} />
              </ActionIcon>
            </Tooltip>
          </div>
        }
      >
        <Menu.Label>
          <div className="flex w-full items-center justify-between">
            <div className="text-lg font-bold">Downloaded</div>
            <div className="flex items-center h-full">
              <ActionIcon variant="light" size="md">
                <Folder2 size="16" />
              </ActionIcon>
              <Space w="xs" />
              <ActionIcon variant="light" size="md">
                <Icon glyph="search" size={22} />
              </ActionIcon>
              <Space w="xs" />
              <ActionIcon variant="light" size="md">
                <Icon glyph="pin" size={22} />
              </ActionIcon>
              <Space w="xs" />
              <Menu
                className="z-10"
                control={
                  <ActionIcon variant="light" size="md">
                    <Icon glyph="more" size={22} />
                  </ActionIcon>
                }
              >
                <Menu.Label>Recent</Menu.Label>
                <Menu.Item></Menu.Item>
              </Menu>
            </div>
          </div>
        </Menu.Label>
        <Divider />
        <Menu.Label className="w-full max-h-96 overflow-y-scroll">
          <div
            style={{
              color: "#868e96",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
              fontSize: 12,
              fontWeight: 500,
              margin: 0,
            }}
          >
            Recent
          </div>
          <div>
            <Divider size="md" label="4h25p" labelPosition="center" />
            <List
              grid={{
                gutter: 0,
                Xs: 0,
                sm: 0,
                md: 24,
                lg: 24,
                Xl: 24,
                xxl: 24,
              }}
              dataSource={data}
              renderItem={(item) => (
                <List.Item style={style}>
                  <div className="flex item-center justify-between w-full h-full">
                    <div className="flex w-auto items-center">
                      <Image
                        width={38}
                        height={38}
                        radius="sx"
                        fit="cover"
                        src={Logo}
                        alt="Random unsplash image"
                        withPlaceholder
                      />
                    </div>
                    <h3
                      style={{
                        color: "var(--semi-color-text-0)",
                        fontWeight: 500,
                      }}
                      className="flex items-center"
                    >
                      {item.title}
                    </h3>
                    <div
                      style={{
                        margin: "12px 0",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <ActionIcon variant="light" size="lg" className="mr-1">
                        <DocumentDownload size={16} />
                      </ActionIcon>
                      <ActionIcon variant="light" size="lg" className="mr-1">
                        <Trash size={16} />
                      </ActionIcon>
                    </div>
                  </div>
                </List.Item>
              )}
            />
          </div>
        </Menu.Label>
        <Divider />
        <Menu.Item>Show more</Menu.Item>
      </Menu>
      <Space w="sm" />
      <TextInput
        component="button"
        size="sm"
        icon={<SearchNormal1 size="16" />}
        rightSectionWidth={90}
        rightSection={rightSection}
        className="w-7/12"
        styles={{ rightSection: { pointerEvents: "none" } }}
      >
        Search All Around the Space
      </TextInput>
      <Space w="sm" />
      <Menu
        zIndex={100}
        size={450}
        className="z-10"
        placement="end"
        control={
          <div>
            <Tooltip
              label={
                <div className="flex items-center">
                  <div className="flex items-center">Controls</div>
                  <Space size="sm" />
                  <div className="flex items-center">
                    <Kbd>Ctrl</Kbd>
                    <Kbd className="ml-1">H</Kbd>
                  </div>
                </div>
              }
              position="bottom"
            >
              <ActionIcon variant="light" size="lg">
                <Icon glyph="controls" size={22} />
              </ActionIcon>
            </Tooltip>
          </div>
        }
      >
        {/* <Menu.Label>
          <div className="flex w-full items-center justify-between">
            <div className="text-lg font-bold">History</div>
            <div className="flex items-center h-full">
              <ActionIcon variant="light" size="md">
                <Icon glyph="search" size={22} />
              </ActionIcon>
              <Space w="xs" />
              <ActionIcon variant="light" size="md">
                <Icon glyph="pin" size={22} />
              </ActionIcon>
              <Space w="xs" />
              <Menu
                className="z-10"
                control={
                  <ActionIcon variant="light" size="md">
                    <Icon glyph="more" size={22} />
                  </ActionIcon>
                }
              >
                <Menu.Label>Recent</Menu.Label>
                <Menu.Item>Settings</Menu.Item>
                <Menu.Item>Messages</Menu.Item>
                <Menu.Item>Gallery</Menu.Item>
              </Menu>
            </div>
          </div>
        </Menu.Label>
        <Divider /> */}
        <Menu.Label className="control-grid row-span-2 col-span-2 p-2 flex flex-col justify-around">
          <div className="flex flex-row items-center space-x-2">
            <FaWifi
              size={32}
              className={`bg-blue-500 text-white rounded-full p-2`}
              // onClick={() => this.props.toggleWIFI(!this.props.wifi)}
            />
            <div className="flex flex-col pt-0.5">
              <span className="font-medium leading-4">Wi-Fi</span>
              <span className="text-xs text-gray-500">
                Home
                {/* {this.props.wifi ? "Home" : "Off"} */}
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <FiBluetooth
              size={32}
              className={`bg-blue-500 text-white rounded-full p-2`}
              // onClick={() => this.props.toggleBleutooth(!this.props.bluetooth)}
            />
            <div className="flex flex-col pt-0.5">
              <span className="font-medium leading-4">Bluetooth</span>
              <span className="text-xs text-gray-500">
                On
                {/* {this.props.bluetooth ? "On" : "Off"} */}
              </span>
            </div>
          </div>
          {/* <div className="flex flex-row items-center space-x-2">
            <FiRss
              size={32}
              className={`${
                this.props.airdrop
                  ? "bg-blue-500 text-white"
                  : "bg-gray-400 bg-opacity-25 text-gray-700"
              } rounded-full p-2`}
              onClick={() => this.props.toggleAirdrop(!this.props.airdrop)}
            />
            <div className="flex flex-col pt-0.5">
              <span className="font-medium leading-4">AirDrop</span>
              <span className="text-xs text-gray-500">
                {this.props.airdrop ? "Contacts Only" : "Off"}
              </span>
            </div>
          </div>
          <div className="control-grid col-span-2 p-2 flex flex-row items-center space-x-2">
            {this.props.dark ? (
              <IoMoon
                size={32}
                className="text-gray-700 bg-gray-400 bg-opacity-25 rounded-full p-2"
                onClick={() => this.props.toggleDark(false)}
              />
            ) : (
              <IoSunny
                size={32}
                className="text-gray-700 bg-gray-400 bg-opacity-25 rounded-full p-2"
                onClick={() => this.props.toggleDark(true)}
              />
            )}
            <div className="flex flex-col">
              <span className="font-medium ml-1">
                {this.props.dark ? "Dark Mode" : "Light Mode"}
              </span>
            </div>
          </div>
          <div className="control-grid p-2 flex flex-col justify-center items-center text-center">
            <BsBrightnessAltHigh size={20} />
            <span className="text-xs" style={{ lineHeight: "0.9rem" }}>
              Keyboard Brightness
            </span>
          </div>
          <div
            className="control-grid p-2 flex flex-col justify-center items-center text-center cursor-default"
            onClick={() => this.props.toggleFullScreen(!this.props.fullscreen)}
          >
            {this.props.fullscreen ? (
              <BsFullscreenExit size={16} />
            ) : (
              <BsFullscreen size={16} />
            )}
            <span className="text-xs mt-1.5" style={{ lineHeight: "0.9rem" }}>
              {this.props.fullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
            </span>
          </div> */}
        </Menu.Label>
        <Menu.Label className="control-grid col-span-4 bg-gray-200 bg-opacity-60 blur rounded-xl px-2.5 py-2 space-y-1 flex flex-col justify-around">
          <span className="font-medium ml-0.5">Display</span>
          <SliderControl
            icon={<IoSunny size={12} className="text-gray-500" />}
            value={brightness}
            setValue={setBrightness}
          />
        </Menu.Label>
        <Menu.Label className="mt-2 control-grid col-span-4 bg-gray-200 bg-opacity-60 blur rounded-xl px-2.5 py-2 space-y-1 flex flex-col justify-around">
          <span className="font-medium ml-0.5">Sound</span>
          {/* <SliderControl
            icon={<IoVolumeHigh size={12} className="text-gray-500" />}
            value={10}
            setValue={null}
          /> */}
        </Menu.Label>
      </Menu>
      <Space w="sm" />
      <ActionIcon variant="light" size="lg">
        <Icon glyph="info" size={22} />
      </ActionIcon>
    </>
  );
}
