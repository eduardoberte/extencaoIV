function generateRandomId(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
  
    for (let i = 0; i < length; i++) {
        randomId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return randomId;
}

let url = new URLSearchParams(window.location.search).get("discipline");

if(!url)
    window.location.href = "index.html";

else{
    let questions = Array.from(document.querySelectorAll(".questions"));
    let question = questions.filter((element) => {
        return element.getAttribute("data-discipline") === url;
    });

    if(!question[0])
        window.location.href = `index.html?error=${generateRandomId(5)}`;

    question[0].classList.add("__active");
}

let btnControl = document.querySelectorAll(".questions.__active .question__controls");

btnControl.forEach(element => {
    if(element.querySelector(".fa-arrow-right")){
        element.querySelector(".fa-arrow-right").addEventListener("click", () => {
            element.parentNode.style.marginLeft = "calc(-100% - 100px)";
        });
    }

    if(element.querySelector(".fa-arrow-left")){
        element.querySelector(".fa-arrow-left").addEventListener("click", () => {
            btnControl[element.getAttribute("data-question") - 2].parentNode.style.marginLeft = "0%";
        });
    }
});

let answers = document.querySelectorAll(".question__answer");

answers.forEach(element => {
    element.addEventListener("click", () => {
        element.parentNode.querySelectorAll(".question__answer").forEach(deselect => {
            deselect.classList.remove("__active");
        });

        element.classList.add("__active");
    });
});


let YW5zd2Vyc0NvcnJlY3Q = {
    "c2NpZW5jZXM=": [
        "Mw==",
        "MQ==",
        "MQ==",
        "NA==",
        "Mg=="
    ],
    "Z2VvZ3JhcGh5": [
        "Mw==",
        "NA==",
        "Mw==",
        "Mw==",
        "NA=="
    ],
    "aGlzdG9yeQ==": [
        "Mw==",
        "MQ==",
        "NA==",
        "Mw==",
        "Mg=="
    ]
}

let btnSendAnswers = document.querySelector(".questions.__active .question__controls button");
if(btnSendAnswers){
    btnSendAnswers.addEventListener("click", () => {
        let points = 0;
        parentBtn = btnSendAnswers.parentElement.parentElement.parentElement;
        answers = parentBtn.querySelectorAll(".question__answer.__active");
    
        answers_ = YW5zd2Vyc0NvcnJlY3Q[btoa(url)];
        
        if(answers.length < 5)
            alert("Ainda restam questões não respondidas!");
        else{
            answers.forEach((element, index) => {
                if(answers_[index] == btoa(element.getAttribute("data-answer")))
                    points++;
            });

            mostPoints(points);
        }
    });
}

function mostPoints(points){
    document.querySelectorAll(".questions").forEach(element => {
        element.classList.remove("__active");
    });

    document.querySelector(".points .points__content .content__hits .hits").innerText = `${points}/5`;
    document.querySelector(".points .points__content").classList.add("__active");
}