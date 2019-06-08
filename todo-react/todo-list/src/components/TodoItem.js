import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

import FormControlLabel from "@material-ui/core/FormControlLabel";

function TodoItem(props) {
  console.log(props.t);
  return (
    <FormControlLabel
      value="end"
      control={<Checkbox color="primary" />}
      label={props.t}
      labelPlacement="start"
      checked={props.s}
    />
  );
}

export default TodoItem;
