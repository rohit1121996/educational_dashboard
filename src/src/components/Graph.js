import Chart from "./Chart";
import { BiChevronDown } from "react-icons/bi";
const Premium = () => {
  return (
    <div>
      <span style={{ fontWeight: "bold" }}>Learning Hours </span>
      <span style={{ marginLeft: 40, color: "GrayText", fontWeight: "bold" }}>
        My courses
      </span>
      <span
        style={{
          float: "right",
          marginRight: 150,
          width: 90,
          height: 30,
          backgroundColor: "#dcdfe3",
          borderRadius: 4,
        }}
      >
        <div
          style={{
            marginTop: 5,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          <span style={{ marginTop: 20 }}>
            Weekly <BiChevronDown />
          </span>
        </div>
      </span>
      <div style={{ marginTop: 20 }}>
        <Chart />
      </div>
    </div>
  );
};
export default Premium;
