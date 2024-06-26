function game(board, p1, p2){
    let turn = p1
    board[0].appendChild(p1.getptr())
    board[0].appendChild(p2.getptr())
    return function(){
        let output = turn.rollDice()
        if(turn.getidx() + output <= 99){
            turn.setidx(turn.getidx() + output)
            board[turn.getidx()].appendChild(turn.getptr().parentNode.removeChild(turn.getptr()))
            if(turn.getidx() == 99){
                console.log('we have a winner')
                board[99].style.backgroundColor = `#ACD793`
                setTimeout(() => {
                    board[99].style.backgroundColor = '#E9C46A'
                    resetGame(board, p1, p2)
                }, 3000)
            }
        } 
        turn = turn == p2 ? p1 : p2
    }
}

function resetGame(board, p1, p2){
    board[0].appendChild(p1.getptr())
    board[0].appendChild(p2.getptr())
    p1.setidx(0)
    p2.setidx(0)
}

export default game
