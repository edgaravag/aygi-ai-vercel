import React from 'react';

const Dropdown = ({ selectedOption, onChange }) => {
  return (
    <select
      value={selectedOption}
      onChange={(e) => onChange(e.target.value)}
      className="border p-2 rounded text-[#68BB59]"
    >
      <option value="disease">Disease detection</option>
      <option value="plant">Plant identification</option>
    </select>
  );
};

export default Dropdown;
