let nextTodoId = 0;
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  color: "white",
  id: nextTodoId++,
  text
});

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});

export const toggleInput = (id) => ({
    type: 'TOGGLE_INPUT',
    id
});

export const changeColor = (color) => ({
    type: 'CHANGE_COLOR',
    color: color
});