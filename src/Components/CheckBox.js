import React, { useState, useEffect } from "react";
import Button from "./Button";

const CheckBox = ({ task, onCheckboxChange, onDeleteTask }) => {
  const [isChecked, setIsChecked] = useState(task.done);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsChecked(task.done);
  }, [task.done]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onCheckboxChange(task.id);
  };

  const handleDeleteButtonClick = () => {
    onDeleteTask(task.id);
  };

  return (
    <div
      className="p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          id={`taskCheckbox-${task.id}`}
          className="hidden"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label
          htmlFor={`taskCheckbox-${task.id}`}
          className="flex items-center cursor-pointer"
        >
          <div
            className={`w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center mr-2 ${
              isChecked ? "bg-emerald-500 border-transparent" : ""
            }`}
          ></div>
          <span className={isChecked ? "line-through text-gray-500" : "text-gray-700"}>
            {task.name}
          </span>
        </label>
        {isHovered && (
          <Button
            onClick={handleDeleteButtonClick}
            text="X"
            color="text-white bg-emerald-500"
          />
        )}
      </div>
    </div>
  );
};

export default CheckBox;
