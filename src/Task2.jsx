import React from 'react';

const Task2 = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="relative bg-slate-300 w-96 h-72 flex items-center justify-center rounded-lg">
        
        <div className="relative bg-red-800 w-56 h-36">
        
          <div className="absolute w-20 h-16 bg-red-800 -top-10 -left-6 border border-black"></div>
     
          <div className="absolute w-14 h-12 bg-black -top-8 -right-6"></div>
     
          <div className="absolute w-14 h-12 bg-black -bottom-8 -right-6"></div>
       
          <div className="absolute w-20 h-16 bg-red-800 -bottom-10 -left-6 border border-black"></div>
        </div>
      </div>
    </div>
  );
};

export default Task2;
