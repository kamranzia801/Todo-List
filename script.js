const mainTodoElem = document.querySelector(".todo-list-elem");
const inputValue = document.querySelector("#inputValue");


const getTodoListFromLocal = () => {
    return JSON.parse(localStorage.getItem("itemList"));
}

localTodoList = getTodoListFromLocal() || [];

const addTodoListLocalStorage = (e) => {
    return localStorage.setItem("itemList", JSON.stringify(localTodoList));
}

const addTodoElement = (element) => {
    const div = document.createElement("div")
    div.classList.add("main-todo-div");
    div.innerHTML = `<li>${element}</li> <button class="deleteBtn">Delete</button>`
    mainTodoElem.append(div);
}

const showTodoList = () => {
    console.log(localTodoList);
    localTodoList.forEach((element) => {
        addTodoElement(element);
    })
}

const removeTodoElement = (e) => {
    let todoToRemove = e.target
    let todoListContent = todoToRemove.previousElementSibling.innerText;
    let parentElement = todoToRemove.parentElement;
    console.log(todoListContent)

    localTodoList = localTodoList.filter((curr) => {
        return curr !== todoListContent;
    })
    addTodoListLocalStorage(localTodoList);
    parentElement.remove();
    console.log(localTodoList)
}

const addTodoList = (e) => {
    e.preventDefault();

    const todoListValue = inputValue.value.trim();

    if (todoListValue === "" || localTodoList.includes(todoListValue)) {
        inputValue.value = "";
        return;
    }

    localTodoList.push(todoListValue);
    localTodoList = [...new Set(localTodoList)];
    localStorage.setItem("itemList", JSON.stringify(localTodoList));
    addTodoElement(todoListValue);
    inputValue.value = "";
};

mainTodoElem.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("deleteBtn")) {
        removeTodoElement(e);
    }
});

document.querySelector(".btn").addEventListener("click", (e) => {
    addTodoList(e);
});

showTodoList();