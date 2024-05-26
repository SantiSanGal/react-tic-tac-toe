import { WINNER_COMBOS } from "../constants"

export const checkWinner = (boardToCheck: any) => {
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        if (
            boardToCheck[a] && // 0 -> x 
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a]
        }
    }
    return null
}

export const checkEndGame = (newBoard: any) => {
    //si todas las posiciones tienen diferente a null, osea que se
    // completaron todos los movimientos, se acabó el juego y es empate
    return newBoard.every((square: any) => square !== null)
}
