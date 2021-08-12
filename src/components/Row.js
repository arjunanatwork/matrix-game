import React, { Component, Fragment } from "react";
import Item from "./Item";

class Row extends Component {
  constructor(props) {
    super(props);
    this.topTwo = [];
    this.state = {
      //state is by default an object
      table: [
        [
          { index: "Box 1", color: "blue", selected: false },
          { index: "Box 2", color: "blue", selected: false },
          { index: "Box 3", color: "blue", selected: false },
          { index: "Box 4", color: "blue", selected: false },
        ],
        [
          { index: "Box 5", color: "blue", selected: false },
          { index: "Box 6", color: "blue", selected: false },
          { index: "Box 7", color: "blue", selected: false },
          { index: "Box 8", color: "blue", selected: false },
        ],
        [
          { index: "Box 9", color: "blue", selected: false },
          { index: "Box 10", color: "blue", selected: false },
          { index: "Box 11", color: "blue", selected: false },
          { index: "Box 12", color: "blue", selected: false },
        ],
        [
          { index: "Box 13", color: "blue", selected: false },
          { index: "Box 14", color: "blue", selected: false },
          { index: "Box 15", color: "blue", selected: false },
          { index: "Box 16", color: "blue", selected: false },
        ],
      ],
    };
  }

  changeHandler = (colIndex, rowIndex) => {
    let items = [...this.state.table];

    if (this.topTwo.length !== 2) {
      this.topTwo.push({ colIndex, rowIndex });
    } else {
      // Resetting the Cell Content and Removing from Top Two
      let ele = this.topTwo.shift();
      let itemtoMutate = [...items[ele.rowIndex]];
      let a = { ...itemtoMutate[ele.colIndex] };
      a.selected = false;
      a.color = "blue";
      itemtoMutate[ele.colIndex] = a;
      items[ele.rowIndex] = itemtoMutate;
      this.topTwo.push({ colIndex, rowIndex });
    }

    this.topTwo.map((value, index) => {
      items.map((row, i) => {
        row.map((col, j) => {
          if (
            (value.rowIndex === i && value.colIndex === j) ||
            col.selected === true
          ) {
            let itemtoMutate = [...items[i]];
            let a = { ...itemtoMutate[j] };
            a.color = "red";
            a.selected = true;
            itemtoMutate[j] = a;
            items[i] = itemtoMutate;
          } else {
            let itemtoMutate = [...items[i]];
            let a = { ...itemtoMutate[j] };
            a.color = "blue";
            a.selected = false;
            itemtoMutate[j] = a;
            items[i] = itemtoMutate;
          }
        });
      });
    });
    this.setState({ table: items });
  };

  render() {
    return (
      <Fragment>
        <tbody>
          {this.state.table.map((row, i) => {
            return (
              <tr key={i}>
                {row.map((col, j) => {
                  return (
                    <Item
                      key={j}
                      rowIndex={i}
                      colIndex={j}
                      colIndexValue={col.index}
                      colorValue={col.color}
                      onClick={this.changeHandler}
                    />
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Fragment>
    );
  }
}

export default Row;
