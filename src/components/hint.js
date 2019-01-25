import React from 'react';
import './hint.css';

function Hint(props) {
  console.log(props.hint);
  const styles = {backgroundColor: ''};
  if (props.hint ==='Cold') {
    styles.backgroundColor= 'blue';
  }
  if (props.hint ==='Hot') {
    styles.backgroundColor= 'tomato';
  }
  if (props.hint ==='Warm') {
    styles.backgroundColor= 'pink';
  }
  if (props.hint ==='You Win') {
    styles.backgroundColor= 'green';
  }
  return (
    <div className="hint" style={styles}>
      <h2>{props.hint}</h2>
    </div>
  );
}

export default Hint;
