let inputContent = document.getElementById("inputItem");
let addBtn = document.querySelector(".inputField button");
let timeBtn = document.querySelector(".time");
let spanCounter = document.querySelector(".counterItem");
let counter = 0;
let clearItem = document.querySelector(".clear");
const url ="https://610990bad71b6700176399bd.mockapi.io/todos";
const urlCompleated ="https://jsonplaceholder.typicode.com/todos/todoID";


let toDoArray = [];

function fetchData(){
   fetch("https://610990bad71b6700176399bd.mockapi.io/todos").then(response =>{
       return response.json();
   }).then(data => {
       data.forEach(item => {
           addElement(item);
       });
    //   console.log(toDoArray);
    console.log(toDoArray);
    show();
   }
    ).catch(error=> {
        console.log(error);
    })
}

function addElement(item){
    toDoArray.push(item);
}
fetchData();
addBtn.addEventListener('click', function() {
    
    let itemValue=inputContent.value;
    fetch(url,{
    method:'POST',
    body:JSON.stringify({
        title:itemValue,
       
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .then(response =>{
        if (response.ok) {
     alert("Task is Added");}
     show();
    return response.json();    
    })
   .then(()=>location.reload())
    })

function show(){
    
    console.log(toDoArray);
    toDoArray.forEach((input,i)=>{
    let toDoContainer = document.querySelector(".toDo"); 
    let objectToDo = document.createElement("div"); 
    objectToDo.className = "toDoItem , backColor";
    let itemContainer =  document.createElement("div");
    itemContainer.className = "check";
    let checkLabel = document.createElement("input");
    checkLabel.type="checkbox";
    checkLabel.className="checB";
    let item = document.createElement("span");
    item.className="itemSpan";
    let timeCr=document.createElement("small");
    let buttonTrash= document.createElement("button");
    buttonTrash.className="trash";
    buttonTrash.innerHTML='<i class="fas fa-trash-alt trashIcon"></i>';
        item.innerHTML=input.title;
        itemContainer.appendChild(checkLabel);
        itemContainer.appendChild(item);
        itemContainer.appendChild(timeCr);
        objectToDo.appendChild(itemContainer);
        objectToDo.appendChild(buttonTrash);
        toDoContainer.appendChild(objectToDo);
            checkLabel.addEventListener('change', function(){
                if(checkLabel.checked == true){
                    console.log("true");
                    
                    checkLabel.disabled=true;
                    timeCr.innerHTML="Done";
                    objectToDo.classList.remove("backColor");
                    objectToDo.classList.add("done");
                    
                }else{
                    objectToDo.classList.add("backColor");
                    objectToDo.classList.remove("done");
                    itemContainer.removeChild(minute);
            
                }
                
            })
            buttonTrash.addEventListener('click',function(){
                toDoContainer.removeChild(objectToDo);
                let id = input.id;
                fetch(`${url}/${id}`,{
                    method:'DELETE',
                    })
                    .then(response=>response.json())
                    .then(()=>location.reload())
                    })
                
                
    

            

    })
    // spanCounter.innerHTML=toDoArray.length;
    

}

    show();