let cart = []; 

function addItem(name, price, quantity){
    let item = {
        "name": name, 
        "price": price, 
        "quantity": quantity,
    }
    cart.push(item);
    return item
}

function removeItem(name){
    for (let i = 0; i < cart.length; i++){
        if (cart[i].name === name){
            cart.splice(i, 1); 
            return;
        }
    }
}

function updateQuantity(name, newQuantity){
    for (let i = 0; i < cart.length; i++){
        if (cart[i].name === name){
            cart[i].quantity = newQuantity
            return cart[i]
        }
    } 
}

function findItem(name){
    for (let i = 0; i < cart.length; i++){
        if (cart[i].name === name){
            return cart[i]; 
        }  
    } return "Item Not Found";
}

function applyDiscount(percentage){
    let total = 0;  
    for (let i = 0; i < cart.length; i++){
        total += cart[i].price * cart[i].quantity *(1 - percentage) 
    }
    return total; 
}

function totalCost(){
    let total = 0; 
    for (let i = 0; i < cart.length; i++){
        total += cart[i].price * cart[i].quantity
    }
    return total
}

addItem("resistance band", 130, 1);
addItem("water bottle", 520, 1); 
addItem("leggings", 790, 1); 
removeItem("water bottle");
updateQuantity("resistance band", 2);

console.log(cart)
console.log(findItem("water bottle"));
console.log(applyDiscount(0.2))
console.log(totalCost());


