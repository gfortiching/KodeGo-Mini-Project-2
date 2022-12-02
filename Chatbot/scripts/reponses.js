function getBotResponse(input) {
    //rock paper scissors
    if (input == "Help") {
        return "Do you have any problems on your classes? You can email us at <b>littlewizards@gmail.com</b>.";
    } else if (input == "List") {
        return "Here are a list of keywords. <b>\"Code\" \"LogIn\" \"SignUp\"</b>";
    } else if (input == "Code") {
        return "Email us at <b>littlewizards@gmail.com<b>. We will email you your code once we verify your name.";
    } else if (input == "LogI") {
        return "You can Log In at the top right corner of the website.";
    } else if (input == "SignUp") {
        return "You can Sign Up at the top right corner of the website, or click on <b>\"Learn For Free\"</b> on the homepage.";
    }

    // Simple responses
    if (input == "Hello.") {
        return "Hello, Little Wizard!";
    } else {
        return "I didn't get that. Say something else.";
    }
}