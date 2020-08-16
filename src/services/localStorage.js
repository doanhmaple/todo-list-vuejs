export default {
    getTasks : () => {
        return JSON.parse(localStorage.getItem('__tasks'))
    },
    setTasks: (tasks) => {
        localStorage.setItem('__tasks', JSON.stringify(tasks))
    }
}