import React from 'react';

function Spacer({ flex = false, height = 12 }) {

  const style = {
    width: '100%',
    minHeight: height,
  };
  if (flex) {
    style.flex = height;
  }

  return (
    <React.Fragment>
      <div style={style} />
    </React.Fragment>
  );
}

export default Spacer;
