import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    age: number;
    img: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      age: 35,
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Allegeric to staying on the same team",
    },
    {
      name: "Kobe Bryant",
      age: 42,
      img: "data:image/jpeg;base64,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",
    },
  ]);

  return (
    <div className="App">
      <h1>People invited to my Party</h1>
      <List people={people}></List>
      <AddToList people={people} setPeople={setPeople}></AddToList>
    </div>
  );
}

export default App;
