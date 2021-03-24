import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { GoSearch } from "react-icons/go";
import "../index.css";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  TextField: {
    width: "100%",
    backgroundColor: "#dcdfe3",
    padding: 10,
    border: "none",
    borderRadius: 5,
    boxShadow: "none",
  },
  icon: {
    position: "absolute",
    bottom: 4,
    right: 5,
    width: 24,
    height: 24,
    float: "left",
  },
  inputContainer: {
    position: "relative",
    background: "#ddd",
    borderRadius: 20,
    width: "100%",
  },
}));

export default function Search() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.inputContainer}>
        <GoSearch className={classes.icon} />
        <input
          type="text"
          placeholder="Search.."
          name="search"
          className={classes.TextField}
        ></input>
      </div>
    </div>
  );
}
