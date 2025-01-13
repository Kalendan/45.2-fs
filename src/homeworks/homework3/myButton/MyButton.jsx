// import React from 'react';
import './MyButton.css';


export default function MyButton({func, text, type}) {
  return <button type={type} onClick={func}>{text}</button>
}


