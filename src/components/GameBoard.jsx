

export default function GameBoard({ onSelectSquare, board }) {
  

  // const [gameBoard, setGameboard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //     setGameboard((prevGameboard) => {
  //         const updatedBoard = [...prevGameboard.map(innerArray => [...innerArray])];
  //         updatedBoard[rowIndex][colIndex] = activePlayerTag;
  //         return updatedBoard;
  //     });

  //     onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
