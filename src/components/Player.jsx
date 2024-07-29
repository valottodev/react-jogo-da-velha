import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [isEditing, setisEditing] = useState(false);
  const [playerName, setPlayerName ] = useState(initialName);

  function handleEditClick() {
    // setisEditing(!isEditing);
    //NÃO DEVEMOS PASSAR O VALOR ASSIM NO REACT POIS ELE NÃO ATUALIZA IMEDIATAMENTE
    // então devemos passar uma função como parâmetro para atualizar o estado, dessa forma:
    setisEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {isEditing ? (
          <input type="text" required value={playerName} onChange={handleChange} />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
