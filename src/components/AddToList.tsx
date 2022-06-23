import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({ name: "", age: "", img: "", note: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.img) {
      return;
    }
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        img: input.img,
        note: input.note,
      },
    ]);

    setInput({ name: "", age: "", img: "", note: "" });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        value={input.name}
        placeholder="Name"
        className="AddToList-input"
        name="name"
        onChange={handleChange}
      ></input>
      <input
        type="number"
        value={input.age}
        placeholder="age"
        className="AddToList-input"
        name="age"
        onChange={handleChange}
      ></input>
      <input
        value={input.img}
        type="text"
        placeholder="Image Url"
        className="AddToList-input"
        name="img"
        onChange={handleChange}
      ></input>
      <textarea
        placeholder="Notes"
        value={input.note}
        className="AddToList-input"
        name="note"
        onChange={handleChange}
      ></textarea>
      <button className="AddToList-btn" onClick={handleClick}>
        Add To List
      </button>
    </div>
  );
};

export default AddToList;
