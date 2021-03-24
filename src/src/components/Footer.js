import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Search from "./Search";
import Notification from "./Notification";
import Profile from "./Profile";
import Premium from "./Premium";
import Graph from "./Graph";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 30,
    padding: 0,
  },
  box: {
    height: 90,
    backgroundColor: "#dcdfe3",
    borderRadius: 20,
    textAlign: "center",
  },
  acountPremium: {
    height: 180,
    backgroundColor: "#dcdfe3",
    borderRadius: 20,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ width: "100%", height: 60 }}>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <Search />
            </Grid>
            <Grid item xs={1}>
              <Notification />
            </Grid>
            <Grid item xs={1}>
              <Profile />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={10} style={{ width: "100%", height: 110 }}>
          <Grid container spacing={3}>
            <Grid item xs={6} style={{ padding: 10 }}>
              <div className={classes.box}>
                <div style={{ fontSize: 60, fontWeight: "bold" }}>11</div>
                <div>Cources completed</div>
              </div>
            </Grid>
            <Grid item xs={6} style={{ padding: 10 }}>
              <div className={classes.box}>
                <div style={{ fontSize: 60, fontWeight: "bold" }}>4</div>
                <div>Cources in progress</div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ width: "100%", height: 450 }}>
          <div style={{ fontWeight: "bold", fontSize: 20, marginTop: 20 }}>
            Your statistics
          </div>
          <div style={{ marginTop: 40 }}>
            <Graph />
          </div>
        </Grid>
        <Grid item xs={10}>
          <div className={classes.acountPremium}>
            <Premium />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
