import * as React from 'react';
import { useState } from 'react';
import './style.css';
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function App() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);
  function onFunctionClick(i) {
    console.log(square);
    if (findWinner(square) || square[i]) {
      return;
    }
    let nextSquare = square.slice();
    if (isNext) {
      nextSquare[i] = 'X';
    } else {
      nextSquare[i] = 'O';
    }
    setIsNext(!isNext);
    setSquare(nextSquare);
  }

  let status;
  let winner = findWinner(square);
  if (winner) {
    status = 'Winner ' + winner;
  } else {
    status = 'Next player ' + (isNext ? 'X' : 'O');
  }
  return (
    <>
      <div>{status}</div>
      <div className="board-row">
        <Square value={square[0]} onSquareClick={() => onFunctionClick(0)} />
        <Square value={square[1]} onSquareClick={() => onFunctionClick(1)} />
        <Square value={square[2]} onSquareClick={() => onFunctionClick(2)} />
      </div>
      <div className="board-row">
        <Square value={square[3]} onSquareClick={() => onFunctionClick(3)} />
        <Square value={square[4]} onSquareClick={() => onFunctionClick(4)} />
        <Square value={square[5]} onSquareClick={() => onFunctionClick(5)} />
      </div>
      <div className="board-row">
        <Square value={square[6]} onSquareClick={() => onFunctionClick(6)} />
        <Square value={square[7]} onSquareClick={() => onFunctionClick(7)} />
        <Square value={square[8]} onSquareClick={() => onFunctionClick(8)} />
      </div>
    </>
  );
}

function findWinner(s) {
  const lineUp = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let g = 0; g < lineUp.length; g++) {
    let [a, b, c] = lineUp[g];
    if (s[a] && s[a] == s[b] && s[a] == s[c]) {
      return s[a];
    }
  }
  return null;
}
