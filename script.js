console.log("Tic Tac Toe")
let turn = "X"
let isgameover = false;
const changeturn=() =>{
    return turn === "X" ? "O" : "X"

}
const getPlayerColor = (player) => {
    return player === "X" ? "#21218b" : "#add656"; // "X" is orange, "O" is blue
};
const checkWin = () =>{
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0,1,2,-25,6,0],
        [3,4,5,-25,18,0],
        [6,7,8,-25,30,0],
        [0,3,6,-37.2,18,90],
        [1,4,7,-25.2,18,90],
        [2,5,8,-13.2,18,90],
        [0,4,8,-23,20,45],
        [2,4,6,-23,15.5,-45]
    ]
    wins.forEach(e =>{
        if(boxtext[e[0]].innerText === boxtext[e[1]].innerText && boxtext[e[1]].innerText === boxtext[e[2]].innerText && boxtext[e[0]].innerText !== ""){
            document.getElementsByClassName("info")[0].innerText = boxtext[e[0]].innerText + " Won!";
            isgameover = true;
            document.querySelector('.won').getElementsByTagName('img')[0].style.width = "450px";
            document.querySelector(".line").style.width = "36vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
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
    document.querySelector(".line").style.width = "0vw";
    document.querySelector('.won').getElementsByTagName('img')[0].style.width = "0px"
})

