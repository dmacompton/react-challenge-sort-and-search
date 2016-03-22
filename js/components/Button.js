import React, { Component } from 'react';

const Button = ({title, icon, update}) => {
  return (
    <button className="btn btn-default" onClick={update}>
      <i className={`icon fa ${icon}`}></i>{' '}{title}
    </button>
  );
};


export default Button;
