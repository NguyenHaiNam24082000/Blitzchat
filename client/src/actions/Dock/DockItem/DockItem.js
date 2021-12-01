import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import useRaf from "@rooks/use-raf";
import React, { useRef, useState } from "react";
import css from "./DockItem.module.css";

export default function DockItem({ title, mouseX, appID, isOpen, icon }) {
  const [animateObj, setAnimateObj] = useState({
    translateY: ["0%", "0%", "0%"],
  });
  const imgRef = useRef();
  const { width } = useDockHoverAnimation(mouseX, imgRef);
  return (
    <button
      class={css.dockItemButton}
      aria-label={`Launch ${title}`}
      // onClick={openApp}
    >
      <p class={css.tooltip}>{title}</p>
      <motion.span
        onTap={() => setAnimateObj({ translateY: ["0%", "-39.2%", "0%"] })}
        initial={false}
        animate={animateObj}
        transition={{ type: "spring", duration: 0.7 }}
        transformTemplate={({ translateY }) => `translateY(${translateY})`}
      >
        <motion.img
          ref={imgRef}
          src={`https://cdn-icons-png.flaticon.com/512/82/82004.png`}
          // src={icon}
          draggable={false}
          style={{ width, willChange: "width" }}
          alt={`${title} app icon`}
        />
      </motion.span>
      <div class={css.dot} style={{ "--opacity": +isOpen }} />
    </button>
  );
}

const baseWidth = 57.6;
const distanceLimit = baseWidth * 6;
const beyondTheDistanceLimit = distanceLimit + 1;
const distanceInput = [
  -distanceLimit,
  -distanceLimit / 1.25,
  -distanceLimit / 2,
  0,
  distanceLimit / 2,
  distanceLimit / 1.25,
  distanceLimit,
];
const widthOutput = [
  baseWidth,
  baseWidth * 1.1,
  baseWidth * 1.414,
  baseWidth * 2,
  baseWidth * 1.414,
  baseWidth * 1.1,
  baseWidth,
];

const useDockHoverAnimation = (mouseX, ref) => {
  const distance = useMotionValue(beyondTheDistanceLimit);

  const widthPX = useSpring(
    useTransform(distance, distanceInput, widthOutput),
    {
      stiffness: 1300,
      damping: 82,
    }
  );

  const width = useTransform(widthPX, (width) => `${width / 16}rem`);

  useRaf(() => {
    const el = ref.current;
    const mouseXVal = mouseX.get();
    if (el && mouseXVal !== null) {
      const rect = el.getBoundingClientRect();

      const imgCenterX = rect.left + rect.width / 2;

      // difference between the x coordinate value of the mouse pointer
      // and the img center x coordinate value
      const distanceDelta = mouseXVal - imgCenterX;
      distance.set(distanceDelta);
      return;
    }

    distance.set(beyondTheDistanceLimit);
  }, true);

  return { width };
};
