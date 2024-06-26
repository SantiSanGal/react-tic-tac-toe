import { Square } from "./Square"

export function WinnerModal({ winner, resetGame }:any) {
    if (winner === null) return null

    const winnerText = winner === false ? 'Empate' : `Ganó: ${winner}`

    return (
        <section className='winner'>
            <div className="text">
                <h2>{winnerText}</h2>
                <header className='win'>
                    {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                    <button onClick={resetGame}>Empezar de Nuevo</button>
                </footer>
            </div>
        </section>
    )
}