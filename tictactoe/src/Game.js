import React from 'react';

const calculateWinner = (squares) => {
    
  };

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            history: [
              {
                squares: Array(9).fill(null),
              },
            ],
            currentStepNumber: 0,
            xIsNext: true,
          };
    }
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.currentStepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
    
        if (calculateWinner(squares).winner || squares[i]) {
          return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
          history: history.concat([
            {
              squares,
              currentLocation: getLocation(i),
              stepNumber: history.length,
            },
          ]),
          xIsNext: !this.state.xIsNext,
          currentStepNumber: history.length,
        });
      }
    sortMoves() {
        this.setState({
          history: this.state.history.reverse(),
        });
      }
    render() {

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        winnerSquares={winnerRow}
                        onClick={i => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                <div>{status}</div>
                <button className="button" onClick={() => this.sortMoves()}>
                    Sort moves
                </button>
                <ol>{moves}</ol>
                </div>
            </div>
        )
    }
}

export default Game;