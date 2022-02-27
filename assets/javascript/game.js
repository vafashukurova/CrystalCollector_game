
$(document).ready(function () {

    var userScore;
    var targetScore;
    var win = 0;
    var loss = 0;

    var crystal = {
        blue:
        {
            name: "blue",
            value: 0
        },

        green:
        {
            name: "green",
            value: 0
        },

        red:
        {
            name: "red",
            value: 0
        },

        yellow:
        {
            name: "yellow",
            value: 0
        }
    }


    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    function startGame() {
        userScore = 0;

        $("#win").html(win);
        $("#loss").html(loss);


        crystal.blue.value = getRndInteger(1, 12);
        crystal.green.value = getRndInteger(1, 12);
        crystal.red.value = getRndInteger(1, 12);
        crystal.yellow.value = getRndInteger(1, 12);

        targetScore = getRndInteger(19, 120);

        $("#game-random-number").html(targetScore);
        $("#crystal-value").html(userScore);

    }

    startGame();

    function crystalValSum(crystal) {
        userScore += crystal.value;
        $("#crystal-value").html(userScore);
        gameCheck();
    }

    function gameCheck() {
        if (userScore > targetScore) {

            Swal.fire('Sorry. You lost!');
            loss++;
            $("#loss").html(loss);
            startGame();
        }

        else if (userScore == targetScore) {
            Swal.fire('You Won!');
            win++;
            $("#win").html(win);
            startGame();
        }
    }


    $(".blue").click(function () {
        crystalValSum(crystal.blue);
    });

    $(".red").click(function () {
        crystalValSum(crystal.red);
    });

    $(".green").click(function () {
        crystalValSum(crystal.green);
    });

    $(".yellow").click(function () {
        crystalValSum(crystal.yellow);
    });

});




