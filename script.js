let [computer_score, user_score] = [0, 0];
let result_ref = document.getElementById("result");

const choices_object = {
    rock: { rock: "draw", scissors: "win", paper: "lose" },
    paper: { rock: "win", scissors: "lose", paper: "draw" },
    scissors: { rock: "lose", scissors: "draw", paper: "win" }
};

function checker(input) {
    let choices = ["rock", "paper", "scissors"];
    let num = Math.floor(Math.random() * 3);
    let computer_choice = choices[num];

    document.getElementById("comp_choice").innerHTML = `Computer chose <span>${computer_choice.toUpperCase()}</span>`;
    document.getElementById("user_choice").innerHTML = `You chose <span>${input.toUpperCase()}</span>`;

    let result = choices_object[input][computer_choice];

    if (result === "win") {
        result_ref.className = "win";
        result_ref.innerHTML = "YOU WIN!";
        user_score++;
    } else if (result === "lose") {
        result_ref.className = "lose";
        result_ref.innerHTML = "YOU LOSE!";
        computer_score++;
    } else {
        result_ref.className = "draw";
        result_ref.innerHTML = "IT'S A DRAW!";
    }

    document.getElementById("computer_score").innerText = computer_score;
    document.getElementById("user_score").innerText = user_score;
}