import React from "react";
import { createRoot } from "react-dom/client";
const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.animal),
    React.createElement("h2", {}, props.pet),
    React.createElement("h2", {}, props.breed),
  ]);
};
const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "React Dev"),
    React.createElement(Pet, {
      animal: "Dog",
      pet: "Max",
      breed: "Labrador Retriever",
    }),
    React.createElement(Pet, {
      animal: "Cat",
      pet: "Whiskers",
      breed: "Siamese",
    }),
    React.createElement(Pet, {
      animal: "Bird",
      pet: "Tweety",
      breed: "Parrot",
    })
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
