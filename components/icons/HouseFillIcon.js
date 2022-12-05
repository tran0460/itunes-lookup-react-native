import * as React from "react";
import Svg, { Path } from "react-native-svg";

const HouseFillIcon = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.274 10.126C5 10.723 5 11.402 5 12.76V17c0 1.887 0 2.83.586 3.415.531.532 1.357.58 2.914.585V16a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v5c1.557-.005 2.383-.054 2.914-.586C19 19.828 19 18.886 19 17v-4.24c0-1.358 0-2.037-.274-2.634-.275-.597-.79-1.038-1.821-1.922l-1-.857C14.04 5.75 13.11 4.95 12 4.95c-1.11 0-2.041.799-3.905 2.396l-1 .857c-1.03.884-1.546 1.325-1.82 1.922ZM13.5 21v-5h-3v5h3Z"
      fill="#222"
    />
  </Svg>
);

export default HouseFillIcon;
