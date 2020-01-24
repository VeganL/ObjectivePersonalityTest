var questions = {
    "firstQuestion": [
        "You have trouble making other people understand, appreciate, or get on board with doing things or seeing things your way. Getting yourself on board with other's ideas or values may also be an issue.",
        "Your life revolves around helping, giving advice, or solving problems for other people, but when it comes to helping yourself, you find that you're at a loss for what to do.",
        "You often encounter random things or ideas that threaten your long term goals or the integrity of pre-existing structures/organizations that you utilize.",
        "You have trouble devoting time to something for long enough to see your investments bear their fruits. You may have even struggled to arrive at the decision to devote time because you wanted to keep your options open."
        ],
    "ipQuestion": ["Find the intake of new information to be more of a chore?","Spend a majority of your time learning new things?"],
    "ipij": ["Have trouble conveying reasons to other people as to why you do things a certain way?","Have trouble handling or expressing your emotions or the emotions of other people?"], //FINISH QUESTIONS ON FLOW CHART AND PUT THEM HERE
    "ipep": ["Have trouble conveying reasons to other people as to why you do things a certain way?","Have trouble handling or expressing your emotions or the emotions of other people?"],
    "IxFPS": ["",""],
    "IxTPS": ["",""],
    "IxFPC": ["",""],
    "IxTPC": ["",""],

    "ejQuestion": ["Tend to interact with people in an improvisational, in-the-moment fashion?","Tend to interact with people in ways meant to organize some aspect of conduct?"],
    "ejij": ["Have trouble expressing reasons that may threaten the status quo?","Find it takes a lot of effort to make decisions based on what you value when it can affect your group's goals?"],
    "ejep": ["Have trouble expressing reasons that may threaten the status quo?","Find it takes a lot of effort to make decisions based on what you value when it can affect your group's goals?"],
    "ExFJB": ["",""],
    "ExTJB": ["",""],
    "ExFJP": ["",""],
    "ExTJP": ["",""],

    "ijQuestion": ["Feel naturally obligated to share information and plans or manage the conduct of other people?","Have an inclination to continually revise plans and structure of personal life (whether mentally, or in a tangible manner) and have trouble sharing information to yourself?"],
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
    
    
    textContent += '</p><p id="dashboard"><button class="dash">NEXT QUESTION</button></p>';
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
                document.getElementById("dashboard").innerHTML = '<button class="dash" onclick="loadQuestion(\'' + String(questionRoute) + '\')">NEXT QUESTION</button>';
            } else if (questionNumber-1===2) {
                document.getElementById("dashboard").innerHTML = '<button class="dash" onclick="loadQuestion(\'' + String(questionRoute) + '.' + String(i+1) + '\')">NEXT QUESTION</button>';
                secondLevelChoice = i+1;
            } else if (questionNumber-1===3) {
                document.getElementById("dashboard").innerHTML = '<button class="dash" onclick="loadQuestion(\'' + String(questionRoute) + '.' + String(secondLevelChoice) + '.' + String(i+1) + '\')">NEXT QUESTION</button>';
                thirdLevelChoice = i+1;
            } else {
                document.getElementById("dashboard").innerHTML = '<button class="dash" onclick="loadType(\'' + String(questionRoute) + '.' + String(secondLevelChoice) + '.' + String(thirdLevelChoice) + '.' + String(i+1) + '\')">NEXT QUESTION</button>';
                finalType = String(questionRoute) + String(secondLevelChoice) + String(thirdLevelChoice) + String(i+1);
            }
        } else {
            let button = document.getElementById(String(i+1));
            button.style.backgroundColor = "#ffffff";
        }
    }
}

function loadType(type) {
    let type512;
    let mbti;
    let desc;
    switch (type) { //TODO: Type descriptions
        case "1.1.1.1":
            type512 = 'FiNi-S';
            mbti = 'ISFP Jumper';
            desc = '';
            break;
        case "1.1.1.2":
            type512 = 'FiSi-S';
            mbti = 'INFP Jumper';
            desc = '';
            break;
        case "1.1.2.1":
            type512 = 'TiNi-S';
            mbti = 'ISTP Jumper';
            desc = '';
            break;
        case "1.1.2.2":
            type512 = 'TiSi-S';
            mbti = 'INTP Jumper';
            desc = '';
            break;
        case "1.2.1.1":
            type512 = 'FiSe-C';
            mbti = 'ISFP';
            desc = '';
            break;
        case "1.2.1.2":
            type512 = 'FiNe-C';
            mbti = 'INFP';
            desc = '';
            break;
        case "1.2.2.1":
            type512 = 'TiSe-C';
            mbti = 'ISTP';
            desc = '';
            break;
        case "1.2.2.2":
            type512 = 'TiNe-C';
            mbti = 'INTP';
            desc = '';
            break;
        case "2.1.1.1":
            type512 = 'FeSi-B';
            mbti = 'ESFJ';
            desc = '';
            break;
        case "2.1.1.2":
            type512 = 'FeNi-B';
            mbti = 'ENFJ';
            desc = '';
            break;
        case "2.1.2.1":
            type512 = 'TeSi-B';
            mbti = 'ESTJ';
            desc = '';
            break;
        case "2.1.2.2":
            type512 = 'TeNi-B';
            mbti = 'ENTJ';
            desc = '';
            break;
        case "2.2.1.1":
            type512 = 'FeNe-P';
            mbti = 'ESFJ Jumper';
            desc = '';
            break;
        case "2.2.1.2":
            type512 = 'FeSe-P';
            mbti = 'ENFJ Jumper';
            desc = '';
            break;
        case "2.2.2.1":
            type512 = 'TeNe-P';
            mbti = 'ESTJ Jumper';
            desc = '';
            break;
        case "2.2.2.2":
            type512 = 'TeSe-P';
            mbti = 'ENTJ Jumper';
            desc = '';
            break;
        case "3.1.1.1":
            type512 = 'SiTi-S';
            mbti = 'ISFJ Jumper';
            desc = '';
            break;
        case "3.1.1.2":
            type512 = 'SiFi-S';
            mbti = 'ISTJ Jumper';
            desc = '';
            break;
        case "3.1.2.1":
            type512 = 'NiTi-S';
            mbti = 'INFJ Jumper';
            desc = '';
            break;
        case "3.1.2.2":
            type512 = 'NiFi-S';
            mbti = 'INTJ Jumper';
            desc = '';
            break;
        case "3.2.1.1":
            type512 = 'SiFe-B';
            mbti = 'ISFJ';
            desc = '';
            break;
        case "3.2.1.2":
            type512 = 'SiTe-B';
            mbti = 'ISTJ';
            desc = '';
            break;
        case "3.2.2.1":
            type512 = 'NiFe-B';
            mbti = 'INFJ';
            desc = '';
            break;
        case "3.2.2.2":
            type512 = 'NiTe-B';
            mbti = 'INTJ';
            desc = '';
            break;
        case "4.1.1.1":
            type512 = 'SeFi-C';
            mbti = 'ESFP';
            desc = '';
            break;
        case "4.1.1.2":
            type512 = 'SeTi-C';
            mbti = 'ESTP';
            desc = '';
            break;
        case "4.1.2.1":
            type512 = 'NeFi-C';
            mbti = 'ENFP';
            desc = '';
            break;
        case "4.1.2.2":
            type512 = 'NeTi-C';
            mbti = 'ENTP';
            desc = '';
            break;
        case "4.2.1.1":
            type512 = 'SeTe-P';
            mbti = 'ESFP Jumper';
            desc = '';
            break;
        case "4.2.1.2":
            type512 = 'SeFe-P';
            mbti = 'ESTP Jumper';
            desc = '';
            break;
        case "4.2.2.1":
            type512 = 'NeTe-P';
            mbti = 'ENFP Jumper';
            desc = '';
            break;
        case "4.2.2.2":
            type512 = 'NeFe-P';
            mbti = 'ENTP Jumper';
            desc = '';
            break;
    }
    document.getElementById("test-content").innerHTML = '<h2>You have tested as ' + type512.substr(0,2) + '/' + type512.substr(2,5) + ' (' + mbti + ')</h2><p><img src="types/' + type512 + '.png" alt="Type image for ' + type512.substr(0,2) + '/' + type512.substr(2,5) + '"></p><p>' + desc + '</p><p id="dashboard"><button class="dash" onclick="window.location.href = \'index.html\'">RETAKE TEST</button></p>';
}