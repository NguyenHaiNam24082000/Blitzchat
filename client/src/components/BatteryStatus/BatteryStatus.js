import React, { useState, useEffect } from "react";
import { useBattery } from "react-use";

export default function BatteryStatus() {
  const [batteryStrokes, setBatteryStrokes] = useState(Array(5).fill(true));
  let currentStroke = 4;
  const batteryState = useBattery();
  useEffect(() => {
    let timer = null;

    //If battery is charging state. Animate strokes
    if (batteryState.charging) {
      setBatteryStrokes(Array(5).fill(false));

      //Start the timer
      timer = initChargingSequence();
    } else {
      //If not charging, calculate the total strokes based on the charge.
      calculateBatteryStrokes(batteryState.level);
    }

    //Clearing timer on unmout
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [batteryState]);
  const initChargingSequence = () =>
    setInterval(() => {
      if (currentStroke < 0) {
        currentStroke = 4;
        setBatteryStrokes(Array(5).fill(false));
        return;
      }

      setBatteryStrokes((strokes) =>
        strokes.map((stroke, idx) => (idx === currentStroke ? true : stroke))
      );

      currentStroke--;
    }, 1000);
  const calculateBatteryStrokes = (level) => {
    const batteryPercent = level * 100; //Battery percentage

    let totalStrokesCount = Math.ceil((batteryPercent * 5) / 100) - 1;

    setBatteryStrokes(
      Array(5)
        .fill(true)
        .map((d, i) => (i <= totalStrokesCount ? true : false))
        .reverse()
    );
  };
  if (!batteryState.isSupported) {
    return <h3>Battery sensor not supported</h3>;
  }

  if (!batteryState.fetched) {
    return <h3>Fetching battery status, please wait...</h3>;
  }
  let batteryPercent = Math.round(batteryState.level * 100);

  let batteryStatusClass = batteryState.charging
    ? "battery-charging"
    : batteryState.level * 100 > 20
    ? "battery-full"
    : "battery-empty";
  return <div></div>;
}
