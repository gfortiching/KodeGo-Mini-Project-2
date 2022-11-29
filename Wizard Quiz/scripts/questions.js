function getBotResponse(input) {

    // Questions
    if (input == "I'm ready!") {
      return "Alright! Let's start! <br><br> What is 5 * (5 + 5)?"; 
    }

    else if (input == "Not yet.") {
        return "I understand. You can go back to our lessons and have a review.";
    }

    else if (input == "50") {
        let answer1 = 5 * (5 + 5);
        return "Great job! The answer is " + answer1 + ".";
    } 

    else {
        return "Oh, what was that again?";
    }
};
         


    //     else {
    //         return "Nice try! But that is not the correct answer.";
    // }