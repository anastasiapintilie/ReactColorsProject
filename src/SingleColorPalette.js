import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import PaletteFooter from "./PaletteFooter";
import styles from './styles/PaletteStyles'
import { withStyles } from "@material-ui/styles";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = {
      colorFormat: "hex",
    };
    this.changeFormat = this.changeFormat.bind(this);
  }
  gatherShades(palette, idx) {
    let shades = [];
    let allColor = palette.colors;
    for (let key in allColor) {
      shades = shades.concat(allColor[key].filter((color) => color.id === idx));
    }
    return shades.slice(1); //fara prima culoare
  }
  changeFormat(val) {
    this.setState({ colorFormat: val });
  }
  render() {
    const colorFormat = this.state.colorFormat;
    const { paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    // console.log(this.props);
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[colorFormat]}
        showingFullPalette={false}
      />
    ));
    return (
      <div className={classes.palette}>
        <Navbar handleChange={this.changeFormat} showSlider={false} />
        <div className={classes.paletteColors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`}>Go back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}
export default withStyles(styles)(SingleColorPalette);
