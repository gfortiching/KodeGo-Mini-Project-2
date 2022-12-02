// Opening message
function openingMessage() { 
        let firstMessage = "Hello! I am the Wizard Quiz Master. It's nice to meet you, Little Wizard!";
    document.getElementById("botStarterMessage").innerHTML = '<h4 class="botText"><span>' + firstMessage + '</span></h4>';

    setTimeout(() => {
        openingMessage();
        let secondMessage = "I can see that you've finished our first lesson. If you're ready to take the quiz, type <b>\"I\'m ready!\"</b>";
        document.getElementById("botStarterMessage2").innerHTML = '<h4 class="botText"><span>' + secondMessage + '</span></h4>';
    }, 1000)

    setTimeout(() => {
        openingMessage();
        let secondMessage = "If you're not yet ready to take the quiz, then type <b>\"Not yet.\"</b>";
        document.getElementById("botStarterMessage3").innerHTML = '<h4 class="botText"><span>' + secondMessage + '</span></h4>';
    }, 1000)
}

openingMessage();



// Retrieves the response (ChatBot part)
function getResponses(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';

    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}



//Gets the text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    getResponses(userText);
}



// Handles sending text via button clicks (User Part)
function buttonSendText(sample) {
    let userHtml = '<p class="userText"><span>' + sample + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    getResponses(sample);
}

function sendButton() {
    getResponse();
}