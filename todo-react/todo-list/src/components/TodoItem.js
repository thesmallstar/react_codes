import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

import FormControlLabel from "@material-ui/core/FormControlLabel";

function TodoItem() {
  return (
    <FormControlLabel
      value="end"
      control={<Checkbox color="primary" />}
      label="End"
      labelPlacement="start"
    />
  );
}

export default TodoItem;
