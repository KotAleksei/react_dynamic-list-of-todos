export const   sortTodos = (todos, sortField) => {
    const callbackMap = {
        titleup: (a,b) => a.title.localeCompare(b.title),
        titledown: (a,b) => b.title.localeCompare(a.title),
        nameup: (a,b) => a.user.name.toLowerCase().localeCompare(b.user.name.toLowerCase()),
        namedown: (a,b) => b.user.name.toLowerCase().localeCompare(a.user.name.toLowerCase()),
        completedup: (a,b) => a.completed - b.completed,
        completeddown: (a,b) => b.completed - a.completed,
    }
    const callback = callbackMap[sortField] || callbackMap.title;
    const copyTodos = [ ...todos];
    
    return copyTodos.sort(callback);
}