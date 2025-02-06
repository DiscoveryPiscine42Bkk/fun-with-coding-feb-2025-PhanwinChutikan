document.addEventListener("DOMContentLoaded", () => {
    const ftList = document.getElementById("ft_list");
    const newTodoBtn = document.getElementById("newTodo");

    // โหลดรายการ To-Do จาก Cookies
    loadTodos();

    newTodoBtn.addEventListener("click", () => {
        const todoText = prompt("Enter a new To-Do:");
        if (todoText) {
            addTodo(todoText);
            saveTodos();
        }
    });

    function addTodo(text) {
        const todo = document.createElement("div");
        todo.textContent = text;
        todo.classList.add("todo-item");
        todo.addEventListener("click", () => {
            if (confirm("Do you want to remove this To-Do?")) {
                todo.remove();
                saveTodos();
            }
        });
        ftList.prepend(todo);
    }

    function saveTodos() {
        const todos = Array.from(ftList.children).map(todo => todo.textContent);
        document.cookie = `todos=${JSON.stringify(todos)}; path=/`;
    }

    function loadTodos() {
        const cookies = document.cookie.split("; ");
        const todoCookie = cookies.find(row => row.startsWith("todos="));
        if (todoCookie) {
            const todos = JSON.parse(todoCookie.split("=")[1]);
            todos.forEach(addTodo);
        }
    }
});
