import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
    marginTop: "20px",
    maxWidth: "50%",
  },
  paper: {
    padding: "20px",
    backgroundColor: "white",
  },
  paperT: {
    padding: "20px",
    backgroundColor: "transparent",
  },
  grid: {
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  link: {
    textDecoration: "none",
  },
  button: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
    },
  },
}));
