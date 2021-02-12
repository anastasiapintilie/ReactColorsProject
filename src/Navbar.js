import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/styles";
import styles from './styles/NavbarStyles';
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "rc-slider/assets/index.css";


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorFormat: "hex",
      open: false,
    };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackBar = this.closeSnackBar.bind(this);
  }
  handleFormatChange(e) {
    this.setState({ colorFormat: e.target.value, open: true }, () => {
      this.props.handleChange(this.state.colorFormat);
    });
  }
  closeSnackBar() {
    this.setState({ open: false });
  }
  render() {
    const {
      changeLevel,
      level,
      handleChange,
      showSlider,
      classes,
    } = this.props;
    const { colorFormat } = this.state;
    return (
      <header className={classes.Navbar}>
        <div className={classes.logo}>
          <Link exact to="/">
            reactColorPicker
          </Link>
        </div>
        {showSlider && (
          <div>
            <span> Level:{level}</span>
            <div className={classes.Slider}>
              <Slider
                defaultValue={level}
                step={100}
                min={100}
                max={900}
                onAfterChange={changeLevel}
              />
            </div>
          </div>
        )}
        <div className={classes.selectContainer}>
          <Select onChange={this.handleFormatChange} value={colorFormat}>
            <MenuItem value="hex">Hex - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,1)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.open}
          autoHideDuration={2000}
          message={
            <span id="message-id">{`Format changed to ${this.state.colorFormat.toUpperCase()}`}</span>
          }
          ContentProps={{
            "aria-describeby": "message-id",
          }}
          onClose={this.closeSnackBar}
          action={[
            <IconButton
              onClick={this.closeSnackBar}
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </header>
    );
  }
}
export default withStyles(styles)(Navbar);
