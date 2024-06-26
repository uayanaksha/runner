import './style.css'
import Player from './player.js'
import game from './game.js'

// Numbering all tiles
const tiles = document.querySelectorAll('#tiles')
{
    let counter = 1
    tiles.forEach(tile => {
        tile.innerText = counter
        counter++
    })
}

// select board
const board = document.querySelectorAll('#tiles')

// create players
const p1 = new Player('[P1]');
const p2 = new Player('[P2]');

// game instance
const runner = game(board, p1, p2)

// Eventlistner
document.querySelector('body').addEventListener("keydown", function (e) {
    switch(e.key) {
        case " ": runner()
    }
})
