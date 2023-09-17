// const action-name = () => () => {} ----> notation is supported by redux middleware called thunk
//
export const AddTodoAction = (todo) => (dispatch, getState) => {
    const { Todo: { todos } } = getState();
    const hasTodos = todos.find((t) => t.todo === todo);
    if (!hasTodos && todo !== '') {
        dispatch({
            type: "ADD_TODO",
            payload: [{ id: todo, todo }, ...todos]
        });
    }
};

export const RemoveTodo = (todo) => (dispatch, getState) => {
    const { Todo: { todos } } = getState();
    // const updatedTodos = todos.filter((t) => t.id !== todo.id);
    dispatch({
        type: "REMOVE_TODO",
        payload: todos.filter((t) => t.id !== todo.id)
    });
};