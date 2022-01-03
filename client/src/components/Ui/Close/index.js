import React from "react";
import "./index.css";
export default function Close({active}) {
  return (
    <div className={`icon ${active ? 'active' : null}`}>
      <div className="first"></div>
      <div className="second"></div>
    </div>
  );
}
