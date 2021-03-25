import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

const useStyles = makeStyles({
  root: {},
});

function App() {
  const classes = useStyles();
  const notify = () => {
    console.log(Notification.permission);
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      new Notification("Hi it's just testing there!");
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          console.log("hey");
          new Notification("Hi it's just testing there!");
        }
      });
    }
  };
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      console.log("hey worker is nav");
      navigator.serviceWorker
        .register("/educational_dashboard/src/sw.js")
        .then(() => {
          console.log("Service Worker Registered");
        });
    }

    notify();
  }, []);
  return (
    <div className={classes.root}>
      <div className="row">
        <div className="column1">
          <Nav />
        </div>
        <div className="column2">
          <Dashboard />
        </div>
        <div className="column3">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
