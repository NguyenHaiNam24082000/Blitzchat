import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function PictureInPicture() {
  const constraintsRef = useRef(null);
  return (
    <>
      <motion.div className="drag-area" ref={constraintsRef} />
      <motion.div drag dragConstraints={constraintsRef} />
    </>
  );
}
