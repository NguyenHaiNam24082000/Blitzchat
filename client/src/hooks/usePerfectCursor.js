import React, { useState, useLayoutEffect, useCallback } from "react";
import { PerfectCursor } from "perfect-cursor";

export default function usePerfectCursor(cb, position) {
  const [pc] = useState(() => new PerfectCursor(cb));
  useLayoutEffect(() => {
    if (position) pc.addPosition(position);
    return () => pc.dispose();
  }, [pc]);

  const onPositionChange = useCallback(
    (position) => {
      pc.addPosition(position);
    },
    [pc]
  );
  return onPositionChange;
}
