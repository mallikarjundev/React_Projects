import React from "react";
import TestComp from "./TestComp";

const Mango = () => {
  return <h2>Mangoes are sweet</h2>;
};

const Grapes = () => {
  return <h2>Grapes are good.</h2>;
};

function Sample() {
  return (
    <div>
      Sample
      <Mango></Mango>
      <Grapes />
      <TestComp />
    </div>
  );
}

export default Sample;
