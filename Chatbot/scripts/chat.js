
// Collapsible
var collapse = document.getElementsByClassName("collapsible");

for (let i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

// Gets the first message
function firstBotMessage() { 
        let firstMessage = "Hello. It's nice to meet you, Little Wizard! How can I help you?";
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    setTimeout(() => {
        firstBotMessage();
    let secondMessage = "Try saying <b>\"Help\"</b>";
    document.getElementById("botStarterMessage2").innerHTML = '<p class="botText"><span>' + secondMessage + '</span></p>';
}, 2000)

    setTimeout(() => {
        firstBotMessage();
    let thirdMessage = "Type <b>\"List\"</b> for a list of keywords.";
    document.getElementById("botStarterMessage3").innerHTML = '<p class="botText"><span>' + thirdMessage + '</span></p>';
    }, 3000)
}

firstBotMessage();

// Retrieve response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}



// Getting text from input
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "Hello.";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)
}



// Send text by clicking button
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

// Press enter to send a message
// Enter Key = 13
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});