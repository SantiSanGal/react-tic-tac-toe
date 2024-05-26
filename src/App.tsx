import './App.css'
import { useState } from 'react'
import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkEndGame, checkWinner } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import confetti from "canvas-confetti"

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState<string | null | false>(null) //nul sin ganador, false empate

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = (index: any) => {
    if (board[index] || winner) return //no actualiza si la posicion tiene algo o si hay algún ganador
    const newBoard = [...board] //actualizar el tablero
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X //cambiar el turno
    setTurn(newTurn)
    const newWinner = checkWinner(newBoard) //revisar si hay un ganador
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe - Ta Te Ti</h1>
      <button onClick={resetGame}>Reset del Juego</button>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal
        resetGame={resetGame}
        winner={winner}
      />
    </main>
  )
}

export default App
