import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { GiGraduateCap } from "react-icons/gi";
import { VscSignOut } from "react-icons/vsc";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
  logo: {
    fontSize: 50,
    color: "#fff",
    cursor: "pointer",
  },
  home: {
    fontSize: 30,
    color: "#fff",
    marginTop: 80,
    cursor: "pointer",
  },
  message: {
    fontSize: 30,
    color: "#fff",
    marginTop: 30,
    cursor: "pointer",
  },
  setting: {
    fontSize: 30,
    color: "#fff",
    marginTop: 30,
    cursor: "pointer",
  },
  user: {
    fontSize: 30,
    color: "#fff",
    marginTop: 30,
    cursor: "pointer",
  },
  courses: {
    fontSize: 30,
    color: "#fff",
    marginTop: 30,
    cursor: "pointer",
  },
  signOut: {
    fontSize: 25,
    color: "#fff",
    marginTop: 250,
    cursor: "pointer",
  },
});

export default function OutlinedCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.logo}>F.</div>
      <div className={classes.home}>
        <AiFillHome />
      </div>
      <div className={classes.courses}>
        <GiGraduateCap className="gradution-icon" />
      </div>
      <div className={classes.user}>
        <FiUser className="user-icon" />
      </div>
      <div className={classes.message}>
        <HiOutlineMail className="mail-icon" />
      </div>
      <div className={classes.setting}>
        <IoSettingsOutline className="setting-icon" />
      </div>
      <div className={classes.signOut}>
        <VscSignOut className="out" />
      </div>
    </div>
  );
}
