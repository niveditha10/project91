function addUser(){
    player1_name=document.getElementById("login_input_1").value;
    player2_name=document.getElementById("login_input_2").value;


    localStorage.setItem("name_1",player1_name);

    localStorage.setItem("name_2",player2_name);

    window.location.replace("enter_number.html");
}