let contactBook = [ ]; 

function addContact(name, phonenum){
    let contact = {
        "name": name, 
        "phonenum": phonenum, 
    }
    contactBook.push(contact)
    return contact; 
}

function deleteContact(name){
    for(let i = 0; i < contactBook.length; i++){
        if (contactBook[i].name === name){
            contactBook.splice(i, 1); 
            return; 
        }
    }
}

function findContact(name){
    for(let i = 0; i < contactBook.length; i++){
        if (contactBook[i].name === name){
            return contactBook[i]; 
        }
    }
    return null; 
}

function editContact(name, newName, newPhonenum){
    let contact = findContact(name); 
    if (contact){
        if (newName !== undefined) contact.name = newName;
        if (newPhonenum !== undefined) contact.phonenum = newPhonenum;
        return contact; 
    } else {
        return null
    }
}

addContact("Kuan", `0909710083`);
addContact("Linda", `0939520503`);
addContact("Artem", `0975104295`);
editContact("Kuan", "Lynn", `0939210225`)
console.log(contactBook);