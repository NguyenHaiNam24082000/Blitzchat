import "./index.css";
import React, { useState, useRef, useEffect } from "react";
import { Layout } from "@douyinfe/semi-ui";
import Navigation from "../../components/Navigation/Navigation";
import Channel from "../../components/Channel";
import Complementary from "../../components/Complementary";
import ChatArea from "../../components/ChatArea";
import Sidebar from "../../components/Sidebar/Sidebar";
import Note from "../../components/Note";
import VideoCall from "../../components/VideoCall/VideoCall";
import Paint from "../../components/Paint/Paint";
import { FocusRingScope } from "react-focus-rings";
import "react-focus-rings/src/styles.css";
import { useRecoilValue } from "recoil";
import { brightnessState } from "../../recoils/controlsState";
import { motion } from "framer-motion";
import { Resizable } from "re-resizable";
import ReactPictureInPicture from "react-picture-in-picture";
import {
  IconArrowLeft,
  IconUserCardVideo,
  IconSetting,
  IconStop,
} from "@douyinfe/semi-icons";
import { ActionIcon, Menu, Button } from "@mantine/core";
import { useGeolocation, useNetworkState } from "react-use";
import { useNotifications } from "@mantine/notifications";

function Workspace() {
  const { Header, Content, Sider } = Layout;
  const brightness = useRecoilValue(brightnessState);
  const containerRef = useRef(null);
  const [active, setActive] = useState(false);
  const location = useGeolocation();
  const networkState = useNetworkState();
  const notifications = useNotifications();
  useEffect(() => {
    if (!networkState.online) {
      notifications.showNotification({
        title: "You're offline now",
        message: "Opps! Internet is disconnected.",
      });
    }
  }, [networkState]);
  return (
    // min brightness=1 max=100
    <motion.div
      className="w-screen h-screen overflow-hidden flex flex-shrink-0"
      style={{ filter: `brightness(${brightness * 0.7 + 50}%)` }}
      ref={containerRef}
    >
      <FocusRingScope containerRef={containerRef}>
        <Layout className="w-full h-full flex-shrink-0 flex">
          <Sider className="w-16 flex flex-shrink-0">
            <Sidebar />
          </Sider>
          <Layout className="overflow-hidden">
            <Header className="flex justify-center items-center h-10 bg-red-500">
              <Navigation />
            </Header>
            <Content
              className="w-full flex overflow-hidden flex-shrink-0"
              style={{ height: "calc(100% - 40px);" }}
            >
              {/* <img src={Bell} alt="bell" className="w-5 h-5" /> */}
              <Channel />
              <ChatArea />
              {/* <Complementary />  */}
              {/* <Note /> */}
              {/* {JSON.stringify(location, null, 2)}
              {JSON.stringify(networkState, null, 2)} */}
              {/* <VideoCall /> */}
              {/* <Paint /> */}
            </Content>
          </Layout>
        </Layout>
      </FocusRingScope>
      <motion.div
        className="item"
        drag
        dragConstraints={containerRef}
        whileTap={{ cursor: "grabbing" }}
      >
        <Resizable
          style={{
            borderRadius: "inherit",
            objectFit: "cover",
          }}
          minWidth={320}
          minHeight={180}
          maxWidth={480}
          maxHeight={270}
          defaultSize={{
            width: 320,
            height: 180,
          }}
        >
          <div
            className="pip-nav absolute top-0 left-0 flex w-full h-auto z-50 p-2"
            style={{
              borderTopLeftRadius: "inherit",
              borderTopRightRadius: "inherit",
              background:
                "linear-gradient(#000,transparent 85%,transparent 100%)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <ActionIcon variant="transparent" className="z-50">
              <IconArrowLeft style={{ color: "#fff" }} />
            </ActionIcon>
          </div>
          <ReactPictureInPicture
            className="w-full h-full"
            style={{
              cursor: "grab",
              borderRadius: "inherit",
              objectFit: "cover",
            }}
            whileTap={{ cursor: "grabbing" }}
            controls={false}
            autoPlay={true}
            muted={true}
            loop={true}
            isActive={active}
          >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" />
          </ReactPictureInPicture>
          <div
            className="pip-nav absolute bottom-0 left-0 flex w-full h-auto z-50 p-2 justify-between"
            style={{
              borderBottomLeftRadius: "inherit",
              borderBottomRightRadius: "inherit",
              background:
                "linear-gradient(to top,#000,transparent 85%,transparent 100%)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div>
              <ActionIcon variant="transparent" className="z-50">
                <IconUserCardVideo
                  style={{ color: "#fff" }}
                  size="extra-large"
                />
              </ActionIcon>
            </div>
            <div className="flex">
              <Menu
                position="left"
                placement="end"
                control={
                  <div>
                    <ActionIcon variant="transparent" className="z-50 mr-3">
                      <IconSetting
                        style={{ color: "#fff" }}
                        size="extra-large"
                      />
                    </ActionIcon>
                  </div>
                }
              >
                <Menu.Item>Report problem</Menu.Item>
                <Menu.Item>Change view</Menu.Item>
                <Menu.Item onClick={() => setActive(!active)}>
                  Picture in picture
                </Menu.Item>
              </Menu>
              <ActionIcon variant="transparent" className="z-50">
                <IconStop style={{ color: "#fff" }} size="extra-large" />
              </ActionIcon>
            </div>
          </div>
        </Resizable>
      </motion.div>
    </motion.div>
  );
}

export default Workspace;
