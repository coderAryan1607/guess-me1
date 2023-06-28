let words = [
    {
        "inputs":5,
        "category":"sports",
        "word":"Chess"
    },
    {
        "inputs":6,
        "category":"European Country Name",
        "word":"France"
    }
]
$(document).ready(function () {
    fillBlanks();
})








function fillBlanks(){
    var gameOver = false
    const word = words[Math.floor(Math.random()*words.length)];

    $("#blanks").empty();
    for(var i = 0; i < word.word.length; i++){
        let html = `<span class="fill_blanks">_</span>`
        $("#blanks").append(html);
    }

    $("#hint").html(word.category);




    $(".clickable").click(function() {
        var correctGuess = false

        let id = $(this).attr("id");

        var life= parseInt($("#life").text())



        for(var i=0; i< word.word.length;i++) {
            if(word.word.charAt(i).toLowerCase()==id){
                if(life > 0 && ($(".fill_blanks").eq(i).html() == "_" || $(".fill_blanks").eq(i).html() ==id)){
                    $(".fill_blanks").eq(i).html(id)
                    correctGuess = true

                    if($("#blanks").text() === word.word.toLowerCase()){
                        $("#result").text("You Win!!!")
                        correctGuess = true;
                        gameOver= true
                    }
                }
                
            }
        }
    })
}
