const GRID = document.querySelector('.grid')
let winner = 2
let steps = 0
let field = [2,2,2,
             2,2,2,
             2,2,2]
let value = 0
GRID.addEventListener('click', (event) => {
   switch (value) {
        case value = 0: {
            if (!event.target.hasChildNodes()) {
                console.log(value)
                event.target.insertAdjacentHTML('afterbegin', '<img src="images/cross.svg" alt="X" class="cross">')
               field[event.target.id] = value
                value = 1
                   Winner()
            }

            break
        }
        case value = 1: {
            if (!event.target.hasChildNodes()) {
                event.target.insertAdjacentHTML('afterbegin', '<img src="images/circle.svg" alt="X" class="cross">')
                field[event.target.id] = value
                value = 0
                Winner()

            }
            break
        }

    }


}


)



function Winner() {


    if ( field[0] === 0 && field[1] === 0 && field[2] === 0 ||
        field[3] === 0 && field[4] === 0 && field[5] === 0 ||
        field[6] === 0 && field[7] === 0 && field[8] === 0 ||
        field[0] === 0 && field[3] === 0 && field[6] === 0 ||
        field[1] === 0 && field[4] === 0 && field[7] === 0 ||
        field[2] === 0 && field[5] === 0 && field[8] === 0 ||
        field[0] === 0 && field[4] === 0 && field[8] === 0 ||
        field[6] === 0 && field[4] === 0 && field[2] === 0 ) {
        winner = 0
        alert('x')
    }

    if ( field[0] === 1 && field[1] === 1 && field[2] === 1 ||
        field[3] === 1 && field[4] === 1 && field[5] === 1 ||
        field[6] === 1 && field[7] === 1 && field[8] === 1 ||
        field[0] === 1 && field[3] === 1 && field[6] === 1 ||
        field[1] === 1 && field[4] === 1 && field[7] === 1 ||
        field[2] === 1 && field[5] === 1 && field[8] === 1 ||
        field[0] === 1 && field[4] === 1 && field[8] === 1 ||
        field[6] === 1 && field[4] === 1 && field[2] === 1 ) {
        winner = 1
    }

}
