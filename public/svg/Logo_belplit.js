import * as React from "react";

function Logo_belplit(props) {
  return (
    <svg
      width={512}
      height={512}
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      {...props}
    >
      <path
        d="M0 256l256 256 28.44-28.44L56.89 256 284.44 28.44 256 0 0 256zM284.44 85.33l85.34 85.34 28.44-28.45-85.33-85.33-28.45 28.44zm-56.88 56.89l85.33 85.34 28.44-28.45L256 113.78l-28.44 28.44zm-56.89 56.89l199.11 199.11 28.44-28.44-199.11-199.11-28.44 28.44zM113.78 256l199.11 199.11 28.44-28.44-199.11-199.11L113.78 256zm227.55 0l85.34 85.33L512 256l-85.33-85.33L341.33 256z"
        fill="red"
      />
    </svg>
  );
}

const MemoLogo_belplit = React.memo(Logo_belplit);
export default MemoLogo_belplit;
