import React, { useState } from 'react';

const StateWithArray = () => {
  const [favourite, setFavourite] = useState(['Apple', 'Mango']);
  const [fruit, setFruit] = useState('');

  function addFruit(e) {
    setFruit(e.target.value);
  }

  function addToFavourite() {
    if (fruit !== '') {
      setFavourite([...favourite, fruit]);
      setFruit('');
    }
  }

  return (
    <div className="StatesWithArr">
      <div className="top-cont">
          <input
          type="text"
          placeholder="Enter your favourite fruit"
          onChange={addFruit}
          value={fruit}
        />
        <button onClick={addToFavourite}>Add</button>
      </div>
      <div className="bottom-cont">
          <h3>Favourite Fruits List :</h3>
          <ul>
            {favourite.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
      </div>
    </div>
  );
};

export default StateWithArray;