import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles({
  root: {},
});

function App() {
  const classes = useStyles();

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
