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
   fetch(url).then(response =>{
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

function show(){
    
    console.log(toDoArray);
    toDoArray.forEach(input=>{
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
        buttonTrash.addEventListener('click',function(){
            
            let deleteBtnIsPressed=e.target.id="delete-btn"
            let id=e.target.parentElement.dataset.id;
            if(deleteBtnIsPressed){
            fetch(`${url}/${id}`,{
            method:'DELETE',
            })
            .then(response=>response.json())
            .then(()=>location.reload())
            }
            
            })
            lists.addEventListener('click', (e)=> {
                let deleteBtnIsPressed=e.target.id="delete-btn"
            let id=e.target.parentElement.dataset.id;
            if(deleteBtnIsPressed){
            fetch(`${api_url}/${id}`,{
            method:'DELETE',
            })
            .then(response=>response.json())
            .then(()=>location.reload())
            }
            
            })
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

    })
    

}
show();
addBtn.addEventListener('click', function() {
   console.log("sth");

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
    item.innerHTML=inputContent.value ;
    itemContainer.appendChild(checkLabel);
    itemContainer.appendChild(item);
    itemContainer.appendChild(timeCr);
    objectToDo.appendChild(itemContainer);
    objectToDo.appendChild(buttonTrash);
    toDoContainer.appendChild(objectToDo);
    item.innerHTML="";
    
    clearItem.addEventListener('click',function(){
        toDoContainer.removeChild(objectToDo);
        spanCounter.innerHTML= 0;
    
        })
        spanCounter.innerHTML=toDoArray.length;
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
                    objectToDo.classList.remove("backColor");
                    objectToDo.classList.add("done");
                    
                }else{
                    objectToDo.classList.add("backColor");
                    objectToDo.classList.remove("done");
                    itemContainer.removeChild(minute);
            
                }
                
            })
        
    })

      