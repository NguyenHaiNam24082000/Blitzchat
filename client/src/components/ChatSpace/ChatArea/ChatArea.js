import React from "react";
import "./ChatArea.css";
import { Menu, Divider } from "@mantine/core";
// import { RichTextEditor } from "@mantine/rte";
import EmptyBongoCat from "../../Ui/EmptyState/EmptyBongoCat";
import { Calendar1 } from "iconsax-react";
import { Empty } from "@douyinfe/semi-ui";
import { IconCaretdown } from "@douyinfe/semi-icons";
import RichTextEditor1 from "../../RichTextEditor/RichTextEditor1";
import FadingBalls from "react-cssfx-loading/lib/FadingBalls";

const emptyStyle = {
  padding: 30,
};

export default function ChatArea() {
  return (
    <div
      role="chatArea"
      className="h-full flex-shrink-0  flex-col bg-white"
      style={{ width: "calc(100% - ( 560px ))" }}
    >
      <div
        className="flex w-full h-16 justify-center items-center flex-shrink-0 z-50"
        style={{
          borderBottom: "2px solid #EBE7E4",
          backgroundColor: "#f7f6f3",
          backdropFilter: "20%",
        }}
      ></div>
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
        className="w-full flex-shrink-0 flex items-center flex-col overflow-y-visible"
        style={{ height: "calc(100% - 64px)" }}
        // style={{
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        //   background:
        //     "url(https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80)",
        // }}
      >
        <div className="flex flex-col w-full h-full ">
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
                  >
                    A specific day
                  </Menu.Item>
                </Menu>
              </div>
            </div>
            <div className="chat-content"></div>
          </div>

          <Empty
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
          />
          <div className="flex flex-col px-10 text-sm">
            <RichTextEditor1 />
            <div className="flex w-full justify-between text-2xs">
              <div className="flex items-center">
                <FadingBalls className="text-gray-400 hover:text-gray-900"/>
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
    </div>
  );
}
