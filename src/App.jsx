import { useState } from "react";
import Header from "./travelj/Header";
import Body from "./travelj/Body";
import Data from "./data.js";

function App() {
  const entryElements = Data.map((entry) => {
    return (
      <>
        <Body key={entry.id} {...entry} />
      </>
    );
  });

  return (
    <>
      <Header />
      <main className="container">{entryElements}</main>
    </>
  );
}

export default App;
