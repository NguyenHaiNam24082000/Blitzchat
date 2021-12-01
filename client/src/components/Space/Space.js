import React, { useState } from "react";
// import { Avatar } from "@mantine/core";
import { Avatar, Badge } from "@douyinfe/semi-ui";
import "./Space.css";
import { FocusRing } from "react-focus-rings";

export default function Space({ image, title }) {
  const [active, setActive] = useState(false);
  return (
    <FocusRing>
      <div
        // className={`${active ? "space-active" : ""} relative`}
        style={{ height: "58px" }}
      >
        {/* <pre></pre>
        <pre></pre> */}
        <Badge
          count={"999"}
          position="rightBottom"
          style={{
            bottom: 12,
            right: 15,
            border: "2px solid var(--background-white-primary)",
          }}
        >
          <Avatar
            src={image}
            alt={title}
            className="avatar"
            size="medium"
            onClick={() => {
              setActive(!active);
            }}
          ></Avatar>
        </Badge>
      </div>
    </FocusRing>
  );
}
