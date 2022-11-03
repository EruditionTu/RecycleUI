import React from 'react';

const Warn = props => (
  <svg
    className="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="882"
    width={props.width || 20}
    height={props.height || 20}
  >
    <path
      d="M512 64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64z m32 704h-64v-64h64v64z m-64-128V256h64v384h-64z"
      fill={props.color || '#f4ea2a'}
      p-id="883"
    />
  </svg>
);
export default Warn;
