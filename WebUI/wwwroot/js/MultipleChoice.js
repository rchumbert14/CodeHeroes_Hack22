// ****** MultipleChoice.js ****** //
// ***Handling Difficulty*** //


// *** Handling HP *** //
var heroHP = 2;
var monHP = 2;

//set health bars based on difficulty
/*function SetHealth(hero, mon) {
    //hero
    for (let i = 0; i <= hero; i++) {
        const heart = document.createElement("img");
        heart.src = "Imgs/HealthFull.png";
        heart.className = "float-start heroHP";
        document.parent.appendChild(heart);
    }
    //mon
    for (let i = 0; i <= mon; i++) {
        const heart2 = document.createElement("img");
        heart2.src = "Imgs/HealthFull.png";
        heart2.className = "float-start heroHP";
        document.parent.appendChild(heart2);
    }
}*/


function updateHeroHealth(currentHP) {
    const health = document.querySelectorAll(".heroHP");
    health[currentHP].src = "Imgs/HealthEmpty.png";
    heroHP--;
}

function updateMonHealth(currentHP) {
    const health = document.querySelectorAll(".monHP");
    health[currentHP].src = "Imgs/HealthEmpty.png";
    monHP--;
}

function resetHealth() {
    const resetHero = document.querySelectorAll(".heroHP");
    resetHero.forEach(element => element.src = "Imgs/HealthFull.png")
    const resetMon = document.querySelectorAll(".monHP");
    resetHero.forEach(element => element.src = "Imgs/HealthFull.png")
}

/*function updateMonHealth(currentHP) {
    const health = document.querySelectorAll(".heroHP");
    health[currentHP].src = "Imgs/HealthEmpty.png";
}*/

// TESTING
/* function test() {
    updateHeroHealth(hp);
}

function testRestore() {
    resetHealth();
}

const answersTest = document.querySelectorAll(".answer");
answersTest[0].onclick = function () {
    updateHeroHealth(hp);
}
answersTest[1].onclick = function () {
    resetHealth();
}*/

// *** Handling UI ****
const questionArray = [
    "Which of the following is a valid variable name in Python ?| code_hero1 | 1codeHero | code - Hero | codeHero! | 1",
    "What naming convention is used to name variales in Python ?| camelCase | snake_case | PascalCase | MixedCaps | 2",
    "Which varible name properly uses the snake_case naming convention used in Python ?| defeatMonster | defeatmonster | DEFEATMONSTER | defeat_monster | 4",
    "Which of the following is a valid variable name in Python ?| 1knight | knight# | knight | !!knight!! | 3",
    "Which symbol adds a newline to the output of a print statement ?|\n |\\|\n\| n\| 1",
    "What function gets user input in Python ?| print() | input() | int() | float() | 2",
    "Which funtion does string conversion in Python ?| string() | toString() | str() | None of these.| 3",
    "Which function converts any data type into a Boolean ?| boolean() | truefalse() | bool() | None of these.| 3",
    "Which statment will output True ?| False and True | True and False | False and False | True and True | 4",
    "Which statement will output False ?| False or True | True or False | False or False | True or True | 3",
    "Which statement will output True ?| False and True | True and False | False or False | None of these.| 4",
    "Which statement will output True ?| 20 == 20 | 20 != 20 | 20 = 20.0 | None of these.| 1",
    "Which statement will output False ?| 16 == 16 | 16 != 17 | 16 != 16.0 | None of these.| 3",
    "Which statement will output True ?| 3.5 >= 4.0 | 4.0 < 4.0 | 4.0 >= 4.0 | None of these.| 3",
    "Which statement will output False ?| 9.5 != 10 | 10 < 10.5 | 10 == 10 | None of these.| 4",
    "Which data type stores a whole number ?| float | double | integer | string | 3",
    "Which data type stores a decimal value ?| float | double | integer | string | 1",
    "What is the data type of a mathematical operation between a float and an int ?| float | int | string | Boolean | 1",
    "What data type will always be returned by the divison operator ?| int | Boolean | float | string | 3",
    "What does the integer division operator return?| truncated float | integer | truncated integer | float | 1",
    "Which statment outputs the integer 8 ?| 2 * 4.0 | 2 * 4 | 2.0 * 4.0 | None of these | 2",
    "Which statment outputs the integer 51 ?| 4 + 47 | 4.0 + 47 | 4 + 47.0 | None of these | 1",
    "Which statment outputs the integer 230 ?| 240.0 - 10 | 240 - 10.0 | 240 - 10 | None of these.| 3",         
    "Which statment outputs the integer 13 ?| 180 / 13.0 | 180 / 13 | 180 // 13|None of these.|3",
    "Which statment outputs the float 6.25 ?| 2.5 + 2.5 | 2.5 * 2.5 | 2.5 - 2.5 | 2.5 / 2.5 | 2",
    "Which statment outputs the float 21.9 ?| 9.7 - 12.2 | 9.7 * 12.2 | 9.7 / 12.2 | 9.7 + 12.2 | 4",
    "Which statment outputs the float 7.0 ?| 9.7 + 2.7 | 9.7 - 2.7 | 9.7 * 2.7 | 9.7 / 2.7 | 2",
    "Which statment outputs the float 7.0 ?| 15.0 - 2.5 | 15.0 / 2.5 | 15.0 + 2.5 | 15.0 * 2.5 | 2",
    "Which statment DOES NOT output the float 27.0 ?| 3 ** 3 | 3.0 ** 3 | 3 ** 3.0 | 3.0 ** 3.0 | 1",
    "Which statment DOES NOT output the float 10.0 ?| 150 // 14.0|150.0 // 14|150 // 14|150.0 // 14.0|3",
    "Which statment outputs the float 20.0 ?| 8 * 2.5 | 8 + 2.5 | 8 - 2.5 | 8 / 2.5 | 1",
    "Which statment DOES NOT output the float 19.5 ?| 15 + 4.5 | 15 + 4 | 15.0 + 4.5 | 15.5 + 4 | 2",
    "Which statment outputs the float 16.0 ?| 300.0 // 18|300 / 18|300 / 18.5|300 // 18.5|4"
];

function  DisplayQuestion(index) {
    // split array at index and format into question object
    split = questionArray[index].split("|")
    console.log(split[0]);
    question = {
        Question: split[0],
        1: split[1],
        2: split[2],
        3: split[3],
        4: split[4],
        Correct: parseInt(split[5])
    }

    // edit html elements
    const questionText = document.getElementById("question");
    questionText.innerText = question.Question;

    const answers = document.querySelectorAll(".answer");
    for (let i = 0; i <= 3; i++) {
        let text = i + 1;
        answers[i].textContent = question[text.toString()];
    }
}

function CheckWin() {
    if (monHP < 0) {
        gameOver = true;
        window.alert("You win! :D");
        window.location.href = "Index";
    }
    else if (heroHP < 0) {
        gameOver = true;
        window.alert("Draco wins! D:");
        window.location.href = "Index";
    }
}

function ResetClicks() {
    for (let i = 0; i < 4; i++) {
        if (i + 1 == question.Correct) {
            answers[i].onclick = function () {
                updateMonHealth(monHP);
                CheckWin();
                if (gameOver == false) {
                    DisplayQuestion(index);
                    //index++; //will set to new random
                    ResetClicks();
                }
            }
        }
        else {
            answers[i].onclick = function () {
                updateHeroHealth(heroHP);
                CheckWin();
            }
        }
    }
}

//init global variables
//var index = 0; //set to random
let index = Math.floor(Math.random() * 32);
var gameOver = false;
var split = [];
var question = {
    Question: "",
    1: "",
    2: "",
    3: "",
    4: "",
    Correct: 0
}
//first question
DisplayQuestion(index);
index = Math.floor(Math.random() * 32);
const answers = document.querySelectorAll(".answer");
//assign buttons correct/incorrect answers
for (let i = 0; i < 4; i++) {
    if (i + 1 == question.Correct) {
        answers[i].onclick = function () {
            updateMonHealth(monHP);
            CheckWin();
            if (gameOver == false) {
                DisplayQuestion(index);
                index = Math.floor(Math.random() * 32);
                ResetClicks();
            }
        }
    }
    else {
        answers[i].onclick = function () {
            updateHeroHealth(heroHP);
            CheckWin();
        }
    }
}


