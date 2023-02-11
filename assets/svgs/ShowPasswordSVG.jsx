import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const ShowPasswordSVG = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      {...props}
    >
      <Path d="M-896 -256H384V544H-896z" fill="none" />
      <Path d="M32.513 13.926c10.574.15 19.249 9.657 23.594 17.837 0 0-1.529 3.129-2.963 5.132a46.344 46.344 0 01-2.191 2.826 41.265 41.265 0 01-1.698 1.898c-5.237 5.5-12.758 9.603-20.7 8.01-8.823-1.77-16.02-9.33-20.346-17.461 0 0 1.536-3.132 2.978-5.132a45.105 45.105 0 012.034-2.617 41.618 41.618 0 011.691-1.897c4.627-4.876 10.564-8.63 17.601-8.596zm-.037 4c-5.89-.022-10.788 3.267-14.663 7.35a37.553 37.553 0 00-1.527 1.713 41.472 41.472 0 00-1.854 2.386c-.589.816-1.193 1.846-1.672 2.721 3.814 6.409 9.539 12.198 16.582 13.611 6.563 1.317 12.688-2.301 17.016-6.846a37.224 37.224 0 001.534-1.715c.7-.833 1.366-1.694 1.999-2.579.586-.819 1.189-1.851 1.667-2.727-3.958-6.625-10.73-13.784-19.082-13.914z" />
      <Path d="M32.158 23.948c4.425 0 8.018 3.593 8.018 8.017a8.021 8.021 0 01-8.018 8.017 8.021 8.021 0 01-8.017-8.017 8.022 8.022 0 018.017-8.017zm0 4.009a4.01 4.01 0 014.009 4.008 4.01 4.01 0 01-4.009 4.009 4.01 4.01 0 01-4.008-4.009 4.01 4.01 0 014.008-4.008z" />
    </Svg>
  );
};