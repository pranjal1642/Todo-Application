// selectors

const todoInput = document.querySelector(".todo-input"); 
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
// console filterOption = document.querySelector(".filter-todo");
const dateElement = document.getElementById("date");

// Event Listners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click",deleteCheck);
// filterOption.addEventListener("click",filterTodo);
//Functions

function addTodo(event){

    // prevent form for submitting
    event.preventDefault();
    
    // //todo div

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // // Create Li

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // check Mark button

    const completedButton = document.createElement("button");
    completedButton.innerHTML= '<i class= "fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    
    // Check trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class= "fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    
    // Apeend todo list

    todoList.appendChild(todoDiv);

    // clear todo input value
      todoInput.value="";
}


function deleteCheck(e){
    const item = e.target;

    //delete todo

    if(item.classList[0]=== "trash-btn"){ 
        const todo = item.parentElement;
        todo.remove();
    }
    //check mark

    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

// function filterTodo(e){
//     const todos = todoList.childNodes;
//     todos.forEach(function(todos){
//         switch(e.target.value){
//             case "all":
//                 break;
//                 case "completed":
//                     if(todo.classList.contains)
//         }
//     }
// }