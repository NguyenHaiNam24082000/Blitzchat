import React, { useState } from "react";
import {
  Collapse,
  AutoComplete,
  Avatar,
  AvatarGroup,
  Popover,
} from "@douyinfe/semi-ui";
import {
  IconFile,
  IconSetting,
  IconUserGroup,
  IconLink,
  IconImage,
} from "@douyinfe/semi-icons";
import { Keyboard, UserSearch, MessageSearch } from "iconsax-react";
import { FocusRing } from "react-focus-rings";
import { ActionIcon } from "@mantine/core";
// import { ContextMenu, MenuItem } from "react-contextmenu";

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

const renderOption = (item) => {
  return (
    <div className="flex items-center">
      <Avatar color={item.color} size="small">
        {item.abbr}
      </Avatar>
      <div style={{ marginLeft: 4 }}>
        <div style={{ fontSize: 14, marginLeft: 4 }}>{item.name}</div>
        <div style={{ marginLeft: 4 }}>{item.email}</div>
      </div>
    </div>
  );
};

export default function Complementary() {
  const [data, setData] = useState([]);
  const [openedKeyboard, setOpenedKeyboard] = useState(false);
  // eslint-disable-next-line
  const [list, setList] = useState([
    { name: "Xia", email: "xiakeman@example.com", abbr: "XK", color: "amber" },
    { name: "Shen", email: "shenyue@example.com", abbr: "SY", color: "indigo" },
    { name: "Qu", email: "quchenyi@example.com", abbr: "CY", color: "blue" },
    { name: "Wen", email: "wenjiamao@example.com", abbr: "JM", color: "cyan" },
  ]);

  const search = (value) => {
    let result;
    if (value) {
      result = list.map((item) => {
        return { ...item, value: item.name, label: item.email };
      });
    } else {
      result = [];
    }
    setData(result);
  };

  return (
    <div
      role="complementary"
      className="h-full flex flex-shrink-0 flex-col w-80"
      style={{
        backgroundColor: "#f7f6f3",
        // borderLeft: "2px solid #EBE7E4",
      }}
    >
      <div
        className="w-full h-16 flex items-center p-1"
        style={{ borderBottom: "2px solid #EBE7E4" }}
      >
        <FocusRing>
          <AutoComplete
            showClear
            prefix={<MessageSearch size="16" style={{ margin: "0 10px" }} />}
            placeholder="Search Messages"
            style={{ width: "100%", marginRight: 4 }}
            data={data}
            renderSelectedItem={(option) => option.email}
            renderItem={renderOption}
            onSearch={search}
            onSelect={(v) => console.log(v)}
          />
        </FocusRing>
        <FocusRing>
          <ActionIcon
            variant="hover"
            size={32}
            style={{ backgroundColor: "#ececea" }}
          >
            <Keyboard
              // onClick={() => {
              //   setOpenedShortcut(true);
              // }}
              onClick={() => {
                setOpenedKeyboard(true);
              }}
            />
          </ActionIcon>
        </FocusRing>
        {openedKeyboard && (
          <Keyboard style={{ position: "fixed", top: 0, left: 0 }} />
        )}
      </div>
      <div
        className="flex flex-col w-full overflow-y-auto items-center"
        style={{
          height: "calc(100% - 64px)",
          backgroundColor: "#fff",
        }}
      >
        <div
          className="relative w-full h-auto p-1 mb-6 flex flex-shrink-0"
          style={{
            backgroundColor: "inherit",
            userSelect: "none",
            minHeight: 144,
          }}
        >
          <div className="w-full h-full" style={{ backgroundColor: "inherit" }}>
            <img
              src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/buddypress/members/1/cover-image/5f6d2c93c75db-bp-cover-image.jpg"
              alt=""
              className="w-full h-full object-cover"
              style={{ borderRadius: 4 }}
            />
          </div>
          {/* <ContextMenuTrigger id="same_unique_identifier"
                  style={{backgroundColor: "inherit"}}
                > */}
          <div
            className="absolute -bottom-6 left-1/2 h-auto mask mask-hexagon"
            style={{
              width: "15%",
              minHeight: 92,
              minWidth: 92,
              padding: 6,
              transform: "translate(-50%,0px)",
              borderRadius: "20px",
              backgroundColor: "inherit",
            }}
          >
            <img
              className="w-full h-auto object-cover mask mask-hexagon"
              style={{
                borderRadius: "14px",
                minHeight: 80,
                minWidth: 80,
              }}
              src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/1/5f6d2c93a53d1-bpfull.jpg"
              alt=""
            />
          </div>
          {/* </ContextMenuTrigger> */}
          {/* <ContextMenu id="same_unique_identifier">
            <MenuItem data={{ foo: "bar" }}>ContextMenu Item 1</MenuItem>
            <MenuItem data={{ foo: "bar" }}>ContextMenu Item 2</MenuItem>
            <MenuItem divider />
            <MenuItem data={{ foo: "bar" }}>ContextMenu Item 3</MenuItem>
          </ContextMenu> */}
        </div>
        <div className="font-bold text-2xl">CNTT4K59</div>
        <Collapse style={{ width: "100%" }}>
          <Collapse.Panel
            header={
              <div className="flex justify-between w-full mr-1 items-center">
                <div className="flex items-center">
                  <IconUserGroup
                    className="mx-2"
                    style={{ color: "#e79020" }}
                  />
                  Members
                </div>
                <div className="members-avatar-group">
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
                    <Avatar
                      style={{
                        backgroundColor: "#87d068",
                        borderRadius: 4,
                      }}
                    >
                      YZ
                    </Avatar>
                  </AvatarGroup>
                </div>
              </div>
            }
            ItemKey="1"
            style={{ border: "none" }}
          >
            <FocusRing>
              <AutoComplete
                showClear
                prefix={<UserSearch size="16" style={{ margin: "0 10px" }} />}
                placeholder="Search Members"
                style={{ width: "100%" }}
                data={data}
                renderSelectedItem={(option) => option.email}
                renderItem={renderOption}
                onSearch={search}
                onSelect={(v) => console.log(v)}
              />
            </FocusRing>
            {/* <Player
                    autoplay={true}
                    loop={true}
                    controls={false}
                    src="https://assets5.lottiefiles.com/packages/lf20_urbk83vw.json"
                    style={{ height: "300px", width: "300px" }}
                  ></Player> */}
          </Collapse.Panel>
          <Collapse.Panel
            header={
              <div className="flex justify-between w-full mr-1 items-center">
                <div className="flex items-center">
                  <IconLink className="mx-2" style={{ color: "#e7617b" }} />
                  Links
                </div>
              </div>
            }
            itemKey="2"
            style={{ border: "none" }}
          ></Collapse.Panel>
          <Collapse.Panel
            header={
              <div className="flex justify-between w-full mr-1 items-center">
                <div className="flex items-center">
                  <IconFile className="mx-2" style={{ color: "#3cc451" }} />
                  Files
                </div>
              </div>
            }
            itemKey="3"
            style={{ border: "none" }}
          >
            <p>Hi, bytedance dance dance. This is the docsite of Semi UI. </p>
          </Collapse.Panel>
          <Collapse.Panel
            header={
              <div className="flex justify-between w-full mr-1 items-center">
                <div className="flex items-center">
                  <IconImage className="mx-2" style={{ color: "#359dfb" }} />
                  Images/Videos
                </div>
              </div>
            }
            itemKey="4"
            style={{ border: "none" }}
          >
            <p>Hi, bytedance dance dance. This is the docsite of Semi UI. </p>
          </Collapse.Panel>
          <Collapse.Panel
            header={
              <div className="flex justify-between w-full mr-1 items-center">
                <div className="flex items-center">
                  <IconSetting className="mx-2" style={{ color: "#00c7d9" }} />
                  Other settings
                </div>
              </div>
            }
            itemKey="5"
            style={{ border: "none" }}
          >
            <p>Hi, bytedance dance dance. This is the docsite of Semi UI. </p>
          </Collapse.Panel>
        </Collapse>
      </div>
      {/* <Player
                autoplay={true}
                loop={true}
                controls={false}
                src="https://assets5.lottiefiles.com/packages/lf20_urbk83vw.json"
                style={{ height: "300px", width: "300px" }}
              ></Player> */}
    </div>
  );
}
