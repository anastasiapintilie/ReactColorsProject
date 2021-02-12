import React, { Component } from "react";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";
import styles from './styles/PaletteStyles'
import { withStyles } from "@material-ui/styles";


class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      colorFormat: "hex",
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  changeFormat(val) {
    this.setState({ colorFormat: val });
  }
  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const { level, colorFormat } = this.state;
    let colorBoxes = colors[level].map((color) => (
      <ColorBox
        background={color[colorFormat]}
        name={color.name}
        key={color.id}
        showingFullPalette={true} //showingFullPalette
        moreUrl={`/palette/${id}/${color.id}`}
      />
    ));
    return (
      <div className={classes.palette}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showSlider={true}
        />
        <div className={classes.paletteColors}>{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />

      </div>
    );
  }
}
export default withStyles(styles)(Palette);
