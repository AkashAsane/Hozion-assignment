import React from 'react';

const Task1 = ({ name }) => {
  return (
    <div className="flex items-center justify-center  m-10">
      <div className="text-center p-6 bg-white shadow-lg rounded-2xl">
        <h1 className="text-2xl font-semibold text-gray-800">
          Hello, <span className="text-blue-600">{name}</span>!
        </h1>
      </div>
    </div>
  );
};

export default Task1;
