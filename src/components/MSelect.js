import React, { useState } from "react";

const MultiSelect = ({ options, onSelect }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={() => handleOptionSelect(option)}
          />
          {option}
        </label>
      ))}
      <button onClick={() => onSelect(selectedOptions)}>Save</button>
    </div>
  );
};

export default MultiSelect;