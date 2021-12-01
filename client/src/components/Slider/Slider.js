import React, { useState } from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import "./Slider.css";

export default function SliderControl({ icon, value, setValue }) {
  return (
    <div className="slider flex flex-row w-full">
      {/* <div className="h-7 p-2 bg-white rounded-l-full border-white">
        {icon}
      </div> */}
      <Slider
        min={1}
        max={100}
        value={value}
        handleLabel={icon}
        tooltip={true}
        orientation="horizontal"
        onChange={(v) => setValue(v)}
      />
    </div>
  );
}
