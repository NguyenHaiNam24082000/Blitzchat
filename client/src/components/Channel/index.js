import React, { useState, useRef, useEffect } from "react";
import {
  Menu,
  Modal,
  TextInput,
  Kbd,
  ActionIcon,
  Divider,
  Text,
  Burger,
  Image,
  Badge as BadgeMantine,
  Group,
  Button,
  Card,
  Stepper,
  Step,
} from "@mantine/core";
import Confetti from "react-confetti";
import "./index.css";
import { useHotkeys } from "@mantine/hooks";
import { Player } from "@lottiefiles/react-lottie-player";
import Gem from "../../assets/images/gems/Gem.png";
import {
  Tree,
  Tooltip,
  AvatarGroup,
  Avatar,
  Empty,
  Badge,
  Popover,
  Nav,
} from "@douyinfe/semi-ui";
import {
  IllustrationNoResult,
  IllustrationNoResultDark,
} from "@douyinfe/semi-illustrations";
import { FocusRing } from "react-focus-rings";
import { MagnifyingGlassIcon, PaperPlaneIcon } from "@modulz/radix-icons";
import "react-focus-rings/src/styles.css";
import { RadioGroup, Radio } from "@mantine/core";
import {
  IconVolume2,
  IconEdit,
  IconKanban,
  IconUserAdd,
  IconMicrophone,
} from "@douyinfe/semi-icons";
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
import { HiLocationMarker } from "react-icons/hi";
import IconMentions from "../../assets/images/icons/mentions.png";
import IconMores from "../../assets/images/icons/more.png";
import IconSaved from "../../assets/images/icons/saved.png";
import IconSettings from "../../assets/images/icons/settings.png";
import IconThreads from "../../assets/images/icons/threads.png";
import IconDrafts from "../../assets/images/icons/drafts.png";
import IconConnections from "../../assets/images/icons/connections.png";
import IconChannels from "../../assets/images/icons/channels.png";
import Close from "../Ui/Close";
const emptyStyle = {
  padding: 30,
};

const style = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginRight: "4px",
};

const renderMore = (restNumber, restAvatars) => {
  const content = restAvatars.map((avatar, index) => {
    return (
      <div style={{ paddingBottom: "12px" }} key={index}>
        {React.cloneElement(avatar, { size: "extra-extra-small" })}
        <span style={{ marginLeft: 8, fontSize: 14 }}>This is a sentence</span>
      </div>
    );
  });
  return (
    <Popover
      content={content}
      autoAdjustOverflow={false}
      position={"bottomRight"}
      style={{ padding: "12px 8px", paddingBottom: 0, borderRadius: 4 }}
    >
      <Avatar
        size="extra-extra-small"
        style={{ borderRadius: 4 }}
      >{`+${restNumber}`}</Avatar>
    </Popover>
  );
};

const treeData = [
  {
    label: "Target",
    value: "Target",
    key: "0",
    children: [
      {
        label: (
          <div style={style}>
            <span>Asia</span>
            <div className="flex items-center">
              <AvatarGroup
                maxCount={3}
                renderMore={renderMore}
                size="extra-extra-small"
                style={{ borderRadius: 4 }}
              >
                <Avatar color="red">LL</Avatar>
                <Avatar>CX</Avatar>
                <Avatar color="amber">RM</Avatar>
                <Avatar
                  style={{
                    color: "#f56a00",
                    backgroundColor: "#fde3cf",
                    borderRadius: 4,
                  }}
                >
                  ZL
                </Avatar>
                <Avatar style={{ backgroundColor: "#87d068", borderRadius: 4 }}>
                  YZ
                </Avatar>
              </AvatarGroup>
              <div className="options h-5">
                <Tooltip content={"hi bytedance"}>
                  <IconUserAdd
                    style={{
                      marginLeft: 4,
                      marginTop: 2,
                      color: "var(--semi-color-text-2)",
                    }}
                  />
                </Tooltip>
                <IconSetting
                  style={{
                    marginLeft: 4,
                    marginTop: 2,
                    color: "var(--semi-color-text-2)",
                  }}
                />
              </div>
            </div>
          </div>
        ),
        value: "General",
        key: "0-0",
        icon: <IconFile style={{ color: "var(--semi-color-text-2)" }} />,
      },
    ],
  },
  {
    label: "White Board",
    value: "White Board",
    key: "1",
    children: [
      {
        label: (
          <div style={style} className="truncate">
            <Tooltip content={"Asia321321321321321321321"}>
              <span className="truncate">Asia321321321321321321321</span>
            </Tooltip>
            <div className="flex items-center">
              <AvatarGroup
                maxCount={3}
                renderMore={renderMore}
                size="extra-extra-small"
                style={{ borderRadius: 4 }}
              >
                <Avatar color="red">LL</Avatar>
                <Avatar>CX</Avatar>
                <Avatar color="amber">RM</Avatar>
                <Avatar
                  style={{
                    color: "#f56a00",
                    backgroundColor: "#fde3cf",
                    borderRadius: 4,
                  }}
                >
                  ZL
                </Avatar>
                <Avatar style={{ backgroundColor: "#87d068", borderRadius: 4 }}>
                  YZ
                </Avatar>
              </AvatarGroup>
              <div className="options h-5">
                <Tooltip content={"hi bytedance"}>
                  <IconUserAdd
                    style={{
                      marginLeft: 4,
                      marginTop: 2,
                      color: "var(--semi-color-text-2)",
                    }}
                  />
                </Tooltip>
                <Menu
                  // trigger="hover"
                  // delay={250}
                  // closeOnScroll={false}
                  gutter={5}
                  position="right"
                  className="menu justify-center items-center"
                  control={
                    <IconSetting
                      className="icon"
                      style={{
                        marginLeft: 4,
                        marginTop: 2,
                        color: "var(--semi-color-text-2)",
                      }}
                    />
                  }
                >
                  <Menu.Label>Application</Menu.Label>
                  <Menu.Item>Settings</Menu.Item>
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
                  <Menu.Item color="red">Delete my account</Menu.Item>
                </Menu>
              </div>
            </div>
          </div>
        ),
        value: "General",
        key: "1-0",
        icon: <IconEdit style={{ color: "var(--semi-color-text-2)" }} />,
        children: [
          {
            label: (
              <Tooltip content={"Nguyen Hai Nam AbcD"}>
                <div className="truncate">Nguyen Hai Nam AbcD</div>
              </Tooltip>
            ),
            value: "United States",
            key: "1-0-1",
            icon: (
              <Avatar
                size="extra-extra-small"
                style={{
                  backgroundColor: "#87d068",
                  borderRadius: 4,
                  marginRight: 4,
                }}
              >
                YZ
              </Avatar>
            ),
          },
        ],
      },
    ],
  },
  {
    label: "Note",
    value: "Note",
    key: "2",
    children: [
      {
        label: "General",
        value: "General",
        key: "2-0",
        icon: <IconKanban style={{ color: "var(--semi-color-text-2)" }} />,
      },
    ],
  },
  {
    label: "Chat Channel",
    value: "Chat Channel",
    key: "3",
    children: [
      {
        label: "General",
        value: "General",
        key: "3-0",
        icon: <IconHash style={{ color: "var(--semi-color-text-2)" }} />,
      },
    ],
  },
  {
    label: "Voice Channel",
    value: "Voice Channel",
    key: "4",
    children: [
      {
        label: "United States",
        value: "United States",
        key: "4-0",
        icon: <IconVolume2 style={{ color: "var(--semi-color-text-2)" }} />,
        children: [
          {
            label: (
              <Tooltip content={"Nguyen Hai Nam AbcD"}>
                <div className="truncate">Nguyen Hai Nam AbcD</div>
              </Tooltip>
            ),
            value: "United States",
            key: "4-0-1",
            icon: (
              <Avatar
                size="extra-extra-small"
                style={{
                  backgroundColor: "#87d068",
                  borderRadius: 4,
                  marginRight: 4,
                }}
              >
                YZ
              </Avatar>
            ),
          },
        ],
      },
      {
        label: "Canada",
        value: "Canada",
        key: "4-1",
        icon: <IconVolume2 style={{ color: "var(--semi-color-text-2)" }} />,
      },
    ],
  },
];

export default function Channel() {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [show, setShow] = useState(false);
  const [event, setEvent] = useState(true);
  const confettiRef = useRef(null);
  const [active, setActive] = useState(false);
  const [openedModalCreateEvent, setOpenedModalCreateEvent] = useState(false);
  const [openedModalCreateChannel, setOpenedModalCreateChannel] = useState(false);
  const [openedModalSearch, setOpenedModalSearch] = useState(false);
  const [openedModalSetting, setOpenedModalSetting] = useState(false);
  useHotkeys([["ctrl+/", () => setOpenedModalSearch(!openedModalSearch)]]);
  useEffect(() => {
    setHeight(confettiRef.current.clientHeight);
    setWidth(confettiRef.current.clientWidth);
  }, []);
  const handleShow = (toggle) => {
    setShow(toggle);
  };
  const rightSection = (
    <div style={{ display: "flex", alignItems: "center" }}>
      {!openedModalSearch ? (
        <>
          <Kbd style={{ margin: "0 5px" }}>Ctrl</Kbd>
          <Kbd>/</Kbd>
        </>
      ) : (
        <Kbd style={{ width: 55 }}>↩</Kbd>
      )}
    </div>
  );
  return (
    <>
      <div
        className="h-full w-60 flex flex-col flex-shrink-0"
        style={{
          backgroundColor: "#f7f6f3",
          // borderRight: "2px solid #EBE7E4",
        }}
      >
        <Menu
          placement="center"
          shadow="xl"
          onOpen={() => setActive(true)}
          onClose={() => setActive(false)}
          control={
            <div
              className="flex w-full h-12 justify-between items-center px-2 cursor-pointer"
              style={{
                borderBottom: "2px solid #EBE7E4",
                // background:
                //   "url(https://odindesignthemes.com/vikinger-theme/wp-content/uploads/buddypress/members/1/cover-image/5f6d2c93c75db-bp-cover-image.jpg)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <BadgeMantine
            radius="xs"
            size="lg"
            variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}
            leftSection={<Image width={16} height={16} src={Gem} />}
          >
            Test
          </BadgeMantine>
              {/* <div>
                <Image width={16} height={16} src={Gem} />
                Test
              </div> */}
              <Close active={active} />
              {/* <Burger
            color="#fe6734"
            // opened={opened}
            // onClick={() => setOpened((o) => !o)}
            // title={title}
          /> */}
              {/* <FocusRing>
            <TextInput
              component="button"
              icon={<MagnifyingGlassIcon />}
              rightSectionWidth={90}
              rightSection={rightSection}
              styles={{
                rightSection: { pointerEvents: "none" },
                root: {
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  width: "100%",
                },
              }}
              onClick={() => setOpenedModalSearch(true)}
            >
              Search around space ...
            </TextInput>
          </FocusRing> */}
            </div>
          }
        >
          <Menu.Item>Workspace Boost</Menu.Item>
          <Divider />
          <Menu.Item>Invite People</Menu.Item>
          <Menu.Item>Workspace Settings</Menu.Item>
          <Menu.Item onClick={() => setOpenedModalCreateChannel(true)}>Create Channel</Menu.Item>
          <Menu.Item>Create Category</Menu.Item>
          <Menu.Item onClick={() => setOpenedModalCreateEvent(true)}>
            Create Event
          </Menu.Item>
          <Divider />
          <Menu.Item>Notification Settings</Menu.Item>
          <Menu.Item>Privacy Settings</Menu.Item>
          <Divider />
          <Menu.Item>Edit Workspace Profile</Menu.Item>
          <Menu.Item>Hide Muted Channels</Menu.Item>
        </Menu>

        {event && (
          <Card
            onMouseEnter={() => handleShow(true)}
            onMouseLeave={() => handleShow(false)}
            ref={confettiRef}
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              background:
                "url(https://bizweb.dktcdn.net/thumb/1024x1024/100/361/993/products/event.jpg?v=1570112192177)",
            }}
            padding="lg"
          >
            <Confetti
              recycle={show}
              numberOfPieces={80}
              width={width}
              height={height}
            />
            <Group
              position="apart"
              spacing={0}
              // style={{ marginBottom: 5, marginTop: 4 }}
            >
              <BadgeMantine size="lg" radius="xs" color="green" variant="dot">
                HAPPENING NOW
              </BadgeMantine>
              <Text weight={500}>ART CONTEST (Winter Holidays)</Text>
            </Group>
            <Group spacing={0}>
              <HiLocationMarker color="red" />
              <Text size="sm" style={{ color: "gray", lineHeight: 1.5 }}>
                #art-contest
              </Text>
            </Group>
            <Button
              variant="light"
              color="green"
              fullWidth
              style={{ marginTop: 14 }}
            >
              Event Details
            </Button>
          </Card>
        )}
        <div
          className="w-full flex-shrink-0 relative"
          style={{
            height: event ? "calc(100% - 104px - 187px)" : "calc(100% - 104px)",
          }}
        >
          <Nav
            className="w-full h-full"
            style={{ overflowY: "auto" }}
            // defaultOpenKeys={["user", "union"]}
            onSelect={(data) => console.log("trigger onSelect: ", data)}
            onClick={(data) => console.log("trigger onClick: ", data)}
          >
            {/* <Nav.Sub itemKey={"basic"} text="Basic" icon={<IconLayers />}> */}
            <Nav.Item
              icon={
                <Image src={IconThreads} alt="threads" width={20} height={20} />
              }
              itemKey={"threads"}
              text={"Threads"}
            />
            <Nav.Item
              icon={
                <Image
                  src={IconMentions}
                  alt="mentions"
                  width={20}
                  height={20}
                />
              }
              itemKey={"mentions"}
              text={"Mentions"}
            />
            <Nav.Item
              icon={
                <Image src={IconDrafts} alt="drafts" width={20} height={20} />
              }
              itemKey={"drafts"}
              text={"Drafts"}
            />
            <Nav.Item
              icon={
                <Image
                  src={IconConnections}
                  alt="connections"
                  width={20}
                  height={20}
                />
              }
              itemKey={"connections"}
              text={"Connections"}
            />
            <Nav.Item
              icon={
                <Image src={IconSaved} alt="saved" width={20} height={20} />
              }
              itemKey={"saved"}
              text={"Saved"}
            />
            <Nav.Item
              icon={
                <Image
                  src={IconSettings}
                  alt="settings"
                  width={20}
                  height={20}
                />
              }
              itemKey={"settings"}
              text={"Settings"}
            />
            <Menu
              className="w-full"
              position="top"
              control={
                <div>
                  <Nav.Item
                    icon={
                      <Image
                        src={IconMores}
                        alt="more"
                        width={20}
                        height={20}
                      />
                    }
                    itemKey={"more"}
                    style={{ height: 28, paddingTop: 4, paddingBottom: 4 }}
                    text={<div className="font-semibold">More</div>}
                  />
                </div>
              }
            >
              <Menu.Label>Application</Menu.Label>
              <Menu.Item>Settings</Menu.Item>
              <Menu.Item>Messages</Menu.Item>
              <Menu.Item>Gallery</Menu.Item>
            </Menu>
            {/* <Nav.Item itemKey={"ban"} text={"User Ban"} /> */}
            {/* </Nav.Sub> */}
            <Nav.Sub
              itemKey={"channels"}
              text="Channels"
              icon={
                <Image
                  src={IconChannels}
                  alt="channels"
                  width={20}
                  height={20}
                />
              }
            >
              <Nav.Item
                itemKey={"tree-channels"}
                style={{
                  height: "auto",
                  padding: 0,
                  marginBottom: 30,
                  backgroundColor: "inherit",
                }}
              >
                <Tree
                  showFilteredOnly={true}
                  filterTreeNode
                  // renderFullLabel={renderLabel}
                  treeData={treeData}
                  className="h-full"
                  style={{ userSelect: "none" }}
                />
              </Nav.Item>
            </Nav.Sub>
          </Nav>
        </div>
        <div
          className="flex justify-between w-full h-14 items-center px-2"
          style={{ backgroundColor: "#ececea" }}
        >
          <div className="flex truncate">
            <Menu
              // trigger="hover"
              // delay={250}
              // closeOnScroll={false}
              gutter={5}
              // position="right"
              className="menu justify-center items-center flex-shrink-0"
              control={
                <div>
                  <Badge
                    count={
                      <div
                        className="flex rounded-full absolute"
                        style={{
                          backgroundColor: "#ececea",
                          width: 12,
                          height: 12,
                          bottom: 2,
                          right: 2,
                          padding: 2,
                        }}
                      >
                        <Tooltip content={"Online"}>
                          <div
                            className="flex rounded-full"
                            style={{
                              width: 8,
                              height: 8,
                              backgroundColor: "#87d068",
                            }}
                          ></div>
                        </Tooltip>
                      </div>
                    }
                    position="rightBottom"
                  >
                    <Avatar
                      size="small"
                      // src="https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/avatarDemo.jpeg"
                      style={{
                        backgroundColor: "#339af0",
                        borderRadius: 4,
                        margin: 4,
                      }}
                    >
                      YZ
                    </Avatar>
                  </Badge>
                </div>
              }
            >
              <Menu.Label>Application</Menu.Label>
              <Menu.Item>Settings</Menu.Item>
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
              <Menu.Item color="red">Delete my account</Menu.Item>
            </Menu>

            <div className="flex flex-col truncate justify-center">
              <FocusRing>
                <div className="font-bold text-xs truncate">Nguyen Hai Nam</div>
              </FocusRing>
              <FocusRing>
                <div className="text-2xs truncate">#00000000003213213211</div>
              </FocusRing>
            </div>
          </div>
          <div className="flex ">
            <FocusRing>
              <ActionIcon variant="hover" size="lg">
                <IconMicrophone />
              </ActionIcon>
            </FocusRing>
            <FocusRing>
              <ActionIcon variant="hover" size="lg">
                <IconVolume2 />
              </ActionIcon>
            </FocusRing>
            <FocusRing>
              <ActionIcon
                variant="hover"
                size="lg"
                onClick={() => setOpenedModalSetting(true)}
              >
                <IconSetting />
              </ActionIcon>
            </FocusRing>
          </div>
        </div>
      </div>
      <Modal
        role="Modal Search"
        opened={openedModalSearch}
        onClose={() => setOpenedModalSearch(false)}
        size={"lg"}
        overflow="inside"
        classNames={{ inner: "hide-scrollbar lock-scrollbar" }}
        styles={{
          title: { width: "100%" },
        }}
        title={
          <div
            className="flex items-center w-full"
            style={{ justifyContent: "space-between" }}
          >
            <TextInput
              icon={<MagnifyingGlassIcon />}
              styles={{
                rightSection: { pointerEvents: "none" },
                root: { textOverflow: "ellipsis", overflow: "hidden" },
              }}
              placeholder={"Search"}
            />
            <ActionIcon variant="outline" size="lg">
              <PaperPlaneIcon />
            </ActionIcon>
            <pre>Open Search</pre>
            <div className="flex items-center">
              <Kbd style={{ margin: "0 5px" }}>Ctrl</Kbd>
              <Kbd>/</Kbd>
            </div>
            <pre>Exit</pre>
            <Kbd>Esc</Kbd>
            <pre>Or</pre>
          </div>
        }
      >
        <div className="flex flex-col w-full">
          <div>Recent Search</div>
          <div className="flex flex-col w-full">
            <Empty
              image={
                <IllustrationNoResult style={{ width: 250, height: 250 }} />
              }
              darkModeImage={
                <IllustrationNoResultDark style={{ width: 250, height: 250 }} />
              }
              description={"No recent searches"}
              style={emptyStyle}
            />
            {/* <div className="flex justify-between w-full"><div>Hello</div><Kbd style={{ width: 55 }}>↩</Kbd></div>
            <div className="flex justify-between w-full"><div>Hello</div><Kbd style={{ width: 55 }}>↩</Kbd></div>
            <div className="flex justify-between w-full"><div>Hello</div><Kbd style={{ width: 55 }}>↩</Kbd></div>
            <div className="flex justify-between w-full"><div>Hello</div><Kbd style={{ width: 55 }}>↩</Kbd></div>
            <div className="flex justify-between w-full"><div>Hello</div><Kbd style={{ width: 55 }}>↩</Kbd></div>
            <div className="flex justify-between w-full"><div>Hello</div><Kbd style={{ width: 55 }}>↩</Kbd></div>
            <div className="flex justify-between w-full"><div>Hello</div><Kbd style={{ width: 55 }}>↩</Kbd></div>
            <div className="flex justify-between w-full"><div>Hello</div><Kbd style={{ width: 55 }}>↩</Kbd></div> */}
          </div>
        </div>
      </Modal>
      <Modal
        opened={openedModalSetting}
        onClose={() => setOpenedModalSetting(false)}
        styles={{
          title: { width: "100%" },
        }}
        title={
          <div className="flex items-center" style={{ fontWeight: "bold" }}>
            <Player
              autoplay={true}
              loop={true}
              controls={false}
              src="https://assets8.lottiefiles.com/packages/lf20_ho6mogqi.json"
              style={{ height: "75px", width: "auto", marginRight: "8px" }}
            ></Player>
            <h1 className="text-5xl">Setting</h1>
          </div>
        }
        size={"xl"}
        overflow="inside"
        classNames={{ inner: "hide-scrollbar lock-scrollbar" }}
      >
        <div className="w-full flex h-full">
          <div className="flex flex-col w-4/12  h-full flex-shrink-0">
            <Nav
              style={{ height: 525 }}
              bodyStyle={{
                height: "100%",
                width: "100%",
                backgroundColor: "#f7f6f3",
                borderRadius: 8,
                paddingLeft: 4,
                paddingBottom: 8,
              }}
              // defaultOpenKeys={["user", "union"]}
              onSelect={(data) => console.log("trigger onSelect: ", data)}
              onClick={(data) => console.log("trigger onClick: ", data)}
            >
              <Nav.Item
                text="User settings"
                className="divider"
                style={{ color: "#1f2937 !important" }}
              />
              <Nav.Item itemKey={"union"} text={"My Account"} />
              <Nav.Item itemKey={"golder"} text={"User Profile"} />
              <Nav.Item itemKey={"ban"} text={"Privacy & safety"} />
              <Nav.Item itemKey={"notice"} text={"Connections"} />
              <Nav.Item
                text="Application"
                className="divider"
                style={{ color: "#1f2937 !important" }}
              />
              <Nav.Item itemKey={"query"} text={"Appearance"} />
              <Nav.Item itemKey={"info"} text={"Accessibility"} />
              <Nav.Item itemKey={"info"} text={"Voice & Video"} />
              <Nav.Item itemKey={"info"} text={"Text & Images"} />
              <Nav.Item itemKey={"info"} text={"Notifications"} />
              <Nav.Item itemKey={"info"} text={"Shortcuts"} />
              <Nav.Item itemKey={"info"} text={"Language"} />
              <Nav.Item itemKey={"info"} text={"Sign Out"} />
              {/* <Nav.Footer collapseButton={true} style={{width: '100%'}} /> */}
            </Nav>
          </div>
          <div className="flex flex-col w-8/12 flex-shrink-0 px-5 overflow-y-auto" style={{maxHeight: 525}}>
            <Divider
              label="My Account"
              variant="dashed"
              className="font-bold"
            />
            <RadioGroup
              variant="vertical"
              label="SELECT A LANGUAGE"
              // description="This is anonymous"
              className="w-full"
              // required
            >
              <Radio
                value="react-a"
                className=" w-full p-2 h-12 pointer"
                style={{ borderRadius: 4, backgroundColor: "#f2f3f5" }}
              >
                Arabic
              </Radio>
              <Radio
                value="react"
                className=" w-full p-2 h-12"
                style={{ borderRadius: 4, backgroundColor: "#f2f3f5" }}
              >
                English
              </Radio>
              <Radio
                value="react"
                className=" w-full p-2 h-12"
                style={{ borderRadius: 4, backgroundColor: "#f2f3f5" }}
              >
                Japanese
              </Radio>
              <Radio
                value="react"
                className=" w-full p-2 h-12"
                style={{ borderRadius: 4, backgroundColor: "#f2f3f5" }}
              >
                Korean
              </Radio>
              <Radio
                value="react"
                className=" w-full p-2 h-12"
                style={{ borderRadius: 4, backgroundColor: "#f2f3f5" }}
              >
                Vietnamese
              </Radio>
              <Radio
                value="react"
                className=" w-full p-2 h-12"
                style={{ borderRadius: 4, backgroundColor: "#f2f3f5" }}
              >
                Russian
              </Radio>
              <Radio
                value="react"
                className=" w-full p-2 h-12"
                style={{ borderRadius: 4, backgroundColor: "#f2f3f5" }}
              >
                Indonesian
              </Radio>
              <Radio
                value="react"
                className=" w-full p-2 h-12"
                style={{ borderRadius: 4, backgroundColor: "#f2f3f5" }}
              >
                Malaysia
              </Radio>
              <Radio
                value="react"
                className=" w-full p-2 h-12"
                style={{ borderRadius: 4, backgroundColor: "#f2f3f5" }}
              >
                Thailand
              </Radio>
              <Radio
                value="react"
                className=" w-full p-2 h-12"
                style={{ borderRadius: 4, backgroundColor: "#f2f3f5" }}
              >
                Turkish
              </Radio>
              <Radio
                value="react"
                className=" w-full p-2 h-12"
                style={{ borderRadius: 4, backgroundColor: "#f2f3f5" }}
              >
                Portuguese
              </Radio>
            </RadioGroup>
          </div>
        </div>
      </Modal>
      <Modal
        opened={openedModalCreateEvent}
        onClose={() => setOpenedModalCreateEvent(false)}
        hideCloseButton={true}
        classNames={{ title: "w-full" }}
        size="lg"
        title={
          <Stepper active={true} size="xs" breakpoint="sm">
            <Stepper.Step label="Fist step" description="Create an account">
              Step 1 content: Create an account
            </Stepper.Step>
            <Stepper.Step label="Second step" description="Verify email">
              Step 2 content: Verify email
            </Stepper.Step>
            <Stepper.Step label="Final step" description="Get full access">
              Step 3 content: Get full access
            </Stepper.Step>
          </Stepper>
        }
      ></Modal>
      <Modal
        opened={openedModalCreateChannel}
        onClose={() => setOpenedModalCreateChannel(false)}
        // hideCloseButton={true}
        classNames={{ title: "w-full" }}
        size="lg"
        title={
          "Tạo kênh chat"
        }
      ></Modal>
    </>
  );
}
