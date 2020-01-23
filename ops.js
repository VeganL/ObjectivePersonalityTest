var questions = {
    "firstQuestion": [
        "You have trouble making other people understand, appreciate, or get on board with doing things or seeing things your way. Getting yourself on board with other's ideas may also be an issue.",
        "Your life revolves around helping, giving advice, or solving problems for other people, and often, **** you either realize that not important to you or hit with imposter syndrome because can't help self ****.",
        "You often encounter random things or ideas that threaten your long term goals or the integrity of pre-existing structures/organization that you utilize.",
        "You have trouble devoting time to something for long enough to see your investments bear its fruits. You may have also even struggled to arrive at the decision to devote time because you wanted to keep your options open."
        ],
    "ipQuestion": [],
    "ejQuestion": [],
    "ijQuestion": [],
    "epQuestion": [],
}

var questionNumber = 1;

function loadQuestion(type = "default") {
    let question = [];
    switch(type) {
        case "ipQuestion":
            question = questions.ipQuestion;
            break;
        case "ejQuestion":
            question = questions.ejQuestion;
            break;
        case "ijQuestion":
            question = questions.ijQuestion;
            break;
        case "epQuestion":
            question = questions.epQuestion;
            break;
        default:
            question = questions.firstQuestion;
    }

    let textContent = '<h2>Question ' + String(questionNumber) + ':</h2><p>';
    questionNumber++;

    for (var i = 0; i < question.length; i++) {
        textContent += '<button class="select">' + question[i] + '</button>'
    }
    
    textContent += '</p><p id="dashboard"><button class="dash" onClick="loadQuestion()">NEXT</button></p>';
    document.getElementById("test-content").innerHTML = textContent;
}