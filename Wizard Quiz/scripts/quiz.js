function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() { 
        let firstMessage = "Hello! I am the Wizard Quiz Master. It's nice to meet you, Little Wizard!";
    document.getElementById("botStarterMessage").innerHTML = '<h4 class="botText"><span>' + firstMessage + '</span></h4>';

    setTimeout(() => {
        firstBotMessage();
        let secondMessage = "I can see that you've finished our first lesson. If you're ready to take the quiz, type <b>\"I\'m ready!\"</b>";
        document.getElementById("botStarterMessage2").innerHTML = '<h4 class="botText"><span>' + secondMessage + '</span></h4>';
    }, 2000)

    setTimeout(() => {
        firstBotMessage();
        let secondMessage = "If you're not yet ready to take the quiz, then type <b>\"Not yet.\"</b>";
        document.getElementById("botStarterMessage3").innerHTML = '<h4 class="botText"><span>' + secondMessage + '</span></h4>';
    }, 3000)
}

firstBotMessage();

// Time Stamp
    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);

// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)
}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(sampleText);
    }, 1000)
}

function sendButton() {
    getResponse();
}

// // Press enter to send a message
// $("#textInput").keypress(function (e) {
//     if (e.which == 13) {
//         getResponse();
//     }
// });