function add() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const answer = parseInt(num1) + parseInt(num2);

    let answerEl = document.getElementById("answer");
    answerEl.textContent = answer;
}




