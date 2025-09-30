let database = []; 

function createUsers(username, gender, email){
    let user = {
        "id": database.length,
        "username": username,
        "gender": gender, 
        "email": email,
    }
    if (!is_exist(user.id, user.email))
    if (checkAddress(email)){
    database.push(user)
}}

function is_exist(id, email){
    for (let i = 0; i < database.length; i++){
        if (database[i] === id || database[i].email === email){
            return true
        }
    } return false 
}

function checkAddress(email){
    if (!email.includes("@")){
        return false; 
    }

    let parts = email.split("@"); 
    let beforeAt = parts[0];
    let afterAt = parts[1];

    if (beforeAt.length == 0) return false; 
    if (!afterAt.includes(".")) return false; 
    if (!afterAt.endsWith("com")) return false; 

    let domainPart = afterAt.split(".");
    if (domainPart[0].length == 0) return false; 

    return true; 
}




createUsers("Jay", "male", "jay123@gmail.com");
createUsers("Jay", "male", "jay123@gmail.com");
createUsers("Kiki", "female", "kiki123@gmail.com");
createUsers("Thomas", "male", "thomas@gmail.tw")
createUsers("Thomas", "male", "thomas@gmail.com")
createUsers("Yulia", "female", "yulia@@gmail.com")
createUsers("Yulia", "female", "yulia@gmail.com")

console.log(database); 


