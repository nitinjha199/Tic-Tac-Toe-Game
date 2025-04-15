let turn = "X";
//function to change the turn 
const changeturn = () => {
    if (turn === "X") return "0";
    return "X";
}
let gameover = false;
//function to check win

const checkwin = function () {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText === boxtext[e[2]].innerText) && boxtext[e[0]].innerText !== "") {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won";
            gameover = true;
        }
    })
}

// game logic
let box = document.getElementsByClassName("box");
let count = 0;
Array.from(box).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', () => {
        if (gameover) {
            document.getElementsByClassName("info")[0].innerText = "Already won";
            return;
        }
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            count++;
            checkwin();
            if (gameover) {
                return;
            }
            else {
                if (count === 9) {
                    document.getElementsByClassName("info")[0].innerHTML = "game over match draw! <br> press reset for new game";
                    gameover = true;
                    return;

                }
                else {
                    turn = changeturn();
                    document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
                }
            }
        }
        else if (!gameover) {
            document.getElementsByClassName("info")[0].innerText = "Click On Valid Box\nTurn for " + turn;
        }

    })

})

const reset = document.getElementById("reset");
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    boxtexts.forEach(element => {
        element.innerText = ""; // Clear all boxes
    });
    turn = "X"; // Reset turn
    gameover = false; // Allow playing again
    document.querySelector('.info').innerText = "Turn for " + turn;
})


