import React from 'react';

function Hint(props) {
  const styles = {
    backgroundColor: '#CC324B',
    textAlign: 'center',
    padding: '20px',
    color: 'white'
  };

  return (
    <div className="hint" style={styles}>
      <h2>Cold</h2>
    </div>
  );
}

export default Hint;
