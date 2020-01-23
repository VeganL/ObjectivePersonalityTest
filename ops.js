var questions = {
    "firstQuestion": [
        "You have trouble making other people understand, appreciate, or get on board with doing things or seeing things your way. Getting yourself on board with other's ideas may also be an issue.",
        "Your life revolves around helping, giving advice, or solving problems for other people, and often, **** you either realize that not important to you or hit with imposter syndrome because can't help self ****.",
        "You often encounter random things or ideas that threaten your long term goals or the integrity of pre-existing structures/organization that you utilize.",
        "You have trouble devoting time to something for long enough to see your investments bear its fruits. You may have also even struggled to arrive at the decision to devote time because you wanted to keep your options open."
        ],
    "ipQuestion": ["Find the intake of new information to be more of a chore?",""], //FINISH QUESTIONS ON FLOW CHART AND PUT THEM HERE
    "ipij": ["",""],
    "ipep": ["",""],
    "IxFPS": ["",""],
    "IxTPS": ["",""],
    "IxFPC": ["",""],
    "IxTPC": ["",""],

    "ejQuestion": ["",""],
    "ejij": ["",""],
    "ejep": ["",""],
    "ExFJB": ["",""],
    "ExTJB": ["",""],
    "ExFJP": ["",""],
    "ExTJP": ["",""],

    "ijQuestion": ["",""],
    "ijip": ["",""],
    "ijej": ["",""],
    "ISxJS": ["",""],
    "INxJS": ["",""],
    "ISxJB": ["",""],
    "INxJB": ["",""],

    "epQuestion": ["",""],
    "epip": ["",""],
    "epej": ["",""],
    "ESxPC": ["",""],
    "ENxPC": ["",""],
    "ESxPP": ["",""],
    "ENxPP": ["",""],
}

var questionNumber = 1;
var questionRoute = 0;
var secondLevelChoice = 0;
var thirdLevelChoice = 0;
var finalType;

function loadQuestion(type) {
    let question = [];
    switch(type) {
        case "1":
            question = questions.ipQuestion;
            break;
        case "2":
            question = questions.ejQuestion;
            break;
        case "3":
            question = questions.ijQuestion;
            break;
        case "4":
            question = questions.epQuestion;
            break;
        
        case "1.1":
            question = questions.ipij;
            break;
        case "1.2":
            question = questions.ipep;
            break;
        case "2.1":
            question = questions.ejij;
            break;
        case "2.2":
            question = questions.ejep;
            break;
        case "3.1":
            question = questions.ijip;
            break;
        case "3.2":
            question = questions.ijej;
            break;
        case "4.1":
            question = questions.epip;
            break;
        case "4.2":
            question = questions.epej;
            break;

        case "1.1.1":
            question = questions.IxFPS;
            break;
        case "1.2.1":
            question = questions.IxFPC;
            break;
        case "2.1.1":
            question = questions.ExFJB;
            break;
        case "2.2.1":
            question = questions.ExFJP;
            break;
        case "3.1.1":
            question = questions.ISxJS;
            break;
        case "3.2.1":
            question = questions.ISxJB;
            break;
        case "4.1.1":
            question = questions.ESxPC;
            break;
        case "4.2.1":
            question = questions.ESxPP;
            break;
        case "1.1.2":
            question = questions.IxTPS;
            break;
        case "1.2.2":
            question = questions.IxTPC;
            break;
        case "2.1.2":
            question = questions.ExTJB;
            break;
        case "2.2.2":
            question = questions.ExTJP;
            break;
        case "3.1.2":
            question = questions.INxJS;
            break;
        case "3.2.2":
            question = questions.INxJB;
            break;
        case "4.1.2":
            question = questions.ENxPC;
            break;
        case "4.2.2":
            question = questions.ENxPP;
            break;

        default:
            question = questions.firstQuestion;
    }

    let textContent = '<h2>Question ' + String(questionNumber) + ':</h2><h3>';
    if (questionNumber===1) {
        textContent += 'Which would best describe yourself? Choose one.</h3><p>'
    } else {
        textContent += 'Do you...</h3><p>'
    };

    if (questionNumber != 4) {
        for (var i = 0; i < question.length; i++) {
            textContent += '<button class="select" id="' + String(i+1) + '" onclick="enableNext(' + String(i+1) + ')">' + question[i] + '</button>'
        }
    } else {
        for (var i = 0; i < question.length; i++) {
            textContent += '<button class="select" id="' + String(i+1) + '" onclick="enableNext(' + String(i+1) + ')">' + question[i] + '</button>'
        }
    }
    
    
    textContent += '</p><p id="dashboard"><button class="dash">NEXT</button></p>';
    document.getElementById("test-content").innerHTML = textContent;
    questionNumber++;
}

function enableNext(opt) {
    let buttonArray = [];
    for (var i = 0; i < 4; i++) {
        if (i+1 === opt) {
            let button = document.getElementById(String(i+1));
            button.style.backgroundColor = "#c1c1ff";
            if (questionNumber-1===1) {
                questionRoute = i+1;
                document.getElementById("dashboard").innerHTML = '<button class="dash" onclick="loadQuestion(\'' + String(questionRoute) + '\')">NEXT</button>';
            } else if (questionNumber-1===2) {
                document.getElementById("dashboard").innerHTML = '<button class="dash" onclick="loadQuestion(\'' + String(questionRoute) + '.' + String(i+1) + '\')">NEXT</button>';
                secondLevelChoice = i+1;
            } else if (questionNumber-1===3) {
                document.getElementById("dashboard").innerHTML = '<button class="dash" onclick="loadQuestion(\'' + String(questionRoute) + '.' + String(secondLevelChoice) + '.' + String(i+1) + '\')">NEXT</button>';
                thirdLevelChoice = i+1;
            } else {
                document.getElementById("dashboard").innerHTML = '<button class="dash" onclick="loadType(\'' + String(questionRoute) + '.' + String(secondLevelChoice) + '.' + String(thirdLevelChoice) + '.' + String(i+1) + '\')">NEXT</button>';
                finalType = String(questionRoute) + String(secondLevelChoice) + String(thirdLevelChoice) + String(i+1);
            }
        } else {
            let button = document.getElementById(String(i+1));
            button.style.backgroundColor = "#ffffff";
        }
    }
}

function loadType(type) {
    switch (type) {
        case "1.1.1.1":
            document.getElementById("test-content").innerHTML = '<h2>You have tested as Fi/Ni-S (ISFP Jumper)</h2><p><img src="types/FiNi-S.png"></p><p id="dashboard"><button class="dash" onclick="window.location.href = \'index.html\'">RETAKE TEST</button></p>';
            break;
        case "1.1.1.2":
            document.getElementById("test-content").innerHTML = '<h2>You have tested as Fi/Si-S (INFP Jumper)</h2><p><img src="types/FiSi-S.png"></p><p id="dashboard"><button class="dash" onclick="window.location.href = \'index.html\'">RETAKE TEST</button></p>';
            break;
        case "1.1.2.1":
            document.getElementById("test-content").innerHTML = '<h2>You have tested as Ti/Ni-S (ISTP Jumper)</h2><p><img src="types/TiNi-S.png"></p><p id="dashboard"><button class="dash" onclick="window.location.href = \'index.html\'">RETAKE TEST</button></p>';
            break;
        case "1.1.2.2":
            document.getElementById("test-content").innerHTML = '<h2>You have tested as Ti/Si-S (INTP Jumper)</h2><p><img src="types/TiSi-S.png"></p><p id="dashboard"><button class="dash" onclick="window.location.href = \'index.html\'">RETAKE TEST</button></p>';
            break;
        case "1.2.1.1": //FROM HERE ON IS UNFINISHED (INCOMPLETE)
            document.getElementById("test-content").innerHTML = '<h2>You have tested as Fi/Ni-S (ISFP Jumper)</h2><p><img src="types/FiNi-S.png"></p><p id="dashboard"><button class="dash" onclick="window.location.href = \'index.html\'">RETAKE TEST</button></p>';
            break;
        case "1.2.1.2":
            document.getElementById("test-content").innerHTML = '<h2>You have tested as Fi/Ni-S (ISFP Jumper)</h2><p><img src="types/FiNi-S.png"></p><p id="dashboard"><button class="dash" onclick="window.location.href = \'index.html\'">RETAKE TEST</button></p>';
            break;
        case "1.2.2.1":
            document.getElementById("test-content").innerHTML = '<h2>You have tested as Fi/Ni-S (ISFP Jumper)</h2><p><img src="types/FiNi-S.png"></p><p id="dashboard"><button class="dash" onclick="window.location.href = \'index.html\'">RETAKE TEST</button></p>';
            break;
        case "1.2.2.2":
            document.getElementById("test-content").innerHTML = '<h2>You have tested as Fi/Ni-S (ISFP Jumper)</h2><p><img src="types/FiNi-S.png"></p><p id="dashboard"><button class="dash" onclick="window.location.href = \'index.html\'">RETAKE TEST</button></p>';
            break;
        case "2.1.1.1":
            document.getElementById("test-content").innerHTML = '<h2>You have tested as Fi/Ni-S (ISFP Jumper)</h2><p><img src="types/FiNi-S.png"></p><p id="dashboard"><button class="dash" onclick="window.location.href = \'index.html\'">RETAKE TEST</button></p>';
            break;
        case "2.1.1.2":
            document.getElementById("test-content").innerHTML = '<h2>You have tested as Fi/Ni-S (ISFP Jumper)</h2><p><img src="types/FiNi-S.png"></p><p id="dashboard"><button class="dash" onclick="window.location.href = \'index.html\'">RETAKE TEST</button></p>';
            break;
        case "2.1.2.1":
            document.getElementById("test-content").innerHTML = '<h2>You have tested as Fi/Ni-S (ISFP Jumper)</h2><p><img src="types/FiNi-S.png"></p><p id="dashboard"><button class="dash" onclick="window.location.href = \'index.html\'">RETAKE TEST</button></p>';
            break;
        case "2.1.2.2":
            document.getElementById("test-content").innerHTML = '<h2>You have tested as Fi/Ni-S (ISFP Jumper)</h2><p><img src="types/FiNi-S.png"></p><p id="dashboard"><button class="dash" onclick="window.location.href = \'index.html\'">RETAKE TEST</button></p>';
            break;
        case "2.2.1.1":
            document.getElementById("test-content").innerHTML = '<h2>You have tested as Fi/Ni-S (ISFP Jumper)</h2><p><img src="types/FiNi-S.png"></p><p id="dashboard"><button class="dash" onclick="window.location.href = \'index.html\'">RETAKE TEST</button></p>';
            break;
        case "2.2.1.2":
            document.getElementById("test-content").innerHTML = '<h2>You have tested as Fi/Ni-S (ISFP Jumper)</h2><p><img src="types/FiNi-S.png"></p><p id="dashboard"><button class="dash" onclick="window.location.href = \'index.html\'">RETAKE TEST</button></p>';
            break;
        case "2.2.2.1":
            document.getElementById("test-content").innerHTML = '<h2>You have tested as Fi/Ni-S (ISFP Jumper)</h2><p><img src="types/FiNi-S.png"></p><p id="dashboard"><button class="dash" onclick="window.location.href = \'index.html\'">RETAKE TEST</button></p>';
            break;
        case "2.2.2.2":
            document.getElementById("test-content").innerHTML = '<h2>You have tested as Fi/Ni-S (ISFP Jumper)</h2><p><img src="types/FiNi-S.png"></p><p id="dashboard"><button class="dash" onclick="window.location.href = \'index.html\'">RETAKE TEST</button></p>';
            break;
        case "3.1.1.1":
            document.getElementById("test-content").innerHTML = '<h2>You have tested as Fi/Ni-S (ISFP Jumper)</h2><p><img src="types/FiNi-S.png"></p><p id="dashboard"><button class="dash" onclick="window.location.href = \'index.html\'">RETAKE TEST</button></p>';
            break;
        case "3.1.1.2":
            document.getElementById("test-content").innerHTML = '<h2>You have tested as Fi/Ni-S (ISFP Jumper)</h2><p><img src="types/FiNi-S.png"></p><p id="dashboard"><button class="dash" onclick="window.location.href = \'index.html\'">RETAKE TEST</button></p>';
            break;
        case "3.1.2.1":
            document.getElementById("test-content").innerHTML = '<h2>You have tested as Fi/Ni-S (ISFP Jumper)</h2><p><img src="types/FiNi-S.png"></p><p id="dashboard"><button class="dash" onclick="window.location.href = \'index.html\'">RETAKE TEST</button></p>';
            break;
        case "3.1.2.2":
            document.getElementById("test-content").innerHTML = '<h2>You have tested as Fi/Ni-S (ISFP Jumper)</h2><p><img src="types/FiNi-S.png"></p><p id="dashboard"><button class="dash" onclick="window.location.href = \'index.html\'">RETAKE TEST</button></p>';
            break;
        case "3.2.1.1":
            document.getElementById("test-content").innerHTML = '<h2>You have tested as Fi/Ni-S (ISFP Jumper)</h2><p><img src="types/FiNi-S.png"></p><p id="dashboard"><button class="dash" onclick="window.location.href = \'index.html\'">RETAKE TEST</button></p>';
            break;
        case "3.2.1.2":
            document.getElementById("test-content").innerHTML = '<h2>You have tested as Fi/Ni-S (ISFP Jumper)</h2><p><img src="types/FiNi-S.png"></p><p id="dashboard"><button class="dash" onclick="window.location.href = \'index.html\'">RETAKE TEST</button></p>';
            break;
        case "3.2.2.1":
            document.getElementById("test-content").innerHTML = '<h2>You have tested as Fi/Ni-S (ISFP Jumper)</h2><p><img src="types/FiNi-S.png"></p><p id="dashboard"><button class="dash" onclick="window.location.href = \'index.html\'">RETAKE TEST</button></p>';
            break;
        case "3.2.2.2":
            document.getElementById("test-content").innerHTML = '<h2>You have tested as Fi/Ni-S (ISFP Jumper)</h2><p><img src="types/FiNi-S.png"></p><p id="dashboard"><button class="dash" onclick="window.location.href = \'index.html\'">RETAKE TEST</button></p>';
            break;
        case "4.1.1.1":
            document.getElementById("test-content").innerHTML = '<h2>You have tested as Fi/Ni-S (ISFP Jumper)</h2><p><img src="types/FiNi-S.png"></p><p id="dashboard"><button class="dash" onclick="window.location.href = \'index.html\'">RETAKE TEST</button></p>';
            break;
        case "4.1.1.2":
            document.getElementById("test-content").innerHTML = '<h2>You have tested as Fi/Ni-S (ISFP Jumper)</h2><p><img src="types/FiNi-S.png"></p><p id="dashboard"><button class="dash" onclick="window.location.href = \'index.html\'">RETAKE TEST</button></p>';
            break;
        case "4.1.2.1":
            document.getElementById("test-content").innerHTML = '<h2>You have tested as Fi/Ni-S (ISFP Jumper)</h2><p><img src="types/FiNi-S.png"></p><p id="dashboard"><button class="dash" onclick="window.location.href = \'index.html\'">RETAKE TEST</button></p>';
            break;
        case "4.1.2.2":
            document.getElementById("test-content").innerHTML = '<h2>You have tested as Fi/Ni-S (ISFP Jumper)</h2><p><img src="types/FiNi-S.png"></p><p id="dashboard"><button class="dash" onclick="window.location.href = \'index.html\'">RETAKE TEST</button></p>';
            break;
        case "4.2.1.1":
            document.getElementById("test-content").innerHTML = '<h2>You have tested as Fi/Ni-S (ISFP Jumper)</h2><p><img src="types/FiNi-S.png"></p><p id="dashboard"><button class="dash" onclick="window.location.href = \'index.html\'">RETAKE TEST</button></p>';
            break;
        case "4.2.1.2":
            document.getElementById("test-content").innerHTML = '<h2>You have tested as Fi/Ni-S (ISFP Jumper)</h2><p><img src="types/FiNi-S.png"></p><p id="dashboard"><button class="dash" onclick="window.location.href = \'index.html\'">RETAKE TEST</button></p>';
            break;
        case "4.2.2.1":
            document.getElementById("test-content").innerHTML = '<h2>You have tested as Fi/Ni-S (ISFP Jumper)</h2><p><img src="types/FiNi-S.png"></p><p id="dashboard"><button class="dash" onclick="window.location.href = \'index.html\'">RETAKE TEST</button></p>';
            break;
        case "4.2.2.2":
            document.getElementById("test-content").innerHTML = '<h2>You have tested as Fi/Ni-S (ISFP Jumper)</h2><p><img src="types/FiNi-S.png"></p><p id="dashboard"><button class="dash" onclick="window.location.href = \'index.html\'">RETAKE TEST</button></p>';
            break;
    }
}