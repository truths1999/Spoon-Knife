let toDos = []; 

function addTask(title){
    let task = {
        "title": title, 
        "done": false, 
    }
    toDos.push(task)
    return task
}

function removeTask(title){
    for (let i = 0; i < toDos.length; i++){
        if (toDos[i].title === title){
            toDos.splice(i, 1); 
            return 
        }
    } 
}

function findTask(title){
    for (let i = 0; i < toDos.length; i++){
        if (toDos[i].title === title){
            return toDos[i]
        }
        }
    }  

function markDone(title){
    let item = findTask(title); 
    if (item){
        item.done = !item.done;
    }
}

function listTasks(){
       return toDos; 
    }  


addTask("Coding Practice"); 
addTask("TOEFL Practice");
addTask("Class Prep");
addTask("Do the cleaning")
removeTask("Do the cleaning")
markDone("Class Prep")
console.log(toDos)
console.log(listTasks())
