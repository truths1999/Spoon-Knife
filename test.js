const shoppingList = []; 

function createItem(id, itemName, price){
    let item = {
        "itemName": itemName.toLowerCase(), 
        "price": price
    }
    shoppingList.push(item);
}

function deleteItem(itemName){
    for (let i = 0; i < shoppingList.length; i++){
        if (shoppingList[i].itemName === itemName){
            shoppingList.splice(i, 1);
            return;
        }
    }
}

function getItem(itemName){
    for (let i = 0; i < shoppingList.length; i++){
        if (shoppingList[i].itemName.toLowerCase() === itemName.toLowerCase()){
            return shoppingList[i]
        }
    }
}

createItem("shampoo", 420);
createItem("Soap", 120);
console.log(getItem("soap"))

