import React, { useRef } from "react";

const InputRef = () => {
  const inputRef = useRef(null);
  const paraRef = useRef(null);

  const addFocus = () => {
    inputRef.current.focus();
  };

  const addBlur = () => {
    inputRef.current?.blur();
  };

  const addLogValue = () => {
    alert(`Input value is: ${inputRef.current?.value}`);
  };

  const changeText = () => {
    paraRef.current.textContent = "Change the paragraph text";
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Uncontrolled Input with useRef</h2>
      <input ref={inputRef} type="text" placeholder="type here" />

      <div style={{ marginTop: "10px" }}>
        <button onClick={addFocus}>Focus</button>
        <button onClick={addBlur}>Blur</button>
        <button onClick={addLogValue}>Log Value</button>
      </div>

      <p ref={paraRef} style={{ marginTop: "20px" }}>
        This is a paragraph.
      </p>

      <button onClick={changeText}>Change Text</button>
    </div>
  );
};

export default InputRef;
