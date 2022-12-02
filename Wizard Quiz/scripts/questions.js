function getBotResponse(input) {

    // Questions
    if (input == "I'm ready!") {
      return "Alright! Let's start! <br><br> What is 5 * (5 + 5)?"; 
    }

    if (input == "Not yet.") {
        return "I understand. You can go back to our lessons and take a review.";
    } 

    if (input == "50") {
        let answer1 = 5 * (5 + 5);
        return "Great job! The answer is " + answer1 + ".<br><br>What is 20 + 25?" ;
    }  
    

    if (input === "45") {
        let answer2 = 20 + 25;
        return "Nice work! The answer is " + answer2 + ". You may now proceed to the next lesson.";
    } 

    else {
        return "Nice try! Try putting the correct answer.";
    }
};
