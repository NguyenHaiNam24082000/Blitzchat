import React from "react";
import styled from "styled-components";
import FloatingReactionItem from "../FloatingReactions/FloatingReactionItem";
import GiantReactionMotionWrapper from "../FloatingReactions/GiantReactionMotionWrapper";
import { Player } from "@lottiefiles/react-lottie-player";
const FloatingTrackContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 150px;
  z-index: 100;
  // temporary
  height: 100%;
//   background: rgba(0, 0, 0, 0.5);
`;

export default function VideoCall() {
  return (
    <div className="bg-white flex w-full h-full relative">
      <FloatingTrackContainer>
        <FloatingReactionItem />
      </FloatingTrackContainer>
      <GiantReactionMotionWrapper
        motionKey={0}
        children={
          <Player
            autoplay={true}
            loop={true}
            controls={false}
            src="https://assets2.lottiefiles.com/packages/lf20_n6VH6C.json"
            style={{ height: "250px", width: "auto", marginRight: "8px" }}
          ></Player>
        }
      />
      <video
        style={{ borderRadius: 4, objectFit: "cover" }}
        className="w-60 h-60"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      ></video>
    </div>
  );
}
