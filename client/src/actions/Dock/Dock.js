import React from "react";
import { useMotionValue } from "framer-motion";
import css from "./Dock.module.css";
import DockItem from "./DockItem/DockItem";
import history from "../../assets/images/icons/history.png";
import undo from "../../assets/images/icons/undo.png";
import redo from "../../assets/images/icons/redo.png";

export default function Dock() {
  const mouseX = useMotionValue(null);
  return (
    <section id="dock" class={css.container}>
      <div
        class={css.dockEl}
        onMouseMove={(event) => mouseX.set(event.nativeEvent.x)}
        onMouseLeave={() => mouseX.set(null)}
      >
        <div>
          {/* {appsConfig[appID].dockBreaksBefore && (
                <div
                  class={css.divider}
                  key={`${appID}-divider`}
                  aria-hidden="true"
                />
              )} */}
          <DockItem
            // index={i}
            // key={appID}
            title={"History"}
            mouseX={mouseX}
            appID={"1"}
            isOpen={false}
            icon={history}
          />
        </div>
        <div>
          {/* {appsConfig[appID].dockBreaksBefore && (
                <div
                  class={css.divider}
                  key={`${appID}-divider`}
                  aria-hidden="true"
                />
              )} */}
          <DockItem
            // index={i}
            // key={appID}
            title={"Redo"}
            mouseX={mouseX}
            appID={"2"}
            isOpen={false}
            icon={redo}
          />
        </div>
        <div className={css.divider} aria-hidden="true" />
        <div>
          {/* {appsConfig[appID].dockBreaksBefore && (
                <div
                  class={css.divider}
                  key={`${appID}-divider`}
                  aria-hidden="true"
                />
              )} */}
          <DockItem
            // index={i}
            // key={appID}
            title={"Undo"}
            mouseX={mouseX}
            appID={"3"}
            isOpen={false}
            icon={undo}
          />
        </div>
      </div>
    </section>
  );
}
