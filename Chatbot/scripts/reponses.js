function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "Hello") {
        return "Hello, Little Wizard!";
    } else if (input == "Not yet.") {
        return "Alright! Come back later if you're ready. Good luck!";
    } else {
        return "Try asking something else!";
    }
}