player1_name=localStorage.getItem("name_1");
player2_name=localStorage.getItem("name_2");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").value=player1_name+" : ";
document.getElementById("player2_name").value=player2_name+" : ";

document.getElementById("player1_score").value=player1_score;
document.getElementById("player2_score").value=player2_score;

document.getElementById("player_question").innerHTML="Question turn-"+player1_name;
document.getElementById("player_answer").innerHTML="Answer turn-"+player2_name;

function send() {

    number1 = document. getElementById ("number1") . value;
    number2 = document. getElementById("number2") . value;
    actual_answer = parseInt (number1) * parseInt (number2) ;
    question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id=' input_check_box'>";
    check_button="<br><br><button class='btn btn-info' id='check_button' onclick='check()'>check</button>"
    row=question_number+input_box+check_button;
    document.getElementById( "quiz_div").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";

}
    
