import { React, Component } from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { SortableElement } from "react-sortable-hoc";
import styles from "./styles/DraggableColorBoxStyles";


const DraggableColorBox = SortableElement((props) => {
  const { classes, newName, color, handleClick } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{newName}</span>
        <span>
          <DeleteIcon className={classes.delete} onClick={handleClick} />
        </span>
      </div>
    </div>
  );
});
export default withStyles(styles)(SortableElement(DraggableColorBox));
