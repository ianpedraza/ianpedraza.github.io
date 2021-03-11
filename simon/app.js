const btnStart = document.getElementById('btnStart')
const blue = document.getElementById('blue')
const violet = document.getElementById('violet')
const orange = document.getElementById('orange')
const green = document.getElementById('green')
const MAX_LEVEL = 10

class Game { 

    constructor() {
        this.bindFunctions()
        this.init()
        this.generateSequence()
        setTimeout(this.nextLevel, 1200)
    }

    init() {
        this.toggleStart()
        this.level = 1
        this.delay = 1000
        this.colors = {
            blue,
            violet,
            orange,
            green
        }
    }

    bindFunctions() {
        this.init = this.init.bind(this)
        this.selectColor = this.selectColor.bind(this)
        this.nextLevel = this.nextLevel.bind(this)
    }

    toggleStart() {
        if (btnStart.classList.contains('hide')) {
            btnStart.classList.remove('hide')
        } else {
            btnStart.classList.add('hide')
        }
    }

    generateSequence() {
        this.sequence = new Array(MAX_LEVEL).fill(0).map(() => Math.floor(Math.random() * 4))
    }

    nextLevel() {
        this.subLevel = 0
        this.highlightSequence()
        this.addClickEvents()
    }

    highlightSequence() {
        for (let  i = 0; i < this.level; i++) {
            const color = this.numberToColor(this.sequence[i])
            setTimeout(() => this.highlightColor(color), this.delay * i)
        }
    }

    numberToColor(number) {
        switch (number) {
            case 0:
                return 'blue'
                
            case 1:
                return 'violet'

            case 2:
                return 'orange'

            case 3:
                return 'green'
        }
    }

    colorToNumber(color) {
        switch (color) {
            case 'blue':
                return 0
                
            case 'violet':
                return 1

            case 'orange':
                return 2

            case 'green':
                return 3
        }
    }

    highlightColor(color) {
        this.colors[color].classList.add('light')
        setTimeout(() => this.unhighlightColor(color), 350)
    }

    unhighlightColor(color) {
        this.colors[color].classList.remove('light')
    }

    addClickEvents() {
        // var self = this
        this.colors.blue.addEventListener('click', this.selectColor)
        this.colors.violet.addEventListener('click', this.selectColor)
        this.colors.orange.addEventListener('click', this.selectColor)
        this.colors.green.addEventListener('click', this.selectColor)
    }

    removeClickEvents() {
        this.colors.blue.removeEventListener('click', this.selectColor)
        this.colors.violet.removeEventListener('click', this.selectColor)
        this.colors.orange.removeEventListener('click', this.selectColor)
        this.colors.green.removeEventListener('click', this.selectColor)
    }

    selectColor(event) {
        const nameColor = event.target.dataset.color
        const numberColor = this.colorToNumber(nameColor)
        this.highlightColor(nameColor)

        if (numberColor === this.sequence[this.subLevel]) {
            this.subLevel++
            
            if (this.subLevel === this.level) {
                this.level++
                this.removeClickEvents()

                if (this.level === MAX_LEVEL + 1) {
                    this.win()
                } else {
                    setTimeout(this.nextLevel, 1500)
                }

            }

        } else {
            this.lose()
        }

    }

    win() {
        swal('Felicidades', 'Ganaste el juego!', 'success')
        .then(this.init)
    }

    lose() {
        swal('Ooops', 'Has perdido :(', 'error')
        .then(() => {
            this.removeClickEvents()
            this.init()
        })
    }

}

function startGame() {
    window.game = new Game()
}