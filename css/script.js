let formEle = document.getElementById("form-container");
let task_list = document.getElementById("task-list");
let inputEle = document.getElementById("task-input");
let btnEle = document.getElementById("task-btn");

formEle.addEventListener("submit",function(ele){
    ele.preventDefault();
    let task = inputEle.value;

let task_box = document.createElement('div');
task_box.classList.add("task-box");

//create form element
let form = document.createElement("form");
form.setAttribute("id", "task-container");
task_box.appendChild(form);
//create input element
let inputEle1 = document.createElement("input");
inputEle1.setAttribute("type", "checkbox");
inputEle1.setAttribute("id", "checkBtn");
inputEle1.classList.add("new-task");
form.appendChild(inputEle1);

let inputEle2 = document.createElement("input");
inputEle2.setAttribute("type", "text");
inputEle2.setAttribute("value", task);
inputEle2.setAttribute("id", "task");
inputEle2.setAttribute("readonly","readonly");
inputEle2.classList.add("new-task");
form.appendChild(inputEle2);

let editButtonEle = document.createElement("button");
editButtonEle.setAttribute("type", "submit");
editButtonEle.setAttribute("id", "edit-btn");
editButtonEle.textContent = "Edit";
editButtonEle.classList.add("new-task");
form.appendChild(editButtonEle);

let deleteButtonEle = document.createElement("button");
deleteButtonEle.setAttribute("type", "submit");
deleteButtonEle.setAttribute("id", "delete-btn");
deleteButtonEle.textContent = "Delete";
deleteButtonEle.classList.add("new-task");
form.appendChild(deleteButtonEle);

task_list.appendChild(task_box);

inputEle.value = " ";


//checkbox-clicked

inputEle1.addEventListener("click",function(){
    if(inputEle1.checked ){
        inputEle2.style.textDecoration = "line-through";
    }else{
        inputEle2.style.textDecoration = "none"; 
    } 
});

//edit button clicked
editButtonEle.addEventListener("click",function(e){
    e.preventDefault();
        inputEle2.removeAttribute("readonly","readonly");
        editButtonEle.textContent = "Save";
//save button clicked
    editButtonEle.addEventListener("click",function(){
        inputEle2.setAttribute("readonly","readonly");
        editButtonEle.textContent = "Edit";   
});
    
});

//delete button clicked
deleteButtonEle.addEventListener("click",function(d){
    d.preventDefault();
    if(deleteButtonEle){
        task_box.remove();
    }
});
});
