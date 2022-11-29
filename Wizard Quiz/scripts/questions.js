function getBotResponse(input) {

    // Questions
    if (input == "I'm ready!") {
      return "Alright! Let's start! <br><br> What is 5 * (5 + 5)?"; 
    }

    else if (input == "Not yet.") {
        return "I understand. You can go back to our lessons and take a review.";
    }

    else if (input == "50") {
        let answer1 = 5 * (5 + 5);
        return "Great job! The answer is " + answer1 + ".<br><br>What is 20 + 25?" ;
        score()
    } 

    else if (input == "45") {
        let answer2 = 20 + 25;
        return "Nice work! The answer is " + answer2 + ".";
        score()
    } 

    else {
        return "Oh, what was that again?";
    }
};
         


    //     else {
    //         return "Nice try! But that is not the correct answer.";
    // }