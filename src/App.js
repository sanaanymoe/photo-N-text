import React, { useState } from "react";
import { ChromePicker } from "react-color";
import { base64encode } from "nodejs-base64";

import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [color, setColor] = useState("");

  // const encodedText = base64encode(text);
  const encodedText = encodeURI(text);

  return (
    <div className="App">
      <h1 className="title">
        Photo<span> N </span> Text
      </h1>

      <div className="display-section">
        <section className="input-section">
          <input
            className="text-input"
            type="text"
            placeholder="Enter Overlay Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <h3 className="picker-title">Pick Overlay Color</h3>

          <ChromePicker
            className="color-picker"
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex.slice(1))}
          />
        </section>

        <img
          src={`https://assets.imgix.net/unsplash/bridge.jpg?txt=${encodedText}&blend=${color}&w=640&txtclr=fff&txtalign=center%2Cmiddle&txtsize=48&bm=normal&balph=50`}
          alt="golden gate bridge"
          className="main-image"
        />
      </div>
    </div>
  );
}

export default App;
