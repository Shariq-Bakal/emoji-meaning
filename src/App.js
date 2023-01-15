import "./styles.css";
import React, { useState } from "react";

//This is a database
const emojisDict = {
  "🤣": "This means laugh out loud",
  "😘": "This means kissing",
  "😊": "This means Happiness",
  "😒": "This means ignoring",
  "👌": "This means perfect"
};
const convertObjDict = Object.keys(emojisDict);

export default function App() {
  //useState
  let [renderEmoji, showmeaning] = useState("");
  //First part
  function firstpart(event) {
    let targetEmoji = event.target.value;
    let getEmoji = emojisDict[targetEmoji];
    showmeaning(getEmoji);
  }
  //second part
  function secondPart(emoji) {
    let renderEmoji = emojisDict[emoji];

    showmeaning(renderEmoji);
  }
  return (
    <div className="App">
      <h2> Emojis Meaning app</h2>
      <input onChange={firstpart} />
      <h2> {renderEmoji} </h2>
      <ul>
        {convertObjDict.map((emoji) => {
          return (
            <span key={emoji} onClick={() => secondPart(emoji)}>
              {emoji}
            </span>
          );
        })}
      </ul>
      <span></span>
    </div>
  );
}
