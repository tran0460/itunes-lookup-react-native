import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const Compass = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.942 10.687a36.488 36.488 0 0 1-.008-2.265c.595.324 1.3.725 1.958 1.14.48.302.918.602 1.26.876.37.295.537.487.58.562.043.075.127.315.197.783.066.434.106.962.129 1.53.03.776.024 1.588.008 2.265-.595-.324-1.3-.725-1.958-1.14-.48-.303-.917-.603-1.26-.876-.37-.295-.537-.487-.58-.562-.043-.075-.126-.315-.197-.783a14.468 14.468 0 0 1-.129-1.53Z"
      stroke="#33363F"
      strokeWidth={2}
    />
    <Circle cx={12} cy={12} r={9} stroke="#33363F" strokeWidth={2} />
  </Svg>
);

export default Compass;
