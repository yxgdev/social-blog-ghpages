import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  container: {
    marginTop: "20px",
  },
  paper: {
    padding: "50px",
    position: "relative",
  },
  paragraph: {
    marginTop: "20px",
    fontFamily: ["Poppins", "sans-serif"].join(","),
    wordWrap: "break-word",
    textAlign: "left",
  },
  title: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  author: { fontFamily: ["Poppins", "sans-serif"].join(",") },
  content: { fontFamily: ["Poppins", "sans-serif"].join(",") },
  date: { fontFamily: ["Poppins", "sans-serif"].join(",") },
  image: {
    minHeight: "20%",
    minWidth: "200px",
    maxHeight: "20%",
    maxWidth: "50%",
  },
  button: {
    marginTop: "5%",
  },
}));
