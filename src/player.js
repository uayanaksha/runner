export default class Player{
    constructor(name){
        const c = document.createElement('span')
        c.setAttribute('id', 'player')
        c.innerText = name
        this.idx = 0
        this.ptr = c
    }

    rollDice(){
        return (1 + Math.floor(Math.random() * 10) % 6);
    }

    getidx() {
        return this.idx
    }

    setidx(idx) {
        this.idx = idx
    }
    
    getptr(){
        return this.ptr
    }

    setptr(ptr){
        this.ptr = ptr
    }
}
