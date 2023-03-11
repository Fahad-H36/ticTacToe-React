import React, { useState, useEffect } from "react";
import Box from "./box";

const Board = (props) => {
  const [boxes, setBoxes] = useState([
    { id: 1, value: "[-]", disabler: false },
    { id: 2, value: "[-]", disabler: false },
    { id: 3, value: "[-]", disabler: false },
    { id: 100, value: "", disabler: false },
    { id: 4, value: "[-]", disabler: false },
    { id: 5, value: "[-]", disabler: false },
    { id: 6, value: "[-]", disabler: false },
    { id: 200, value: "[-]", disabler: false },
    { id: 7, value: "[-]", disabler: false },
    { id: 8, value: "[-]", disabler: false },
    { id: 9, value: "[-]", disabler: false },
  ]);

  const [flag, setFlag] = useState(true);

  const [bValue, setBValue] = useState("GAME IS ON");

  const handleBtnClick = (box) => {
    const newBoxes = [...boxes];
    const index = newBoxes.indexOf(box);
    if (flag) newBoxes[index].value = " (0) ";
    else newBoxes[index].value = " (x) ";
    newBoxes[index].disabler = true;
    setFlag(!flag);

    setBoxes(newBoxes);
  };

  const handleEnd = () => {
    const newBoxes = [...boxes];
    newBoxes.map((box) => {
      box.disabler = true;
      return box;
    });
    const val = flag ? "Game Over X won!!" : "Game Over O won!!";
    setBValue(val);
    setBoxes(newBoxes);
  };
  useEffect(() => {
    if (
      (boxes[0].value === boxes[1].value &&
        boxes[1].value === boxes[2].value &&
        boxes[2].value !== "[-]") ||
      (boxes[4].value === boxes[5].value &&
        boxes[5].value === boxes[6].value &&
        boxes[5].value !== "[-]") ||
      (boxes[8].value === boxes[9].value &&
        boxes[9].value === boxes[10].value &&
        boxes[10].value !== "[-]") ||
      (boxes[0].value === boxes[4].value &&
        boxes[4].value === boxes[8].value &&
        boxes[8].value !== "[-]") ||
      (boxes[1].value === boxes[5].value &&
        boxes[5].value === boxes[9].value &&
        boxes[9].value !== "[-]") ||
      (boxes[2].value === boxes[6].value &&
        boxes[6].value === boxes[10].value &&
        boxes[10].value !== "[-]") ||
      (boxes[0].value === boxes[5].value &&
        boxes[5].value === boxes[10].value &&
        boxes[10].value !== "[-]") ||
      (boxes[2].value === boxes[5].value &&
        boxes[5].value === boxes[8].value &&
        boxes[5].value !== "[-]")
    ) {
      handleEnd();
    }
  }, [boxes]);
  return (
    <React.Fragment>
      <span className="badge badge-info">
        {bValue}
        <br />
      </span>
      <div>
        {boxes.map((box) => {
          if (box.id % 100 === 0) return <br key={box.id} />;

          return (
            <Box key={box.id} currentBox={box} onBtnClick={handleBtnClick} />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Board;
