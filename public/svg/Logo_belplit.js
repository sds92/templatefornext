import * as React from "react";

function Logo_belplit(props) {
  return (
    <svg
      width={198}
      height={198}
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      {...props}
    >
      <path
        d="M0 198h198v-22H22V0H0v198zM44 22h66V0H44v22zm0 44h66V44H44v22zm0 44h154V88H44v22zm0 44h154v-22H44v22zm88-88h66V0h-66v66z"
        fill="red"
      />
      <path fill="none" d="M-157 355H41" />
    </svg>
  );
}

const MemoLogo_belplit = React.memo(Logo_belplit);
export default MemoLogo_belplit;
