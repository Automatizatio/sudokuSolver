import React from 'react';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: Array(9).fill().map(() => Array(9).fill(null))
    };
  }

  handleClick() {
    console.log(this.state.grid);
  }

  render() {
    return (
      <div>
        {this.state.grid.map((row, i) => (
          <div key={i}>
            {row.map((cell, j) => (
              <input
                key={j}
                type="number"
                value={cell}
                onChange={e => {
                  const grid = this.state.grid.slice();
                  grid[i][j] = parseInt(e.target.value, 10);
                  this.setState({grid});
                }}
              />
            ))}
          </div>
        ))}
        <button onClick={() => this.handleClick()}>Submit</button>
      </div>
    );
  }
}

export default Grid;

