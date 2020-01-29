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
    "IxFPS": ["Find physical organization is something you are flexible about?","Have very particular ways of organizing your environment or daily conduct?"],
    "IxTPS": ["Find physical organization is something you are flexible about?","Have very particular ways of organizing your environment or daily conduct?"],
    "IxFPC": ["Find more comfort dealing with learning tangible, real-world skills?","Find more comfort in learning in a manner which may not be inherently applicable to reality?"],
    "IxTPC": ["Find more comfort dealing with learning tangible, real-world skills?","Find more comfort in learning in a manner which may not be inherently applicable to reality?"],

    "ejQuestion": ["Tend to interact with people in ways meant to organize some aspect of conduct?","Tend to interact with people in an improvisational, in-the-moment fashion?"],
    "ejij": ["Have trouble expressing reasons that may threaten the status quo?","Find it takes a lot of effort to make decisions based on what you value when it can affect your group's goals?"],
    "ejep": ["Have trouble expressing reasons that may threaten the status quo?","Find it takes a lot of effort to make decisions based on what you value when it can affect your group's goals?"],
    "ExFJB": ["Have very particular ways of organizing your environment or daily conduct?","Find physical organization is something you are flexible about?"],
    "ExTJB": ["Have very particular ways of organizing your environment or daily conduct?","Find physical organization is something you are flexible about?"],
    "ExFJP": ["Find more comfort in learning in a manner which may not be inherently applicable to reality?","Find more comfort dealing with learning tangible, real-world skills?"],
    "ExTJP": ["Find more comfort in learning in a manner which may not be inherently applicable to reality?","Find more comfort dealing with learning tangible, real-world skills?"],

    "ijQuestion": ["Have an inclination to continually revise plans and structure of personal life (whether mentally, or in a tangible manner) and have trouble sharing information to yourself?","Feel naturally obligated to share information and plans or manage the conduct of other people?"],
    "ijip": ["Feel more threatened by new ideas that could disrupt your current order in reality?","Feel more threatened by new information that could contradict your current understanding or discredit your ideas?"],
    "ijej": ["Feel more threatened by new ideas that could disrupt your current order in reality?","Feel more threatened by new information that could contradict your current understanding or discredit your ideas?"],
    "ISxJS": ["Spend more time dwelling in the procedural knowledge of things?","Spend more time filtering out things you do and don't value?"],
    "INxJS": ["Spend more time dwelling in the working knowledge and logical reasoning of things?","Spend more time filtering out ideas you do and don't value?"],
    "ISxJB": ["Prioritize the harmony of a situation or group you are a part of?","Prioritize making sure things are in working order?"],
    "INxJB": ["Prioritize the harmony of a situation or group you are a part of?","Prioritize making sure things are in working order?"],

    "epQuestion": ["Naturally take in the information and are not necessarily inclined to share or act on it?","Tend to act on new information presented in the moment; interact with people in the environment accordingly?"],
    "epip": ["Have more trouble processing and understanding things that are not entirely tangible?","Have more trouble organizing factual information and dealing with organization in the real world?"],
    "epej": ["Have more trouble processing and understanding things that are not entirely tangible?","Have more trouble organizing factual information and dealing with organization in the real world?"],
    "ESxPC": ["Prefer to expose yourself to new things you find appealing?","Prefer learning about how things and systems work?"],
    "ENxPC": ["Prefer to expose yourself to new things you find appealing?","Prefer learning about how things and systems work?"],
    "ESxPP": ["Prioritize making sure things are in working order?","Prioritize the harmony of a situation or group you are a part of?"],
    "ENxPP": ["Prioritize making sure things are in working order?","Prioritize the harmony of a situation or group you are a part of?"],
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
    if (questionNumber === 1) {
        textContent += 'Which would best describe yourself? Choose one.</h3><p>'
    } else {
        textContent += 'Which do you find yourself doing more/most often? Do you...</h3><p>'
    };


    for (var i = 0; i < question.length; i++) {
        textContent += '<button class="select" id="' + String(i+1) + '" onclick="enableNext(' + String(i+1) + ')">' + question[i] + '</button>'
    }
    
    if (questionNumber === 4) {
        textContent += '</p><p id="dashboard"><button class="dash">GET RESULTS</button></p>';
    } else {
        textContent += '</p><p id="dashboard"><button class="dash">NEXT QUESTION</button></p>';
    }
    
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
                document.getElementById("dashboard").innerHTML = '<button class="dash" onclick="loadType(\'' + String(questionRoute) + '.' + String(secondLevelChoice) + '.' + String(thirdLevelChoice) + '.' + String(i+1) + '\')">GET RESULTS</button>';
                finalType = String(questionRoute) + String(secondLevelChoice) + String(thirdLevelChoice) + String(i+1);
            }
        } else {
            let button = document.getElementById(String(i+1));
            button.style.backgroundColor = "#ffffff";
        }
    }
}

function typeDesc(type512) {
    let returnString = '<h3>' + type512.substr(0,2) + '/' + type512.substr(2,5) + ' Type Description:</h2><p>';

    let descPartsArray = [
        "Lead consume types generally find it difficult to actually get started building something permanent because they are always looking for new options. However, because of this, they are continuous learners who generally have the highest consciousness among their peers.</p>",
        "Lead sleep types generally like to conserve energy, keep to themselves, and try to avoid doing spontaneous activities unless it's absolutely necessary. If you are one, you may have gotten comments in the past about how you're not an outgoing person, uncooperative. Alternatively, you may have heard from others that you're very introspective.</p>",
        "Lead play types usually live very active, busy, and extraverted lives. Whether or not they are genuinely happy doing so is a different matter, altogether. They generally have a tough time dealing with their inner dialogue and usually find discomforting to face.</p>",
        "People often look up to lead blast types when they need someone they can count on. This is because they always seem to have a ready answer. However, lead blast types generally tend to overlook the specifics of a situation that aren't familiar to them or neglect new ideas, altogether, when trying to solve a problem.</p>",
        "<p>The presence of Te in your function stack suggests that your form of reasoning is mostly based upon empirics and general consensus. You generally adopt the logic and opinions of other people in making a decision based on reasons and in the delegation of tasks. Your Fi suggests that your sense of identity is formed around what you value and morality. You also generally consume information that evokes an emotional response or anything that entertains/amuses you. However, as one of your \"demons,\" you're more inclined to neglect this mode of attention.</p>",
        "<p>The presence of Fe in your function stack suggests that you generally form your likes and dislikes based on what is socially acceptable. Maintaining harmony and good vibes is something you see as important when interacting with other people, and you try to do so when attempting to get other people to agree with you on something. Your Ti suggests that your sense of identity is formed around your reasons and what you consider to be true. Your information intake is also centered around things that make sense and how things work. However, as one of your \"demons,\" you're more inclined to neglect this mode of attention.</p>",
        "<p>Your Ti suggests that your sense of identity is formed around your reasons and what you consider to be true. Your information intake is also centered around things that make sense and how things work. The presence of Fe in your function stack suggests that you generally form your likes and dislikes based on what is socially acceptable. Maintaining harmony and good vibes is something you see as important when interacting with other people, and you try to do so when attempting to get other people to agree with you on something. However, as one of your \"demons,\" you will tend to struggle with this function.</p>",
        "<p>Your Fi suggests that your sense of identity is formed around what you value and morality. You also generally consume information that evokes an emotional response or anything that entertains/amuses you. The presence of Te in your function stack suggests that your form of reasoning is mostly based upon empirics and general consensus. You generally adopt the logic and opinions of other people in making a decision based on reasons and in the delegation of tasks. However, as one of your \"demons,\" you will tend to struggle with this function.</p>",
        "<p>Your mode of information intake is also generally more abstract because of your Ne. To learn things, you seek for patterns that are in the data and generally get new ideas from such information. Having Si means that the experiences you have or information taken in are stored into chronological series of events and procedures. This can can used to predict particular outcomes of future events. However, as one of your \"demons,\" you will generally struggle with using such known detail usefully.",
        "<p>Your mode of information intake is also generally more concrete because of your Se. To learn things, you tend to pay attention to the procedural details of a process or phenomena. Having Ni means that the experiences you have or knowledge you take in generally adds to universal archetypes which you can fit things into. This can be used to predict large-scale outcomes. However, as one of your \"demons,\" you will generally avoid organizing such archetypes.",
        "<p>Having Ni means that the experiences you have or knowledge you take in generally adds to universal archetypes which you can fit things into. This can be used to predict large-scale outcomes. Your mode of information intake is also generally more concrete because of your Se. To learn things, you tend to pay attention to the procedural details of a process or phenomena. However, as one of your \"demons,\" you're more inclined to neglect the intake of such information.",
        "<p>Having Si means that the experiences you have or information taken in are stored into chronological series of events and procedures. This can can used to predict particular outcomes of future events. Your mode of information intake is also generally more abstract because of your Ne. To learn things, you seek for patterns that are in the data and seek new ideas. However, as one of your \"demons,\" you're more inclined to avoid the new ideas presented.",
    ];

    let typeDisectionArray = [
        /-C/.test(type512),
        /-S/.test(type512),
        /-P/.test(type512),
        /-B/.test(type512),
        /Te/.test(type512),
        /Fe/.test(type512),
        /Ti/.test(type512),
        /Fi/.test(type512),
        /Ne/.test(type512),
        /Se/.test(type512),
        /Ni/.test(type512),
        /Si/.test(type512),
    ];

    for (var i = 0; i < typeDisectionArray.length; i++) {
        if (typeDisectionArray[i]) {
            returnString += descPartsArray[i];
        }
    }

    returnString += '</p>';
    return returnString;
}

function loadType(type) {
    let type512;
    let mbti;
    switch (type) {
        case "1.1.1.1":
            type512 = 'FiNi-S';
            mbti = 'ISFP Jumper';
            break;
        case "1.1.1.2":
            type512 = 'FiSi-S';
            mbti = 'INFP Jumper';
            break;
        case "1.1.2.1":
            type512 = 'TiNi-S';
            mbti = 'ISTP Jumper';
            break;
        case "1.1.2.2":
            type512 = 'TiSi-S';
            mbti = 'INTP Jumper';
            break;
        case "1.2.1.1":
            type512 = 'FiSe-C';
            mbti = 'ISFP';
            break;
        case "1.2.1.2":
            type512 = 'FiNe-C';
            mbti = 'INFP';
            break;
        case "1.2.2.1":
            type512 = 'TiSe-C';
            mbti = 'ISTP';
            break;
        case "1.2.2.2":
            type512 = 'TiNe-C';
            mbti = 'INTP';
            break;
        case "2.1.1.1":
            type512 = 'FeSi-B';
            mbti = 'ESFJ';
            break;
        case "2.1.1.2":
            type512 = 'FeNi-B';
            mbti = 'ENFJ';
            break;
        case "2.1.2.1":
            type512 = 'TeSi-B';
            mbti = 'ESTJ';
            break;
        case "2.1.2.2":
            type512 = 'TeNi-B';
            mbti = 'ENTJ';
            break;
        case "2.2.1.1":
            type512 = 'FeNe-P';
            mbti = 'ESFJ Jumper';
            break;
        case "2.2.1.2":
            type512 = 'FeSe-P';
            mbti = 'ENFJ Jumper';
            break;
        case "2.2.2.1":
            type512 = 'TeNe-P';
            mbti = 'ESTJ Jumper';
            break;
        case "2.2.2.2":
            type512 = 'TeSe-P';
            mbti = 'ENTJ Jumper';
            break;
        case "3.1.1.1":
            type512 = 'SiTi-S';
            mbti = 'ISFJ Jumper';
            break;
        case "3.1.1.2":
            type512 = 'SiFi-S';
            mbti = 'ISTJ Jumper';
            break;
        case "3.1.2.1":
            type512 = 'NiTi-S';
            mbti = 'INFJ Jumper';
            break;
        case "3.1.2.2":
            type512 = 'NiFi-S';
            mbti = 'INTJ Jumper';
            break;
        case "3.2.1.1":
            type512 = 'SiFe-B';
            mbti = 'ISFJ';
            break;
        case "3.2.1.2":
            type512 = 'SiTe-B';
            mbti = 'ISTJ';
            break;
        case "3.2.2.1":
            type512 = 'NiFe-B';
            mbti = 'INFJ';
            break;
        case "3.2.2.2":
            type512 = 'NiTe-B';
            mbti = 'INTJ';
            break;
        case "4.1.1.1":
            type512 = 'SeFi-C';
            mbti = 'ESFP';
            break;
        case "4.1.1.2":
            type512 = 'SeTi-C';
            mbti = 'ESTP';
            break;
        case "4.1.2.1":
            type512 = 'NeFi-C';
            mbti = 'ENFP';
            break;
        case "4.1.2.2":
            type512 = 'NeTi-C';
            mbti = 'ENTP';
            break;
        case "4.2.1.1":
            type512 = 'SeTe-P';
            mbti = 'ESFP Jumper';
            break;
        case "4.2.1.2":
            type512 = 'SeFe-P';
            mbti = 'ESTP Jumper';
            break;
        case "4.2.2.1":
            type512 = 'NeTe-P';
            mbti = 'ENFP Jumper';
            break;
        case "4.2.2.2":
            type512 = 'NeFe-P';
            mbti = 'ENTP Jumper';
            break;
    }
    document.getElementById("test-content").innerHTML = '<h2>You have tested as ' + type512.substr(0,2) + '/' + type512.substr(2,5) + ' (' + mbti + ')</h2><p><img src="types/' + type512 + '.png" alt="Type image for ' + type512.substr(0,2) + '/' + type512.substr(2,5) + '"></p><div>' + typeDesc(type512) + '</div><p id="dashboard"><button class="dash" onclick="window.print()">SAVE RESULTS</button><button class="dash" onclick="window.location.href = \'index.html\'">RETAKE TEST</button></p>';
}