import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDecisions } from "../../hooks/useTasks.tsx";
import { AddSide } from "./AddOption.tsx";
import { randomOptions, randomQuestion } from "./Demo.ts";

export function SpinPage(): JSX.Element {
  const [question, setQuestion] = useState<string>("");
  const [rotation, setRotation] = useState<number>(0);
  const [spinning, setSpinning] = useState<boolean>(false);
  const options = useDecisions((store) => store.choices);
  const setChoices = useDecisions((store) => store.setChoices);

  const colors = [
    "lightpink",
    "lightskyblue",
    "lightyellow",
    "lavender",
    "lightgray",
  ];

  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  };
  const handleSpin = () => {
    setSpinning(true);
    const newRotation = rotation + Math.floor(Math.random() * 360) + 180;
    setRotation(newRotation);
    setTimeout(() => setSpinning(false), 3000); 
  };

  return (
    <div className="container md:container md:mx-auto text-center">
      <h2 className="text-center"> Spinner
      <div
          contentEditable
          onInput={handleQuestionChange}
          suppressContentEditableWarning={true}
        >
          {question || "Enter your question here"}
        </div>
      </h2>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3 m-5 content-center gap-4 md:grid-cols-4">
          <span className=" col-span-2 md:col-span-3 ml-5 spinner-container ">
            <div
              className={`spinner ${spinning ? "spinning" : ""}`}
              style={{ '--segments': options.length , transform: `rotate(${rotation}deg)` } as React.CSSProperties}
            >
              {options.map((option, index) => (
                <div
                  key={index}
                  className="spinner-segment"
                  style={
                    {
                      "--index": index,
                      "--color": colors[index % colors.length],
                      "--rotation": rotation
                    } as React.CSSProperties
                  }
                >
                  <p className="segment-text">{option.description}</p>
                </div>
              ))}
            </div>
            <div className="spinner-arrow"></div>
          </span>
          <span className="col-1">
          <button className="btns task-btns" onClick={handleSpin}> Spin! </button>
            <AddSide />
            <button className="btns task-btns" onClick={() => setChoices([])}>
              Clear
            </button>
            <button
              className="btns task-btns"
              onClick={() => {setChoices(randomOptions); setQuestion(randomQuestion)}}
            >
              Demo (random question + options)
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
