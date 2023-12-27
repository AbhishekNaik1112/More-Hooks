import React, { useRef, useReducer } from 'react';
import TodoTask from './ToDoTask';

// Initial todo list with one visible item.
const initialState = [
  {
    data: "reference",
    isHidden: false, // This item is initially shown on the page.
  }
];

// Function to manage changes in the todo list.
const todoReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    // Add a new item to the list when you press Enter.
    return [
      ...state,
      {
        data: action.payload,
        isHidden: false // New items are visible by default.
      }
    ];
  }
  if (action.type === "CHANGE_ISHIDDEN") {
    // Toggle the visibility of an item when you interact with it.
    return state.map((e, i) => {
      return i === action.payload ? { ...e, isHidden: !e.isHidden } : e;
    });
  }
  return state;
};

// Todo component for displaying and managing the todo list.
const Todo = () => {
  // Using reducer to manage changes in the todo list.
  const [todo, dispatch] = useReducer(todoReducer, initialState);
  // Reference to the input field for adding new items.
  const input = useRef(null);

  return (
    <div className="max-w-md mx-auto my-8 p-4 bg-white shadow-md rounded-md">
      {/* Input field for adding new items. */}
      <input
        className="w-full p-2 mb-4 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
        placeholder="Enter an item"
        ref={input}
        type="text"
        onKeyDown={(e) => {
          // Add a new item when you press Enter and clear the input field.
          if (e.key === "Enter") {
            dispatch({ type: "ADD_ITEM", payload: e.target.value });
            input.current.value = ''; 
          }
        }}
      />

      {/* Display each todo item using TodoTask component. */}
      {todo.map((e, i) => (
        <TodoTask key={i} item={e} index={i} dispatch={dispatch} />
      ))}

      {/* Button to scroll back to the top and focus on the input field. */}
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
