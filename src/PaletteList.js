import React, { Component } from "react";
import Palette from "./Palette";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import { blue } from "@material-ui/core/colors";
import styles from "./styles/PaletteListStyles";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class PaletteList extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      open:false,
      paletteToDelete:""
    }
    this.handleDelete=this.handleDelete.bind(this);
    this.goToPalette=this.goToPalette.bind(this);
  }
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
    
  }
  handleClickOpen = (id) => {
    this.setState({ open: true ,paletteToDelete:id});
  };

  handleClose = () => {
    this.setState({ open: false, paletteToDelete:"" });
  };
  handleDelete=()=>{
    this.props.deletePalette(this.state.paletteToDelete);
    this.handleClose();
  }
  render() {
    const { palettes, classes, deletePalette } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React colors</h1>
            <Link to="/palette/new">Create Pallete</Link>
          </nav>
            <TransitionGroup className={classes.palettes}>
            {palettes.map((p) => (
              <CSSTransition key={p.id} classNames='fade' timeout={600}>
              <MiniPalette
                {...p}
                handleClick={this.goToPalette}
                handleDelete={this.handleClickOpen}
                key={p.id}
                id={p.id}
              />
              </CSSTransition>
            ))}
            </TransitionGroup>
        </div>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Delete palette"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
             Are you sure you want to delete this palette?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleDelete} color="primary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default withStyles(styles)(PaletteList);
