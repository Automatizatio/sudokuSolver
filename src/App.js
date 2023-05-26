import React, { useState } from "react";

const Grid = () => {
  // Initialize an empty 9x9 grid
  const [grid, setGrid] = useState(Array(9).fill().map(() => Array(9).fill("")));

  // Handle the change of a cell value
  const handleChange = (e, row, col) => {
    // Get the new value and validate it
    let value = e.target.value;
    if (value === "" || (value >= 1 && value <= 9)) {
      // Copy the grid and update the cell
      let newGrid = [...grid]
      newGrid[row][col] = value;
      // Set the new grid state
      setGrid(newGrid);
    }
    console.log(grid)
  };

  // Handle the click of the first button
  const handleClick1 = () => {
    // Log the grid as a 2D array
    console.log(grid);
  };

  // Handle the click of the second button
  const handleClick2 = (newGrid) => {
    // Set the grid to the parameter
    console.log('before grid change')
    console.log(grid)
    grid[0][5] = '6'
    console.log('after grid change')
    console.log(grid)
    let newGrid1 = [...grid]
    
    // Set the new grid state
    setGrid(newGrid1);

    //setGrid(grid)
  };

  return (
    <div className="grid">
      {/* Render the grid as a table */}
      <table>
        <tbody>
          {grid.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>
                  {/* Use an input element for each cell */}
                  <input
                    type="text"
                    value={cell}
                    onChange={(e) => handleChange(e, i, j)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Render the buttons */}
      <button onClick={handleClick1}>Get grid as 2D array</button>
      <button onClick={() => handleClick2([[1,2,3],[4,5,6],[7,8,9]])}>Set grid</button>
    </div>
  );
};

export default Grid;
