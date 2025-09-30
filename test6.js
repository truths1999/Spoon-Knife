let quizzes = []; 

function addQuestion(question, options, answer){
    let set = {
        "id": quizzes.length + 1, 
        "question": question, 
        "options": options, 
        "answer": answer
    }
    quizzes.push(set);
    return set; 
} 

function removeQuestion(id){
    for (let i = 0; i < quizzes.length; i++){
        if (quizzes[i].id === id){
            quizzes.splice(i, 1)
            return; 
        }
    } 
}

function checkAnswer(id, answer){
    for (let i = 0; i < quizzes.length; i++){
        let question = quizzes.find(q => q.id === id);
        if (!question) return "Question not found."; 
        
        if (question.answer === answer){
            return "Your answer is correct."
        } else {
            return "You FAIL!"
        } 
    }
}

addQuestion("How many front cameras do iphone 12 mini have?", [1, 2, 3], 2)
console.log(quizzes);
console.log(checkAnswer(1, 3));