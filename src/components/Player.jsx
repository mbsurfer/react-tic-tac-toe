import {useState} from "react";

export default function Player({name, symbol, isActive, onChangeName}) {
    const [isEditing, setIsEditing] = useState(false);
    const [nameValue, setNameValue] = useState(name)

    function handleEditClick() {
        /*
        * BEST PRACTICE
        * When updating state based on previous state values, it is important to use the function form.
        * This ensures that we are always referencing the latest state value rather that the value that was set during
        * the initial render.
        * */
        setIsEditing(editing => !editing);

        if (isEditing) {
            onChangeName(symbol, nameValue);
        }
    }

    /* This function is being called for every keystroke in the input field */
    function handleChange(event) {
        setNameValue(event.target.value);
    }

    const playerName = (isEditing) ?
        <input type="text" placeholder="Player Name" value={nameValue} onChange={handleChange}/> :
        <span className="player-name">{nameValue}</span>;

    return (
        <li className={isActive ? 'active' : undefined}>
              <span className="player">
                  {playerName}
                  <span className="player-symbol">{symbol}</span>
              </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}