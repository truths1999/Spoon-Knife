let shop = []; 

function addItem(itemName, price, quantity){
    let item = {
        "itemName": itemName,
        "price": price, 
        "quantity": quantity, 
    }
    shop.push(item); 
}

function findItem(itemName){
    for (let i = 0; i < shop.length; i++){
        if (shop[i].itemName === itemName){
            return shop[i]; 
        } else {
            return null 
        }
    } 
}

function filteredItem(){
    return shop.filter((item) => item.price > 2000 && item.quantity > 5); 
}



addItem("cap", 470, 5);
addItem("sneakers", 2780, 2); 
addItem("one-piece swimsuit", 2100, 13); 
console.log(filteredItem()); 