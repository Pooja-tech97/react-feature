import React from "react";

const Logger = ({ onLog }) => {
  console.log(" Logger rendered");
  return (
    <div>
      <button onClick={onLog}>Log Count</button>
    </div>
  );
};

export default Logger;
