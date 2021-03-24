import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
} from "@devexpress/dx-react-chart-material-ui";
import { SplineSeries } from "@devexpress/dx-react-chart-material-ui";

import { withStyles } from "@material-ui/core/styles";
import { ArgumentScale, Animation } from "@devexpress/dx-react-chart";
import { curveCatmullRom, line } from "d3-shape";
import { scalePoint } from "d3-scale";

import { data } from "../data";

const Line = (props) => (
  <SplineSeries.Path
    {...props}
    path={line()
      .x(({ arg }) => arg)
      .y(({ val }) => val)
      .curve(curveCatmullRom)}
  />
);
const demoStyles = () => ({
  chatSize: {
    width: 600,
    height: 320,
  },
});
class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;
    const { classes } = this.props;

    return (
      <Paper className={classes.chatSize}>
        <Chart height="320" data={chartData}>
          <ArgumentScale factory={scalePoint} />
          <ArgumentAxis />
          <ValueAxis />
          <SplineSeries
            name="Progress"
            valueField="hour"
            argumentField="day"
            seriesComponent={Line}
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}

export default withStyles(demoStyles, { name: "Demo" })(Demo);
