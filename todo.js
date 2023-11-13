let input1 = document.querySelector("#inputbyuser");
let display1 = document.querySelector("ul");
let arr = [];
function fun1() {
    input1.value ="";
    arr.push(input1.value);
    for (let i = 0; i < arr.length; i++) {
        input1.innerHTML =''
        display1.innerHTML += `<li>${arr[i]}
        <span class="btns"> <button class="editBtn" onclick="editTodo(${i})">Edit</button>
        <button class="deleteBtn" onclick="deleteTodo(${i})">Delete</button> </span>
        </li> </br>`;
        input1.innerHTML=''
    }
}

 function deleteTodo (i){
     display1.innerHTML=''
     arr.splice(0,1);
     for (let i = 0; i < arr.length; i++) {
         input1.innerHTML =''
         display1.innerHTML += `<li>${arr[i]}
        <span class="btns"> <button class="editBtn" onclick="editTodo(${i})">Edit</button>
        <button class="deleteBtn" onclick="deleteTodo(${i})">Delete</button> </span>
        </li> </br>`;
        input1.innerHTML=''
    }
}

function editTodo (i){
    let edited = prompt("edit")
    arr.splice(0,0,edited);
    display1.innerHTML=''
    for (let i = 0; i < arr.length; i++) {
        input1.innerHTML =''
        display1.innerHTML += `<li>${arr[i]}
       <span class="btns"> <button class="editBtn" onclick="editTodo(${i})">Edit</button>
       <button class="deleteBtn" onclick="deleteTodo(${i})">Delete</button> </span>
       </li> </br>`;
       input1.innerHTML=''
   }
 }
    
    
    
    
    
    
     
