/*let reader = new FileReader();
reader.readAsText('qs/qTest.txt');
reader.onload = function () {
    console.log(reader.result);
}*/

const test = [
    "What is the answer|Not This|This|Not This|Not This|2"
];

const split = test[0].split("|");
const question = {
    question: split[0],
    1: split[1],
    2: split[2],
    3: split[3],
    4: split[4],
    Correct: parseInt(split[5])
}

const question = document.getElementById("question");
question.innerText = question.question;

const answers = document.querySelectorAll(".answer");
for (let i = 0; i <= 3; i++) {
    let text = i + 1;
    answers[i].textContent = questions[text.toString()];
}
