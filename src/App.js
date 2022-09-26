import { useState } from "react";
import GameContainer from "./components/GameContainer";
import Level from "./components/Level";
import "./App.css";

function App() {
  const [style, setStyle] = useState({
    styleInput: "",
    styleCSS: "",
  });
  const updateStyle = (e) => {
    let result = {},
      attributes = e.target.value.replace(/\n|\r/g, ";").split(";"),
      entry;

    for (let i = 0; i < attributes.length; i++) {
      entry = attributes[i].split(":");
      result[entry.splice(0, 1)[0]] = entry.join(":");
    }
    setStyle({
      styleInput: e.target.value,
      styleCSS: { display: "flex", ...result },
    });
  };
  return (
    <div className="App">
      <Level level="1" style={style} updateStyle={updateStyle} />
      <GameContainer styleCSS={{ ...style.styleCSS } || { display: "flex" }} />
    </div>
  );
}

export default App;
