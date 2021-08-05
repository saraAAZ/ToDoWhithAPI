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
   }
    ).catch(error=> {
        console.log(error);
    })
}

function addElement(item){
    toDoArray.push(item);
    

}
fetchData();
console.log(toDoArray);
// const fetchto= async(url)=>{
//     fetch(`${url}`).then(res=>res.json()).then(data=>data.forEach(item=>toDoArray.push(item)))
// }
// console.log(toDoArray);
// if(inputContent.value.trim() ==0 && timeBtn.value.trim()==0){
//     addBtn.classList.add("active");
// }else (inputContent.value.trim() !=0 && timeBtn.value.trim()!=0){
//     addBtn.classList.remove("active");
// }
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
    // buttonTrash.innerHTML='<i class="fas fa-trash-alt trashIcon"></i>';
    

function show(){
    
    toDoArray.forEach(input=>{
        
        item.innerHTML= inputContent.value;
        itemContainer.appendChild(checkLabel);
        itemContainer.appendChild(item);
        itemContainer.appendChild(timeCr);
        objectToDo.appendChild(itemContainer);
        objectToDo.appendChild(buttonTrash);
        toDoContainer.appendChild(objectToDo);


    })
    

}
show();
addBtn.addEventListener('click', function() {
    
    

       



    
    })

    
    buttonTrash.addEventListener('click',function(){
        toDoContainer.removeChild(objectToDo);
        counter--;
        spanCounter.innerHTML=counter;
        if(counter == 0){
            clearItem.classList.remove("buttonApperance");
        
        }
    
        })
        checkLabel.addEventListener('change', function(){
            if(checkLabel.checked == true){
                console.log("true");
                checkLabel.disabled=true;
                timeCr.innerHTML="Done";
                itemContainer.removeChild(minute);
                objectToDo.classList.remove("backColor");
                objectToDo.classList.add("done");
                
            }else{
                objectToDo.classList.add("backColor");
                objectToDo.classList.remove("done");
                itemContainer.removeChild(minute);
        
            }
            
        })
        
        clearItem.addEventListener('click',function(){
            toDoContainer.removeChild(objectToDo);
            spanCounter.innerHTML= 0;
        
            })
            spanCounter.innerHTML=toDoArray.length;