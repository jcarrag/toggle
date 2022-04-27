import React from "react";
import "./App.css";

const backgroudnColourPairs: Array<[string, string]> = [
  ["#c45321", "#da9647"],
  ["#da7304", "#dab046"],
  ["#da9404", "#d8c445"],
  ["#02a6c6", "#02b7ad"],
];

const App = () => {
  // "initial" is used to prevent the toggle-button CSS from matching & running on page load
  const [togglePosition, setTogglePosition] = React.useState<
    "initial" | "left" | "right"
  >(() => "initial");

  const [backgroundColourIndex, setBackgroundColourIndex] = React.useState(
    () => 0
  );
  const incrementColour = () =>
    setBackgroundColourIndex(
      (backgroundColourIndex + 1) % backgroudnColourPairs.length
    );
  const backgroundColour = backgroudnColourPairs[backgroundColourIndex];

  return (
    <div style={{ width: "100vw" }}>
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "space-evenly",
          alignItems: "center",
          height: 100,
          backgroundImage: `linear-gradient(to top, ${backgroundColour[0]} , ${backgroundColour[1]})`,
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
            backgroundColor: "white",
            boxShadow: "0 3px 10px rgb(0 0 0 / 1)",
            opacity: 0.5,
            borderRadius: 50,
          }}
          onClick={() => {
            incrementColour();
            setTogglePosition(
              togglePosition === "left" || togglePosition === "initial"
                ? "right"
                : "left"
            );
          }}
        ></div>
        <p style={{ color: "white", fontWeight: "bold" }}>Left text</p>
        <p style={{ color: "white", fontWeight: "bold" }}>Right text</p>
      </div>
    </div>
  );
};

export default App;
