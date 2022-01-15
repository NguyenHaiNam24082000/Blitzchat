import React, { useState } from "react";
import "./index.css";
import {
  Menu,
  Divider,
  ActionIcon,
  Badge,
  Text,
  Image,
  Space,
  Group,
  Popover,
  Anchor,
  TextInput,
  Tooltip,
} from "@mantine/core";
// import { RichTextEditor } from "@mantine/rte";
import EmptyBongoCat from "../Ui/EmptyState/EmptyBongoCat";
import { Calendar1 } from "iconsax-react";
import { Empty } from "@douyinfe/semi-ui";
import { IconCaretdown, IconChevronDown } from "@douyinfe/semi-icons";
import RichTextEditor from "../RichTextEditor/RichTextEditor";
import FadingBalls from "react-cssfx-loading/lib/FadingBalls";
import { MdAddReaction } from "react-icons/md";
import { FaReply, FaHashtag } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { MdBookmarkAdd } from "react-icons/md";
import OverflowWrapper from "react-overflow-wrapper";
import { Button } from "@mantine/core";
import { AiFillMessage } from "react-icons/ai";
import { Modal } from "@mantine/core";
import { Switch } from "@mantine/core";
import {
  IconLink,
  IconFolder,
  IconStarStroked,
  IconStar,
  IconHash,
} from "@douyinfe/semi-icons";
import HelloIcon from "../../assets/images/hello.png";
import { Avatar, AvatarsGroup } from "@mantine/core";
import { Tabs } from "@mantine/core";
import { FaRegStar, FaStar, FaBellSlash, FaBell } from "react-icons/fa";
import { Select } from "@douyinfe/semi-ui";
import { useClipboard } from "@mantine/hooks";
import { Calendar } from "@mantine/dates";
import {
  Pencil2Icon,
  ClipboardCopyIcon,
  ClipboardIcon,
} from "@modulz/radix-icons";
import { Slider, RangeSlider } from "@mantine/core";
import DocViewer, { PDFRenderer, PNGRenderer } from "react-doc-viewer";

const emptyStyle = {
  padding: 30,
};

export default function ChatArea() {
  const [openedModalAddBookmark, setOpenedModalAddBookmark] = useState(false);
  const [openedModalMoreMessageBookmark, setOpenedModalMoreMessageBookmark] =
    useState(false);
  const [openedModalEditDescription, setOpenedModalEditDescription] =
    useState(false);
  const [openedModalInfor, setOpenedModalInfor] = useState(false);
  const [saved, setSaved] = useState(false);
  const [openedEditNameChannel, setOpenedEditNameChannel] = useState(false);
  const [openedModalSpecialDay, setOpenedModalSpecialDay] =
    useState(false); /* Modal Special Day */
  const [channelName, setChannelName] = useState("");
  const clipboard = useClipboard({ timeout: 1000 });
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div
      role="chatArea"
      className="h-full flex-shrink-0  flex-col bg-white"
      style={{ width: "calc(100% - ( 560px ))" }}
    >
      <div
        className="flex w-full h-12 justify-between items-center flex-shrink-0 z-50 px-4"
        style={{
          borderBottom: "2px solid #EBE7E4",
          backgroundColor: "#f7f6f3",
          backdropFilter: "20%",
        }}
      >
        <Button
          variant="default"
          compact
          className="border-none justify-center items-center"
          rightIcon={<IconChevronDown />}
          // style={{ backgroundColor: "inherit" }}
        >
          <Text
            variant="gradient"
            weight={700}
            gradient={{ from: "indigo", to: "cyan", deg: 45 }}
          >
            #general
          </Text>
        </Button>
        <Button
          variant="default"
          className="h-auto flex items-center justify-center px-1"
          compact
          onClick={() => setOpenedModalInfor(true)}
        >
          <AvatarsGroup
            limit={3}
            spacing="xs"
            radius={5}
            size={26}
            style={{ marginTop: 2, marginBottom: 2 }}
          >
            <Avatar src="https://yt3.ggpht.com/yti/APfAmoGyHvZbfLTnkvMzb7VBVVkkqJpD6HgoYUMO770U=s88-c-k-c0x00ffffff-no-rj-mo" />
            <Avatar src="https://scontent.fhan5-4.fna.fbcdn.net/v/t1.6435-9/62498267_1122772321257230_1257182363998224384_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=7jUZWeNcYmQAX-0iIFr&_nc_ht=scontent.fhan5-4.fna&oh=4261b6fb733993592386144e69c971aa&oe=61D1F9A1" />
            <Avatar src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-1/p320x320/239726151_3046926975563490_321512974824627894_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=7G7E0eJHQDAAX-Qq7NM&tn=QjOEw0DO6D5bznS_&_nc_ht=scontent.fhan5-11.fna&oh=3574be3c81c8dd1baa1d64f00c1aa327&oe=61B0FBC7" />
          </AvatarsGroup>
          <Text weight={700} className="w-auto">
            +2
          </Text>
        </Button>
      </div>
      {/* <div> */}
      {/* <InlineEdit
              defaultValue={editValue}
              editView={({ errorMessage, ...fieldProps }) => (
                <Textfield {...fieldProps} autoFocus />
              )}
              readView={() => (
                <div css={ReadViewContainer} data-testid="read-view">
                  {editValue || "Click to enter a value"}
                </div>
              )}
              onConfirm={(value) => setEditValue(value)}
            /> */}
      <div
        className="w-full flex-shrink-0 flex items-center flex-col overflow-y-visible relative h-full"
        style={{ height: "calc(100% - 48px)" }}
        // style={{
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        //   background:
        //     "url(https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80)",
        // }}
      >
        <ScrollingCarousel
          // leftIcon={<ArrowLeft2 />}
          // rightIcon={<ArrowRight2 />}
          className="slider-bookmark flex flex-shrink-0 px-4 items-center w-full h-9 bg-white shadow-sm border-b-2 top-0 left-0 z-50"
        >
          <Menu
            size={330}
            control={
              <Badge
                leftSection={<MdBookmarkAdd />}
                radius="xs"
                className="mr-2"
                size="lg"
                style={{ userSelect: "none", cursor: "pointer" }}
              >
                Add a bookmark
              </Badge>
            }
          >
            <Menu.Item
              icon={
                <div
                  className="bg-white w-8 h-8 flex justify-center items-center"
                  style={{ borderRadius: 4 }}
                >
                  <IconLink className="text-gray-400" />
                </div>
              }
              onClick={() => setOpenedModalAddBookmark(true)}
            >
              <div>
                <Text>Add a bookmark to this channel</Text>
                <Text size="xs" color="gray">
                  Easily find your team’s important links
                </Text>
              </div>
            </Menu.Item>
            <Menu.Item
              icon={
                <div
                  className="bg-white w-8 h-8 flex justify-center items-center"
                  style={{ borderRadius: 4 }}
                >
                  <IconFolder className="text-gray-400" />
                </div>
              }
            >
              <div>
                <Text>Create a folder</Text>
                <Text size="xs" color="gray">
                  Organise your bookmarks
                </Text>
              </div>
            </Menu.Item>
            <Divider />
            <Menu.Label>No recent links</Menu.Label>
          </Menu>
          <Menu
            size={400}
            control={
              <Badge
                leftSection={<AiFillMessage />}
                radius="xs"
                className="mr-2"
                size="lg"
                style={{ userSelect: "none" }}
              >
                Message pinned
              </Badge>
            }
          >
            <Menu.Item>addBlock</Menu.Item>
            <Divider />
            <Menu.Item onClick={() => setOpenedModalMoreMessageBookmark(true)}>
              More
            </Menu.Item>
          </Menu>
          {/* <Badge radius="xs" className="mr-2" style={{ userSelect: "none" }}>
            Full width badge1
          </Badge>
          <Badge radius="xs" className="mr-2" style={{ userSelect: "none" }}>
            Full width badge
          </Badge>
          <Badge radius="xs" className="mr-2" style={{ userSelect: "none" }}>
            Full width badge
          </Badge>
          <Badge radius="xs" className="mr-2" style={{ userSelect: "none" }}>
            Full width badge
          </Badge>
          <Badge radius="xs" className="mr-2" style={{ userSelect: "none" }}>
            Full width badge
          </Badge>
          <Badge radius="xs" className="mr-2" style={{ userSelect: "none" }}>
            Full width badge
          </Badge>
          <Badge radius="xs" className="mr-2" style={{ userSelect: "none" }}>
            Full width badge2
          </Badge>
          <Badge radius="xs" className="mr-2" style={{ userSelect: "none" }}>
            Full width badge2
          </Badge>
          <Badge radius="xs" className="mr-2" style={{ userSelect: "none" }}>
            Full width badge2
          </Badge>
          <Badge radius="xs" className="mr-2" style={{ userSelect: "none" }}>
            Full width badge2
          </Badge>
          <Badge radius="xs" className="mr-2" style={{ userSelect: "none" }}>
            Full width badge2
          </Badge> */}
        </ScrollingCarousel>
        <div
          className="flex flex-col w-full justify-end"
          style={{ height: "calc(100% - 250px)" }}
        >
          <div className="flex mx-5 mt-12 h-auto items-center">
            <Image
              width={80}
              height={80}
              src={HelloIcon}
              alt="With default placeholder"
              className="mr-4 flex flex-shrink-0"
              style={{ userSelect: "none" }}
              withPlaceholder
            />
            <div className="flex flex-col w-full">
              <Text weight={700} className="flex">
                You’re looking at the
                <Text
                  className="mx-1"
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan", deg: 45 }}
                >
                  #general
                </Text>
                channel
              </Text>
              <Text size="sm" color="gray">
                This is the one channel that will always include everyone. It’s
                a great spot for announcements and team-wide conversations.{" "}
                <Text
                  variant="link"
                  component="a"
                  onClick={() => setOpenedModalEditDescription(true)}
                  className="cursor-pointer"
                >
                  Edit description
                </Text>
              </Text>
              <div>
                <Button
                  className="w-auto"
                  color="gray"
                  leftIcon={
                    <Image
                      width={28}
                      height={28}
                      fit="cover"
                      src="https://img.stipop.io/2021/8/14/1628870349903_1.gif"
                    />
                  }
                >
                  <button>Wave 👋 to say hi ✌!</button>
                </Button>
              </div>
              {/* <div>
                <Button
                  className="w-auto"
                  color="gray"
                  leftIcon={
                    <Image
                      width={28}
                      height={28}
                      fit="cover"
                      src="https://img.stipop.io/2021/8/13/1628824135997_00.gif"
                    />
                  }
                >
                  <button>Wave 👋 to say hi ✌!</button>
                </Button>
              </div> */}
            </div>
          </div>
          <div className="channel__body__grouped">
            <div className="channel__body__day">
              <div className="channel__body__date">
                <Menu
                  gutter={5}
                  placement="center"
                  className="menu justify-center items-center"
                  control={
                    <span className="channel__body__date__child">
                      <span>Friday, April 28</span>
                      <IconCaretdown className="ml-2" />
                    </span>
                  }
                >
                  <Menu.Label>Go to...</Menu.Label>
                  <Menu.Item>Most recent</Menu.Item>
                  <Menu.Item>Last month</Menu.Item>
                  <Menu.Item>The very beginning</Menu.Item>
                  <Divider />
                  <Menu.Label>Day</Menu.Label>
                  <Menu.Item
                    color="red"
                    icon={
                      <Calendar1 color="#f03e3e" size={20} variant="Bold" />
                    }
                    onClick={() => setOpenedModalSpecialDay(true)}
                  >
                    A specific day
                  </Menu.Item>
                </Menu>
              </div>
            </div>
            <div className="chat-content relative flex-shrink-0">
              {/* <DocViewer
                documents={[
                  {
                    uri: "https://trello.com/1/cards/6141bd25ea603249484d3d9f/attachments/61484ae886e3e7751eb953a9/download/LaiThiPhuong-Login_Register.pdf",
                  },
                ]}
                pluginRenderers={[PDFRenderer, PNGRenderer]}
              /> */}
              <div className="z-50">Hello</div>
              <div className="badge-abc absolute flex items-start left-0 bottom-full ml-5 h-5">
                <div className="flex items-center bg-red-500 transform badge-message w-10 h-full flex-col translate-y-4 rounded-t">
                  <span className="font-bold uppercase text-white">Hot</span>
                </div>
              </div>
              <div
                className=" flex w-auto h-8 bg-white absolute right-0 -top-4 border-2 mr-6"
                style={{ borderRadius: 4 }}
              >
                <ActionIcon className="text-gray-400 hover:text-gray-900">
                  <MdAddReaction />
                </ActionIcon>
                <ActionIcon className="text-gray-400 hover:text-gray-900">
                  <FaReply />
                </ActionIcon>
                <ActionIcon className="text-gray-400 hover:text-gray-900">
                  <FaHashtag />
                </ActionIcon>
                <ActionIcon className="text-gray-400 hover:text-gray-900">
                  <BsFillBookmarkFill />
                </ActionIcon>
                <Menu
                  position="right"
                  gutter={10}
                  control={
                    <ActionIcon className="text-gray-400 hover:text-gray-900">
                      <HiDotsVertical />
                    </ActionIcon>
                  }
                >
                  <Menu.Item>Go to...</Menu.Item>
                  <Menu.Item>Go to...</Menu.Item>
                  <Divider />
                  <Menu.Item>Mark unread</Menu.Item>
                  <Menu.Item>Remind me about this</Menu.Item>
                  <Menu.Item>Copy link</Menu.Item>
                  <Menu.Item>Pin to channel</Menu.Item>
                  <Menu.Item>Add a message shortcuts</Menu.Item>
                  <Menu.Item>Edit message</Menu.Item>
                  <Menu.Item color="red">Delete message</Menu.Item>
                </Menu>
              </div>
            </div>
          </div>

          {/* <Empty
            image={
              <EmptyBongoCat
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            }
            darkModeImage={
              <EmptyBongoCat
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            }
            title={"Typing, typing and typing ..."}
            description="Meow meow meow ..."
            style={emptyStyle}
          /> */}
          <div className="flex flex-col px-10 text-sm absolute bottom-0 left-0 w-full bg-white">
            <RichTextEditor />
            <div className="flex w-full justify-between text-2xs">
              <div className="flex items-center">
                <FadingBalls className="text-gray-400 hover:text-gray-900" />
                <span className="ml-2">Typing...</span>
              </div>
              <div className="flex">
                <span className="mr-5">
                  <b>Enter</b> to send
                </span>
                <span>
                  <b>Shift</b> + <b>Enter</b> to add a new line
                </span>
              </div>
            </div>
          </div>
          {/* <Empty
                image={
                  <IllustrationConstruction
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                }
                darkModeImage={
                  <IllustrationConstructionDark
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                }
                title={"Function under construction"}
                description="The current function is not yet open, so stay tuned."
                style={emptyStyle}
              /> */}
          {/* <Loading /> */}
        </div>
        <div className="w-full h-28 flex-grow">
          {/* <RichTextEditor className="resize-y max-h-80" /> */}
        </div>
      </div>
      {/* </div> */}
      <Modal
        opened={openedModalAddBookmark}
        onClose={() => setOpenedModalAddBookmark(false)}
        title="Add a bookmark to this channel"
      >
        {/* <form onSubmit={form.onSubmit((values) => console.log(values))}> */}
        <TextInput
          required
          label="Link"
          placeholder="https://example.com"
          // {...form.getInputProps("email")}
        />
        {/* </form> */}
      </Modal>
      <Modal
        opened={openedModalMoreMessageBookmark}
        onClose={() => setOpenedModalMoreMessageBookmark(false)}
        title="Introduce yourself!"
      ></Modal>
      <Modal
        opened={openedModalEditDescription}
        onClose={() => setOpenedModalEditDescription(false)}
        title="Edit description"
      ></Modal>
      <Modal
        opened={openedModalInfor}
        onClose={() => setOpenedModalInfor(false)}
        classNames={{ title: "w-full" }}
        title={
          <Group className="justify-between items-center" grow>
            <Text>#general</Text>
            <Text size="xs" color="gray" className="flex justify-end">
              <span className="mr-1">Channel ID:</span>
              <Tooltip
                label={clipboard.copied ? "Copied" : "Copy"}
                withArrow
                color={clipboard.copied ? "teal" : "dark"}
              >
                <span
                  className="cursor-pointer"
                  onClick={() => clipboard.copy("C02EE4BT3C6")}
                >
                  C02EE4BT3C6
                </span>
              </Tooltip>
            </Text>
            {/* <ActionIcon>
              <ClipboardCopyIcon />
            </ActionIcon> */}
          </Group>
        }
        size="xl"
      >
        <Group spacing="xs">
          <ActionIcon
            size={30}
            variant="outline"
            onClick={() => setSaved(!saved)}
          >
            {!saved ? <FaRegStar /> : <FaStar />}
          </ActionIcon>
          <Select
            style={{ width: "auto" }}
            defaultValue="allMessages"
            placeholder="Get notifications for all messages"
            prefix={<FaBell className="mx-2" />}
          >
            <Select.OptGroup label="Get notifications for">
              <Select.Option value="allMessages">All messages</Select.Option>
              <Select.Option value="mentions">@mentions</Select.Option>
              <Select.Option value="off">Off</Select.Option>
            </Select.OptGroup>
            <Select.OptGroup label="Muted">
              <Select.Option value="muteChannel">Mute channel</Select.Option>
            </Select.OptGroup>
          </Select>
        </Group>
        <Tabs active={activeTab} onTabChange={setActiveTab}>
          <Tabs.Tab label="About">
            <Group direction="column" grow>
              <Group
                className="flex w-full justify-between border-2"
                style={{ padding: "16px 20px", borderRadius: 4 }}
              >
                <div>
                  <Text weight={500}>Channel name</Text>
                  <Text size="md" color="gray">
                    #general
                  </Text>
                </div>
                <Popover
                  opened={openedEditNameChannel}
                  onClose={() => setOpenedEditNameChannel(false)}
                  position="bottom"
                  placement="end"
                  withArrow
                  withCloseButton
                  shadow="lg"
                  title="Edit user"
                  transition="pop-top-right"
                  zIndex={99999}
                  target={
                    <ActionIcon
                      // variant={
                      //   theme.colorScheme === "dark" ? "hover" : "light"
                      // }
                      onClick={() => setOpenedEditNameChannel((o) => !o)}
                    >
                      <Pencil2Icon />
                    </ActionIcon>
                  }
                >
                  <form
                  // onSubmit={form.onSubmit(onSubmit)}
                  >
                    <TextInput
                      required
                      icon={<IconHash />}
                      label="Channel name"
                      placeholder="Channel name"
                      description="Names must be lower case, without spaces or full stops, and can’t be longer than 80 characters."
                      // rightSection={80-channelName.length}
                      // style={{ minWidth: isMobile ? 220 : 300, marginTop: 15 }}
                      // value={form.values.email}
                      value={channelName}
                      // onChange={(event) =>
                      //   form.setFieldValue("email", event.currentTarget.value)
                      // }
                      onChange={(event) =>
                        setChannelName(event.currentTarget.value)
                      }
                      // error={form.errors.email}
                      variant="default"
                    />

                    <Group position="apart" style={{ marginTop: 15 }}>
                      <Anchor
                        component="button"
                        color="gray"
                        size="sm"
                        // onClick={onCancel}
                      >
                        Cancel
                      </Anchor>
                      <Button type="submit" size="sm">
                        Save
                      </Button>
                    </Group>
                  </form>
                </Popover>
              </Group>
              <Group
                className="flex w-full justify-between border-2"
                direction="column"
                style={{ borderRadius: 4 }}
                spacing={0}
              >
                <Group
                  className="flex w-full justify-between border-b-2"
                  style={{ padding: "16px 20px" }}
                >
                  <div>
                    <Text weight={500}>Topic</Text>
                    <Text size="md" color="gray">
                      Add a topic to your channel
                    </Text>
                  </div>
                  <Popover
                    opened={openedEditNameChannel}
                    onClose={() => setOpenedEditNameChannel(false)}
                    position="bottom"
                    placement="end"
                    withArrow
                    withCloseButton
                    shadow="lg"
                    title="Edit user"
                    transition="pop-top-right"
                    zIndex={99999}
                    target={
                      <ActionIcon
                        // variant={
                        //   theme.colorScheme === "dark" ? "hover" : "light"
                        // }
                        onClick={() => setOpenedEditNameChannel((o) => !o)}
                      >
                        <Pencil2Icon />
                      </ActionIcon>
                    }
                  >
                    <form
                    // onSubmit={form.onSubmit(onSubmit)}
                    >
                      <TextInput
                        required
                        icon={<IconHash />}
                        label="Channel name"
                        placeholder="Channel name"
                        description="Names must be lower case, without spaces or full stops, and can’t be longer than 80 characters."
                        // rightSection={80-channelName.length}
                        // style={{ minWidth: isMobile ? 220 : 300, marginTop: 15 }}
                        // value={form.values.email}
                        value={channelName}
                        // onChange={(event) =>
                        //   form.setFieldValue("email", event.currentTarget.value)
                        // }
                        onChange={(event) =>
                          setChannelName(event.currentTarget.value)
                        }
                        // error={form.errors.email}
                        variant="default"
                      />

                      <Group position="apart" style={{ marginTop: 15 }}>
                        <Anchor
                          component="button"
                          color="gray"
                          size="sm"
                          // onClick={onCancel}
                        >
                          Cancel
                        </Anchor>
                        <Button type="submit" size="sm">
                          Save
                        </Button>
                      </Group>
                    </form>
                  </Popover>
                </Group>
                <Group
                  className="flex w-full justify-between border-b-2"
                  style={{ padding: "16px 20px" }}
                >
                  <div>
                    <Text weight={500}>Description</Text>
                    <Text size="md" color="gray">
                      Add a topic to your channel
                    </Text>
                  </div>
                  <Popover
                    opened={openedEditNameChannel}
                    onClose={() => setOpenedEditNameChannel(false)}
                    position="bottom"
                    placement="end"
                    withArrow
                    withCloseButton
                    shadow="lg"
                    title="Edit user"
                    transition="pop-top-right"
                    zIndex={99999}
                    target={
                      <ActionIcon
                        // variant={
                        //   theme.colorScheme === "dark" ? "hover" : "light"
                        // }
                        onClick={() => setOpenedEditNameChannel((o) => !o)}
                      >
                        <Pencil2Icon />
                      </ActionIcon>
                    }
                  >
                    <form
                    // onSubmit={form.onSubmit(onSubmit)}
                    >
                      <TextInput
                        required
                        icon={<IconHash />}
                        label="Channel name"
                        placeholder="Channel name"
                        description="Names must be lower case, without spaces or full stops, and can’t be longer than 80 characters."
                        // rightSection={80-channelName.length}
                        // style={{ minWidth: isMobile ? 220 : 300, marginTop: 15 }}
                        // value={form.values.email}
                        value={channelName}
                        // onChange={(event) =>
                        //   form.setFieldValue("email", event.currentTarget.value)
                        // }
                        onChange={(event) =>
                          setChannelName(event.currentTarget.value)
                        }
                        // error={form.errors.email}
                        variant="default"
                      />

                      <Group position="apart" style={{ marginTop: 15 }}>
                        <Anchor
                          component="button"
                          color="gray"
                          size="sm"
                          // onClick={onCancel}
                        >
                          Cancel
                        </Anchor>
                        <Button type="submit" size="sm">
                          Save
                        </Button>
                      </Group>
                    </form>
                  </Popover>
                </Group>
                <Group
                  className="flex w-full justify-between"
                  style={{ padding: "16px 20px" }}
                >
                  <div>
                    <Text weight={500}>Created by</Text>
                    <Text size="md" color="gray">
                      Add a topic to your channel
                    </Text>
                  </div>
                  <Popover
                    opened={openedEditNameChannel}
                    onClose={() => setOpenedEditNameChannel(false)}
                    position="bottom"
                    placement="end"
                    withArrow
                    withCloseButton
                    shadow="lg"
                    title="Edit user"
                    transition="pop-top-right"
                    zIndex={99999}
                    target={
                      <ActionIcon
                        // variant={
                        //   theme.colorScheme === "dark" ? "hover" : "light"
                        // }
                        onClick={() => setOpenedEditNameChannel((o) => !o)}
                      >
                        <Pencil2Icon />
                      </ActionIcon>
                    }
                  >
                    <form
                    // onSubmit={form.onSubmit(onSubmit)}
                    >
                      <TextInput
                        required
                        icon={<IconHash />}
                        label="Channel name"
                        placeholder="Channel name"
                        description="Names must be lower case, without spaces or full stops, and can’t be longer than 80 characters."
                        // rightSection={80-channelName.length}
                        // style={{ minWidth: isMobile ? 220 : 300, marginTop: 15 }}
                        // value={form.values.email}
                        value={channelName}
                        // onChange={(event) =>
                        //   form.setFieldValue("email", event.currentTarget.value)
                        // }
                        onChange={(event) =>
                          setChannelName(event.currentTarget.value)
                        }
                        // error={form.errors.email}
                        variant="default"
                      />

                      <Group position="apart" style={{ marginTop: 15 }}>
                        <Anchor
                          component="button"
                          color="gray"
                          size="sm"
                          // onClick={onCancel}
                        >
                          Cancel
                        </Anchor>
                        <Button type="submit" size="sm">
                          Save
                        </Button>
                      </Group>
                    </form>
                  </Popover>
                </Group>
              </Group>
            </Group>
          </Tabs.Tab>
          <Tabs.Tab label="Members +2">Members</Tabs.Tab>
          <Tabs.Tab label="Integrations">Integrations</Tabs.Tab>
          <Tabs.Tab label="Settings">
            <Group direction="column" grow>
              <Group
                className="flex w-full justify-between border-2"
                style={{ padding: "16px 20px", borderRadius: 4 }}
              >
                <div className="w-full">
                  <Text weight={500}>Chế độ chậm</Text>
                  <Text size="xs" color="gray" className="mb-1">
                    Thành viên sẽ bị giới hạn số lượng tin nhắn gửi đi hoặc số
                    lượng Chủ đề có thể tạo trong cùng một khoảng thời gian, trừ
                    khi có quyền Quản Lý Kênh hoặc Quản lý tin nhắn.
                  </Text>
                  <Slider
                    step={10}
                    styles={{ label: { display: "none" } }}
                    classNames={{
                      markLabel:
                        "text-2xs w-8 flex justify-center items-center",
                    }}
                    className="mb-4"
                    marks={[
                      { value: 0, label: "Off" },
                      { value: 10, label: "5s" },
                      { value: 20, label: "10s" },
                      { value: 30, label: "15s" },
                      { value: 40, label: "30s" },
                      { value: 50, label: "1m" },
                      { value: 60, label: "2m" },
                      { value: 70, label: "5m" },
                      { value: 80, label: "10m" },
                      { value: 90, label: "15m" },
                      { value: 100, label: "30m" },
                    ]}
                  />
                </div>
              </Group>
              <Group
                className="flex w-full justify-between border-2"
                style={{ padding: "16px 20px", borderRadius: 4 }}
              >
                <div>
                  <Text weight={500}>Kênh NSFW</Text>
                  <Text size="md" color="gray">
                    Người dùng sẽ cần xác nhận đủ tuổi để xem các nội dung trong
                    kênh này. Kênh NSFW không nằm trong bộ lọc nội dung rõ ràng.
                  </Text>
                </div>
                <Switch />
              </Group>
            </Group>
          </Tabs.Tab>
        </Tabs>
      </Modal>
      <Modal
        opened={openedModalSpecialDay}
        onClose={() => setOpenedModalSpecialDay(false)}
        position="center"
        placement="center"
        withArrow
        withCloseButton
        shadow="lg"
        title="Add member"
        zIndex={99999}
      >
        <Calendar
          fullWidth={true}
          size="lg"
          classNames={{ monthPicker: "w-full" }}
        />
      </Modal>
    </div>
  );
}
