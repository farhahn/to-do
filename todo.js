const item=document.querySelector("#item")
const todo = document.querySelector("#to-do-box")

item.addEventListener("keyup",
function(event){
    if(event.key=="Enter"){
       addToDo(this.value)
        this.value="";
    }
})

const addToDo = (item) =>{
    const listItem =document.createElement("li");
    listItem.innerHTML = `  ${item }
    <i class="fa-regular fa-square-check fa-fade"></i>  `;
listItem.addEventListener("click",function(){
    this.classList.toggle("mode");
})
listItem.querySelector("i").addEventListener("click",
function(){
    listItem.remove();
}
)

    todo.appendChild(listItem)
}