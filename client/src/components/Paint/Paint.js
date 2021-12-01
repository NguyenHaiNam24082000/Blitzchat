import React, { useRef, useEffect } from "react";
import Ruler from "@scena/react-ruler";

export default function Paint() {
  const ruler = useRef();
  useEffect(() => {
    ruler.current.resize();
  }, []);
  return (
    <div className="w-full h-full bg-white">
      <Ruler
        type="horizontal"
        ref={ruler}
        textAlign={"center"}
        negativeRuler={false}
        segment={5}
        mainLineSize={12}
        shortLineSize={5}
        longLineSize={4}
        style={{ display: "block", width: "100%", height: "30px" }}
      />
    </div>
  );
}
