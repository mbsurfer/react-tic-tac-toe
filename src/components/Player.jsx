import {useState} from "react";

export default function Player({name, symbol}) {
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
    }

    function handleChange(event) {
        setNameValue(event.target.value);
    }

    const playerName = (isEditing) ?
        <input type="text" placeholder="Player Name" value={nameValue} onChange={handleChange} /> :
        <span className="player-name">{nameValue}</span>;

    return (
        <li>
              <span className="player">
                  {playerName}
                  <span className="player-symbol">{symbol}</span>
              </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}