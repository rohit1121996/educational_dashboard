import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import { MdNotificationsActive } from "react-icons/md";
const useStyles = makeStyles((theme) => ({
  notification: {
    fontSize: 30,
    cursor: "pointer",
  },
}));

export default function Notification() {
  const classes = useStyles();

  return (
    <div>
      <Badge badgeContent={4} color="error">
        <MdNotificationsActive className={classes.notification} />
      </Badge>
    </div>
  );
}
