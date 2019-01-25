import React from 'react';
import './hint.css';

function Hint(props) {
  return (
    <div className="hint">
      <h2>{props.hint}</h2>
    </div>
  );
}

export default Hint;
