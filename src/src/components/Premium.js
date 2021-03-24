import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import brainimg from "../brain.svg";
const Premium = () => {
  return (
    <div style={{ padding: 10 }}>
      <Grid container spacing={2}>
        <Grid item xs={4} style={{ marginLeft: 20 }}>
          <div style={{ marginTop: 10, fontWeight: "bold", fontSize: 20 }}>
            Learn even more!
          </div>
          <p>Unlock premium features only for $9.99 per month</p>
          <div>
            <Button variant="contained" color="primary">
              Go premium
            </Button>
          </div>
        </Grid>
        <Grid item xs={4}>
          <img
            style={{ marginLeft: 40 }}
            src={brainimg}
            alt="brainImage"
            width="200"
            height="150"
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default Premium;
