import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    cursor: "pointer",
  },
}));

export default function Profile() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar
        className={classes.avatar}
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
      />
    </div>
  );
}
