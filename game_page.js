player1name = localStorage.getItem("player1name");
player2name = localStorage.getItem("player2name");

player1score = 0;
player2score = 0;

document.getElementById("player1_name").innerHTML = player1name + " : ";

document.getElementById("player2_name").innerHTML = player2name + " : ";

document.getElementById("player1_score").innerHTML = player1score;

document.getElementById("player2_score").innerHTML = player2score;

document.getElementById("playerquestion").innerHTML = "Question Turn - " + player1name;

document.getElementById("playeranswer").innerHTML = "Answer Turn - " + player2name;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("Word in lowercase is " + word);
    
    
    charAt1 = word.charAt(1);
    console.log(charAt1);


    length_divide_2 = Math.floor(word.length/2);
    charAt2 = word.charAt(length_divide_2);
    console.log(charAt2);

    
    length_subtract_1 = word.length - 1;
    charAt3 = word.charAt(length_subtract_1);
    console.log(charAt3);


    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);

    question_word = "<h4 id = 'word_display'>Q. "+remove_charAt3+"</h4>";
    input_box = "<br>Answer: <input type = 'text' id = 'input_check_box'>";
    check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";

}
questionturn = "Player1";
answerturn = "Player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lowercase = " + answer);

    if(answer == word) {
        if(answerturn == "Player1") {
            player1score = player1score + 1;
            document.getElementById("player1_score").innerHTML = player1score;
        }
        else {
            player2score = player2score + 1;
            document.getElementById("player2_score").innerHTML = player2score;
        }
    }
        if(questionturn == "Player1") {
            questionturn = "Player2";
            document.getElementById("playerquestion").innerHTML = "Question Turn = " + player2name;
        }
        else {
            questionturn = "Player1";
            document.getElementById("playerquestion").innerHTML = "Question Turn = " + player1name;
        }
        if(answerturn == "Player1") {
            answerturn = "Player2";
            document.getElementById("playeranswer").innerHTML = "Answer Turn = " + player2name;
        }
        else {
            answerturn = "Player1";
            document.getElementById("playeranswer").innerHTML = "Answer Turn = " + player1name;
        }

      
    
    document.getElementById("output").innerHTML = "";
}