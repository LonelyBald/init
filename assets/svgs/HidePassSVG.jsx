import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const HidePassSVG = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      aria-labelledby="eyeClosedIconTitle"
      stroke="#000"
      strokeLinecap="square"
      fill="none"
      {...props}
    >
      <Path d="M20 9s-.32.667-1 1.514M12 14a8.478 8.478 0 01-4.051-1M12 14a8.478 8.478 0 004.051-1M12 14v3.5M4 9s.354.737 1.106 1.645M7.95 13L5 16m2.949-3c-1.26-.673-2.198-1.577-2.843-2.355M16.051 13l2.449 3m-2.449-3c1.33-.711 2.303-1.68 2.949-2.486m-13.894.13L2 12m17-1.486L22 12" />
    </Svg>
  );
};
