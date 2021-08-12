import React, { Fragment, useState } from "react";

const Item = (props) => {
  const [value, setValue] = useState("");
  const itemClicked = (colIndexValue, rowIndex, colIndex) => {
    props.onClick(colIndex, rowIndex);
    setValue(colIndexValue);
  };

  return (
    <Fragment>
      <td
        style={{ backgroundColor: props.colorValue }}
        onClick={() =>
          itemClicked(props.colIndexValue, props.rowIndex, props.colIndex)
        }
      >
        {value}
      </td>
    </Fragment>
  );
};

export default Item;
