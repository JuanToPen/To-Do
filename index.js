const list = document.getElementById("list")
const listItems = document.getElementsByClassName("listItems")
const eliminateButton = document.getElementsByClassName("eliminate")
const doneButton = document.getElementsByClassName("done")
const input = document.getElementById("input")

document.getElementById("submit").addEventListener("click", ()=>{
    if(input.value.length > 0){
        let listItemContainer = document.createElement("div")
        let buttons = document.createElement("div")
        let eliminateButton = document.createElement("button")
        eliminateButton.innerText = "X"
        let doneButton = document.createElement("button")
        doneButton.innerText = "Done"
        let newItem = document.createElement("li")
        newItem.setAttribute("class","listItems")
        newItem.setAttribute("id","listItemText")
        eliminateButton.setAttribute("class","eliminate")
        doneButton.setAttribute("class","done")
        listItemContainer.setAttribute("id","listItemContainer")
        buttons.append(eliminateButton,doneButton)
        listItemContainer.append(newItem,buttons)
        list.append(listItemContainer)
        if(input.value.length > 60){
            let shortened = input.value.slice(0,50) + "..."
            newItem.innerText = shortened
            input.value = ""
        }else{
            newItem.innerText = input.value
            input.value = ""
        }
    }
})

document.getElementById("clear").addEventListener("click", () =>{
    while(listItems.length > 0){
        listItems[0].remove()
        eliminateButton[0].remove()
        doneButton[0].remove()
    }
})

list.addEventListener("click",(e)=>{
    if(e.target.classList.contains("eliminate")){    
        e.target.nextSibling.remove() 
        e.target.parentNode.previousSibling.remove()
        e.target.parentNode.remove()
        e.target.remove()
    }
})

list.addEventListener("click",(e)=>{
    if(e.target.classList.contains("done")){
        e.target.parentNode.previousSibling.style.color = "rgb(75, 228, 75)";
        e.target.parentNode.previousSibling.style.textDecoration = "line-through";
    }
})