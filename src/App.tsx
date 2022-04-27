import React from "react";
import "./App.css";

const backgroudnColourPairs: Array<[string, string]> = [
  ["#c45321", "#da9647"],
  ["#da7304", "#dab046"],
  ["#da9404", "#d8c445"],
  ["#02a6c6", "#02b7ad"],
];

const answerPairs: Array<[string, string]> = [
  ["Cell wall", "Ribosomes"],
  ["Cytoplasm", "Chloroplast"],
  ["Partially permeable membrane", "Impermeable membrane"],
  ["Cellulose", "Mitochondria"],
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

  const questions = answerPairs.map((pair, i) =>
    Question({ pair, incrementColour }, i)
  );

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `linear-gradient(to top, ${backgroundColour[0]} , ${backgroundColour[1]})`,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "white" }}>An animal cell contains:</h1>
        {questions}
      </div>
    </div>
  );
};

const Question = (
  {
    pair,
    incrementColour,
  }: { pair: [string, string]; incrementColour: () => void },
  index: number
) => {
  // "initial" is used to prevent the toggle-button CSS from matching & running on page load
  const [togglePosition, setTogglePosition] = React.useState<
    "initial" | "left" | "right"
  >(() => "initial");

  return (
    <div
      key={index}
      style={{
        display: "flex",
        width: "100%",
        height: 100,
        justifyContent: "space-evenly",
        alignItems: "center",
        textAlign: "center",
        marginBottom: 10,
      }}
    >
      <div
        className="toggle-button"
        {...{ toggleposition: togglePosition }}
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
      />
      <div style={{ width: "50%" }}>
        <p
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          {pair[0]}
        </p>
      </div>
      <div style={{ width: "50%" }}>
        <p
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          {pair[1]}
        </p>
      </div>
    </div>
  );
};

export default App;
