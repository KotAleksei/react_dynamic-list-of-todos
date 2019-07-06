export const   sortTodos = (todos, sortField, sortDirection) => {
    const callbackMap = {
        title: (a,b) => a.title.localeCompare(b.title) * sortDirection,
        name: (a,b) => a.user.name.toLowerCase().localeCompare(b.user.name.toLowerCase()) * sortDirection,
        completed: (a,b) => (a.completed - b.completed) * sortDirection,
    }
    const callback = callbackMap[sortField];
    const copyTodos = [ ...todos];
    
    return copyTodos.sort(callback);
}