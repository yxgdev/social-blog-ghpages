import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    width: "50%",
    marginTop: "20px",
  },
  grid: {
    padding: "10px 0px",
  },
  form: {},
  paper: {
    padding: "30px",
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  textField: {
    maxWidth: "30%",
  },
  fileBase: {
    display: "flex",
    justifyContent: "start",
    marginTop: "20px",
  },
  buttonItem: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "start",
  },
}));

//
//

//
