import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

import FormControlLabel from "@material-ui/core/FormControlLabel";

class TodoItem extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <FormControlLabel
        value="end"
        control={<Checkbox color="primary" />}
        label={this.props.t}
        labelPlacement="start"
        checked={this.props.s}
        onChange={event => this.props.change(this.props.id)}
      />
    );
  }
}

export default TodoItem;
