let btnControl = document.querySelectorAll(".question__controls");

btnControl.forEach(element => {
    if(element.querySelector(".fa-arrow-right")){
        element.querySelector(".fa-arrow-right").addEventListener("click", () => {
            element.parentNode.style.marginLeft = "calc(-100% - 100px)";
        });
    }

    if(element.querySelector(".fa-arrow-left")){
        element.querySelector(".fa-arrow-left").addEventListener("click", () => {
            btnControl[element.getAttribute("data-question") - 2].parentNode.style.marginLeft = "0%";
            console.log(btnControl[element.getAttribute("data-question") - 2])
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