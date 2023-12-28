import React, { useRef, useReducer } from "react";
import TodoTask from "./ToDoTask";

const initialState = [
  {
    data: "reference",
    isHidden: false, // reference item is initially shown on the page.
  },
];

// Function to manage changes in the todo list.
const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    return [
      ...state,
      {
        data: action.payload,
        isHidden: false,
      },
    ];
  }
  if (action.type === "CHANGE_IS_HIDDEN") {
    return state.map((e, i) => {
      return i === action.payload ? { ...e, isHidden: !e.isHidden } : e;
    });
  }
  if (action.type === "DELETE_ITEM") {
    return state.filter((_, i) => i !== action.payload);
  }
  return state;
};

// Todo component for displaying and managing the todo list.
const Todo = () => {
  const [todo, dispatch] = useReducer(reducer, initialState);

  const input = useRef(null);

  return (
    <div className="max-w-md mx-auto my-8 p-4 bg-white shadow-md rounded-md">
      <input
        className="w-full p-2 mb-4 border-b-2 border-gray-300 focus:outline-none focus:border-red-600"
        placeholder="Enter an item"
        ref={input}
        type="text"
        onKeyDown={(e) => {
          if (e.key === "Enter" &&  input.current.value !=="") {
            dispatch({ type: "ADD_ITEM", payload: e.target.value });
            input.current.value = "";
          }
        }}
      />

      {todo.map((e, i) => (
        <TodoTask key={i} item={e} index={i} dispatch={dispatch} />
      ))}

      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none hover:bg-blue-600"
        onClick={() => {
          input.current.focus();
        }}
      >
        Go Back to Top
      </button>
    </div>
  );
};

export default Todo;
