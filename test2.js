let todos = [ ]; 

function addToDo(text){
    let item = {
        "text": text, 
        "done": false, 
    }
    todos.push(item)
    return item; 
}

function deleteToDo(text){
    for (let i = 0; i < todos.length; i++){
        if (todos[i].text === text){
            todos.splice(i, 1); 
            return; 
        }
    }
}

function getToDo(text){
    for (let i = 0; i < todos.length; i++){
        if (todos[i].text === text){
            return todos[i]; 
        }
    }
}

function toggleToDo(text){
    let item = getToDo(text); 
    if (item){
        item.done === !item.done; 
    }
}

addToDo("Do the cleaning");
addToDo("Do the grocery shopping");
addToDo("Book round -trip tickets");
console.log(todos);