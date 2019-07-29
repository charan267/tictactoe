import React from 'react'


class Board extends React.Component{
    createBoard(row, col) {
        const board = [];
    let cellCounter = 0;

    for (let i = 0; i < row; i += 1) {
      const columns = [];
      for (let j = 0; j < col; j += 1) {
        columns.push(this.renderSquare(cellCounter++));
      }
      board.push(<div key={i} className="board-row">{columns}</div>);
    }
        return board;
      }
    
      renderSquare(i) {
        
    
        return{
         
      }
    }

    render(){
        return (
            <div>
            {this.createBoard(3, 3)}
            </div>
        )
    }
}

export default Board;