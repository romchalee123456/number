import React, { useState } from "react";

function Star() {
  const [number, setNumber] = useState("");
  const [displayOutput, setDisplayOutput] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(number); 

    if (num > 0) {
      const output = [];

      for (let i = 1; i <= num; i++) {
        output.push("*".repeat(i)); 
      }

      for (let i = num - 1; i >= 1; i--) {
        output.push("*".repeat(i)); 
      }

      setDisplayOutput(output); 
    } else {
      setDisplayOutput([]); 
    }

  };

  return (
    <div className="flex flex-col mt-10 ml-20 items-start">
      <form onSubmit={handleSubmit} className="mb-4 flex items-center">
        <label className="mr-2">Input:</label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="border border-gray-300 rounded mr-2 text-[12px] text-center p-1"
        />
        <button
          type="submit"
          className="border border-gray-300 rounded text-[12px] p-1"
        >
          Submit
        </button>
      </form>

      <div className="mt-4">
        <div className="ml-6 text-xl">
          {displayOutput.map((line, index) => (
            <div key={index}>{line}</div> 
          ))}
        </div>
      </div>
    </div>
  );
}

export default Star;
