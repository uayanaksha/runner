import './style.css'

// Numbering all tiles

let counter = 1;
let state = undefined;
document.querySelectorAll('#tiles').forEach(tile => {
    tile.innerHTML = counter;
    tile.addEventListener("click", function(e) {
        if(state == undefined){
            this.style["background-color"] = '#97BE5A'
            state = this;
        } else {
            let temp = this.style["background-color"]
            this.style["background-color"] = state.style["background-color"]
            state.style["background-color"] = temp
            state = this;
        }
    })
    counter++
})

function createPlayer(data){
    const c = document.createElement('span')
    c.setAttribute('id', 'player')
    c.innerText = data
    return c
}

const board = document.querySelectorAll('#tiles')
const player1 = createPlayer('[P1]')
const player2 = createPlayer('[P2]')
board[0].appendChild(player1)
board[0].appendChild(player2)
let p1idx = 0
let p2idx = 0
let flag = true
var newIdx

function resetBoard(board, player1, player2){

}

document.querySelector('body').addEventListener("keydown", function (e) {
    if(e.key != " ") return;
    newIdx = 1 + Math.floor(Math.random() * 10) % 6;
    flag = !flag
    if(!flag){
        if(newIdx + p1idx >= 100) return;
        board[newIdx + p1idx].appendChild(player1.parentNode.removeChild(player1))
        p1idx += newIdx
    }   else {
        if(newIdx + p2idx >= 100) return;
        board[newIdx + p2idx].appendChild(player2.parentNode.removeChild(player2))
        p2idx += newIdx
    }   
    if(p1idx == 99 || p2idx == 99){
        board[99].style.background = '#ACD793'
    }
})
