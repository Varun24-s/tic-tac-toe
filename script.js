console.log("Tic Tac Toe")
let turn = "X"
let isgameover = false;
const changeturn=() =>{
    return turn === "X" ? "O" : "X"

}
const getPlayerColor = (player) => {
    return player === "X" ? "#4deeea" : "#ffe700"; // "X" is orange, "O" is blue
};
let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const checkWin = () =>{
    let boxtext = document.getElementsByClassName("boxtext");
    // let wins = [
    //     [0,1,2],
    //     [3,4,5],
    //     [6,7,8],
    //     [0,3,6],
    //     [1,4,7],
    //     [2,5,8],
    //     [0,4,8],
    //     [2,4,6]
    // ]
    wins.forEach(e =>{
        if(boxtext[e[0]].innerText === boxtext[e[1]].innerText && boxtext[e[1]].innerText === boxtext[e[2]].innerText && boxtext[e[0]].innerText !== ""){
            document.getElementsByClassName("info")[0].innerText = boxtext[e[0]].innerText + " Won!";
            isgameover = true;
            e.forEach(index => {
                boxes[index].style.backgroundColor = "#c599f7";
            });
            // document.querySelector(".line").style.width = "36vw";
            // document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }

    })
}
//Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            boxtext.style.color = getPlayerColor(turn);
            turn = changeturn();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
                document.getElementsByClassName("info")[0].style.color = getPlayerColor(turn);
            }
        }
    })
});
document.querySelector('.reset').addEventListener('click',() =>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
        element.style.color = "";
    });
    turn = "X";

    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.getElementsByClassName("info")[0].style.color = getPlayerColor(turn);
    wins.forEach(e =>{
        e.forEach(index => {
            boxes[index].style.backgroundColor = "#b478ff";
        });
    })
    
})

