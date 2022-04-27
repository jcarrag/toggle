import React from "react";
import "./App.css";

function App() {
  // "initial" is used to prevent the toggle-button CSS from matching & running on page load
  const [togglePosition, setTogglePosition] = React.useState<
    "initial" | "left" | "right"
  >(() => "initial");

  return (
    <div style={{ width: "100vw" }}>
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "space-evenly",
          alignItems: "center",
          height: 100,
        }}
      >
        <div
          className="toggle-button"
          {...{ togglePosition }}
          style={{
            position: "absolute",
            height: 100,
            width: "50%",
            left: 0,
            backgroundColor: "red",
            opacity: 0.5,
            borderRadius: 50,
          }}
          onClick={() =>
            setTogglePosition(
              togglePosition === "left" || togglePosition === "initial"
                ? "right"
                : "left"
            )
          }
        ></div>
        <p>Left text</p>
        <p>Right text</p>
      </div>
    </div>
  );
}

export default App;
