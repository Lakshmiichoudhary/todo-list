import React, { useState, useEffect } from "react";

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
    <div className="p-2 flex justify-center" 
    onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
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
          >
            {isChecked && (
              <svg
                className="w-4 h-4 fill-current text-white pointer-events-none"
                viewBox="0 0 20 20"
              >
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
              </svg>
            )}
          </div>
          <span className={isChecked ? "line-through text-gray-500" : "text-gray-700"}>
            {task.name}
          </span>
        </label>
        {isHovered && (
          <button
            className="px-3 py-1 bg-emerald-500 text-white rounded-md ml-auto"
            onClick={handleDeleteButtonClick}
          >
            X
          </button>
        )}
      </div>
    </div>
  );
};

export default CheckBox;
