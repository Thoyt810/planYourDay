$(document).ready(function(){

    var currentDate= moment().format("MMMM Do YYYY, h:mm:ss a");

    $("#currentDay").append(currentDate);

    $(".saveBtn").on("click", function(){
        var userAnswer = $("textarea").val();
        console.log(userAnswer);
        localStorage.setItem("Things to do",  userAnswer)

    })

})  