let quizzes = [ ]; 

function addQuestion(question, options, answer){
    let set = {
        "id": quizzes.length + 1, 
        "question": question, 
        "options": options, 
        "answer": answer
    }
    quizzes.push(set)
    return quizzes; 
}

function removeQuestion(id){
    for (let i = 0; i < quizzes.length; i++){
        if (quizzes[i].id === id){
            quizzes.splice(i, 1);
            return; 
        }
    }
}

function checkAnswer(id, answer){
    for (let i = 0; i < quizzes.length; i++){
    let question = quizzes.find(q => q.id === id);

    if (!question){
        return "Question not found"
    }

    if (quizzes.answer === answer){
        return "Your answer is correct"
    } else {
        return "You FAIL!"
    }
    }
}
addQuestion("What is tallest mountain in Taiwan", ["Mt.Jade", "Mt.Fuji"], "Mt.Jade");
addQuestion("Which is Taiwanese brand?", ["Panasonic", "Asus"], "Asus");
removeQuestion(1);
console.log(quizzes);
console.log(checkAnswer(2, "Panasonic"))

