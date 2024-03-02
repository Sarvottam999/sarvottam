// Tag.js

import React from 'react';

const Tag = ({ name, onClick }) => {
  return (
    <span className="tag" onClick={onClick}>
      {name}
    </span>
  );
}

export default Tag;
