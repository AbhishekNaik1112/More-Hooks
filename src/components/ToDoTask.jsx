import React from "react";

const TodoTask = ({ item: { data, isHidden }, index, dispatch }) => {  //destructuring it so that i can get specific props from them
  return (
    <div className="border p-4 mb-4">
      <h3 className={`text-xl ${isHidden ? "text-gray-500" : "text-black"}`}>
        {isHidden ? "This Content Is Hidden" : data}
      </h3>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 cursor-pointer"
        onClick={() => dispatch({ type: "CHANGE_IS_HIDDEN", payload: index })}
      >
        Toggle
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-2 ml-5 cursor-pointer"
        onClick={() => dispatch({ type: "DELETE_ITEM", payload: index })}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoTask;
