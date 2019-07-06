export const getTodos = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos')
            .then(resp => resp.json());
}
export const getUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json());
}
