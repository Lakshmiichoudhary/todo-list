import { useState, useEffect } from 'react';

const CheckBox = ({task}) => {
  const [isChecked, setIsChecked] = useState(
    localStorage.getItem('isChecked') === 'true' ? true : false
  );

  useEffect(() => {
    localStorage.setItem('isChecked', isChecked);
  }, [isChecked]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className='p-2'>
      <div>
        <h1 className='font-bold text-2xl'>Todo</h1>
      </div> 
      <div className="flex items-center">
        <input
          type="checkbox"
          id="taskCheckbox"
          className="hidden"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label
          htmlFor="taskCheckbox"
          className="flex items-center cursor-pointer"
        >
          <div className={`w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center mr-2 ${isChecked ? 'bg-emerald-500 border-transparent' : ''}`}>
          </div>
          <span className={isChecked ? 'line-through text-gray-500' : 'text-gray-700'}>
            {task}
          </span>
        </label>
        <button className='px-3 py-1 bg-emerald-500 mx-7 text-white rounded-md'>X</button>
      </div>
    </div>
  );
};

export default CheckBox;
