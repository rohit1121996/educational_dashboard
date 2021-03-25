import "../index.css";
import { Player } from "video-react";
import img from "../image.svg";
import { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import flg from "../cc.svg";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CircularProgressWithLabel from "./CircularProgressWithLabel";
import { Button } from "@material-ui/core";
import Tabs from "./Tabs";
import {
  HiOutlineArrowCircleLeft,
  HiOutlineArrowCircleRight,
} from "react-icons/hi";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#dcdfe3",
    height: 150,
    borderRadius: 20,
  },
  greetText: {
    float: "left",
  },
  svgIcon: {
    marginTop: -20,
  },
  container: {
    backgroundColor: "#dcdfe3",
    margin: 10,
    borderRadius: 20,
    width: 570,
  },
  col1card2: {
    marginTop: 5,
    marginLeft: 20,
    float: "left",
  },
  col2card2: {
    marginTop: 10,
    marginLeft: 10,
  },
  col3card2: {
    marginTop: 25,
  },
  leftArrow: {
    marginTop: 20,
    fontSize: 60,
    cursor: "pointer",
  },
  rightArrow: {
    fontSize: 60,
    marginLeft: 40,
    marginTop: 20,
    cursor: "pointer",
  },
  dashboard: {
    width: 800,
    margin: 30,
    padding: 0,
  },
}));

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };
  const openVideoThatCourse = () => {
    setOpen(true);
  };
  return (
    <div className={classes.dashboard}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div className={classes.greetText}>
                <h1>Hello User!</h1>
                <p>It's good to see you again.</p>
              </div>
              <div className={classes.svgIcon}>
                <img src={img} alt="user" width="100" height="150" />
              </div>
            </Paper>
          </Grid>
          <Grid item>
            <Grid container spacing={0} className={classes.container}>
              <Grid item xs={6} sm={3}>
                <div className={classes.col1card2}>
                  <img src={flg} width="70" height="70" alt="cc"></img>
                </div>
              </Grid>
              <Grid item xs={6} sm={3}>
                <div className={classes.col2card2}>
                  <h3>English</h3>
                  <p style={{ marginTop: -15, fontSize: 12 }}>by arcus fello</p>
                </div>
              </Grid>
              <Grid item xs={6} sm={3} className={classes.col3card2}>
                <CircularProgressWithLabel />
              </Grid>
              <Grid item xs={6} sm={3} className={classes.col3card2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={openVideoThatCourse}
                >
                  Continue
                </Button>
                <Dialog
                  onClose={handleClose}
                  open={open}
                  className={classes.dialog}
                  fullScreen
                >
                  <div>
                    <Player>
                      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                    </Player>
                  </div>
                  <Button onClick={handleClose} color="primary">
                    Close
                  </Button>
                </Dialog>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item xs={6} sm={4}>
                <HiOutlineArrowCircleLeft className={classes.leftArrow} />
              </Grid>
              <Grid item xs={9} sm={4}>
                <HiOutlineArrowCircleRight className={classes.rightArrow} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div style={{ marginLeft: 10 }}>
        <h1>Courses</h1>
      </div>
      <div>
        <Tabs />
      </div>
    </div>
  );
};
export default Dashboard;
