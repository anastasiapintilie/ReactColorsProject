import sizes from "./sizes";

export default{
  Navbar: {
    display: "flex",
    alignItems: "center",
    height: "6vh",
    justifyContent: "flex-start",
  },
  logo: {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "22px",
    backgroundColor: "#eceff1",
    height: "100%",
    display: "flex",
    alignItems: "center",
    fontFamily: "'Big Shoulders Display', cursive",
    "&:a": {
      textDecoration: "none",
      color: "black",
    },
    [sizes.down("xs")]:{
      display:"none"
    }
  },

  Slider: {
    width: "350px",
    margin: "0 10px",
    display: "inline-block",

    "& .rc-slider-track": {
      backgroundColor: "transparent",
    },

    "& .rc-slider-rail": {
      height: "8px",
    },

    "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
      backgroundColor: "green",
      outline: "none",
      border: "2px solid green",
      boxShadow: "none",
      width: "13px",
      height: "13px",
      marginTop: "-3px",
      marginLeft: "-7px",
    },
    [sizes.down("md")]:{
      width:"150px"
    }
  },
  selectContainer: {
    marginRight: "1rem",
    marginLeft: "auto",
  },
};