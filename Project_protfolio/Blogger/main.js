window.onload = setupFunction;

var postCount = 0;

function setupFunction() {
    var topElement = document.getElementById("top");
    topElement.innerHTML = "Welcome to the Forum";

    var buttons = document.getElementsByTagName("button");
    var postButton = buttons[0];
    var clearButton = buttons[1];

    postButton.onclick = postFunction;
    clearButton.onclick = clearFunction;
}

function postFunction() {
    var messageBox = document.getElementById("message");
    var messageText = messageBox.value;

    if (messageText.trim() === "") {
        alert("Please type a message before posting!");
        return;
    }

    if (postCount === 0) {
        document.getElementById("topic").innerHTML = messageText;
        postCount++;
    } else if (postCount === 1) {
        document.getElementById("reply1").innerHTML = messageText;
        postCount++;
    } else if (postCount === 2) {
        document.getElementById("reply2").innerHTML = messageText;
        postCount++;
    } else {
        alert("Maximum posts reached! Please clear to start over.");
    }

    messageBox.value = "";
}

function clearFunction() {
    document.getElementById("topic").innerHTML = "";
    document.getElementById("reply1").innerHTML = "";
    document.getElementById("reply2").innerHTML = "";

    document.getElementById("message").value = "";

    postCount = 0;
}