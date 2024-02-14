let formEle = document.getElementById("form-container");
let task_list = document.getElementById("task-list");
let inputEle = document.getElementById("task-input");
let btnEle = document.getElementById("task-btn");


let keys = Object.keys(localStorage);
if(keys)
{
    console.log(keys);
    for(let key of keys){
        createNewTask(localStorage.getItem(key));
        console.log(key);
    }
}

formEle.addEventListener("submit",function(ele){
    ele.preventDefault();
    let task = inputEle.value;
    console.log(task);
    if (task===""){
      alert ("Please enter a task ");
    }else{
    let taskId = Math.floor(Math.random() * 50);
    localStorage.setItem(taskId,task);
    createNewTask(task);
}   
});
function createNewTask(task){
   
let task_box = document.createElement('div');
task_box.classList.add("task-box");

//create input element

let inputEle1 = document.createElement("input");
inputEle1.setAttribute("type", "checkbox");
inputEle1.setAttribute("id", "checkBtn");
inputEle1.classList.add("new-task");
task_box.appendChild(inputEle1);

let inputEle2 = document.createElement("input");
inputEle2.setAttribute("type", "text");
inputEle2.setAttribute("value", task);
inputEle2.setAttribute("id", "task");
inputEle2.setAttribute("readonly","readonly");
inputEle2.classList.add("new-task");
task_box.appendChild(inputEle2);

let editButtonEle = document.createElement("button");
editButtonEle.setAttribute("type", "submit");
editButtonEle.setAttribute("id", "edit-btn");
editButtonEle.textContent = "Edit";
editButtonEle.classList.add("new-task");
task_box.appendChild(editButtonEle);

let deleteButtonEle = document.createElement("button");
deleteButtonEle.setAttribute("type", "submit");
deleteButtonEle.setAttribute("id", "delete-btn");
deleteButtonEle.textContent = "Delete";
deleteButtonEle.classList.add("new-task");
task_box.appendChild(deleteButtonEle);

task_list.appendChild(task_box);

inputEle.value = "";
 
//checkbox-clicked

inputEle1.addEventListener("click", function(){
    
    if(inputEle1.checked ){
        inputEle2.style.textDecoration = "line-through";
    }else{
        inputEle2.style.textDecoration = "none"; 
    } 
});

//edit button clicked
editButtonEle.addEventListener("click",function editBtn(){
        inputEle2.removeAttribute("readonly","readonly");
        inputEle2.focus();
        editButtonEle.textContent = "Save";


//save button clicked
    editButtonEle.addEventListener("click",function(){
    
    for (let key of keys){
        let taskEdit = inputEle2.value; //here we save the edited task
        if(localStorage.getItem(key) == task){
            localStorage.setItem(key, taskEdit);
            task = taskEdit;
        }
      
    }
        inputEle2.setAttribute("readonly","readonly");
        inputEle2.focus();
        editButtonEle.textContent = "Edit";   
        editButtonEle.addEventListener("click",function(){
            editBtn();
        });
      
    });    
});

//delete button clicked
deleteButtonEle.addEventListener("click",function(){
    task_list.removeChild(task_box);
    for (let key of keys){
        if(localStorage.getItem(key) === inputEle2.value){
            localStorage.removeItem(key);
        }
    }   
});

}
