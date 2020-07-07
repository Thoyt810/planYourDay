$(document).ready(function(){

    var currentDate= moment().format("MMMM Do YYYY, h:mm:ss a");

    $("#currentDay").append(currentDate);

    var userAnswer = $("textarea").val();

    $(".saveBtn1").on("click", function(){
        userAnswer = $("textarea").val();
        console.log(userAnswer);
        localStorage.setItem("8 AM",  userAnswer)

    })

    $(".saveBtn2").on("click", function(){
        userAnswer = $("textarea").val();
        console.log(userAnswer);
        localStorage.setItem("9 AM",  userAnswer)

    })

    $(".saveBtn3").on("click", function(){
        userAnswer = $("textarea").val();
        console.log(userAnswer);
        localStorage.setItem("10 AM",  userAnswer)

    })

    $(".saveBtn4").on("click", function(){
        userAnswer = $("textarea").val();
        console.log(userAnswer);
        localStorage.setItem("11 AM",  userAnswer)

    })

    $(".saveBtn5").on("click", function(){
        userAnswer = $("textarea").val();
        console.log(userAnswer);
        localStorage.setItem("12 PM",  userAnswer)

    })

    $(".saveBtn6").on("click", function(){
        userAnswer = $("textarea").val();
        console.log(userAnswer);
        localStorage.setItem("1 PM",  userAnswer)

    })

    $(".saveBtn7").on("click", function(){
        userAnswer = $("textarea").val();
        console.log(userAnswer);
        localStorage.setItem("2 PM",  userAnswer)

    })

    $(".saveBtn8").on("click", function(){
        userAnswer = $("textarea").val();
        console.log(userAnswer);
        localStorage.setItem("3 PM",  userAnswer)

    })

    $(".saveBtn9").on("click", function(){
        userAnswer = $("textarea").val();
        console.log(userAnswer);
        localStorage.setItem("4 PM",  userAnswer)

    })

})  