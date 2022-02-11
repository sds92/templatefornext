import * as React from "react";

function Icon1(props) {
  return (
    <svg
      width="32mm"
      height="28mm"
      viewBox="0 0 3200 2800"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      {...props}
    >
      <path
        d="M718.4 583.26h211.64l-529.1 705.46h282.19L-.2 2245.39l1000.79-4.29v458.55h317.46V2241.1h252.41l241.41-317.46h-176.36l211.64-317.46-246.92-317.46h282.19l-493.83-705.46h176.37L1161.08 17.13 718.4 583.26zm1410.93 740.73h105.82l-317.46 458.56h176.37l-458.55 599.64h599.64v423.28h317.46v-423.28h599.64l-458.55-599.64h176.37l-317.46-458.56h105.82l-264.55-403.88-264.55 403.88z"
        fill="#ff0026"
      />
    </svg>
  );
}

const MemoIcon1 = React.memo(Icon1);
export default MemoIcon1;
