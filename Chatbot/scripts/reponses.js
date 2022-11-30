function getBotResponse(input) {
    //rock paper scissors
    if (input == "Help") {
        return "What is your problem? If you have issues on your account you can email us at <b>littlewizards@gmail.com<b>.";
    } else if (input == "List") {
        return "Here are a list of keywords.";
    } else if (input == "Email") {
        return "Email us at <b>littlewizards@gmail.com<b>.";
    }

    // Simple responses
    if (input == "Hello.") {
        return "Hello, Little Wizard!";
    } else {
        return "I didn't get that. Try asking something else.";
    }
}