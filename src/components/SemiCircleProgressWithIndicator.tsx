import {Indicator} from "~/components/Indicator";

export interface ISemiCircleProgressWithIndicator {
  strokeWidth: number;
  strokeLinecap?: "butt" | "round" | "square" | "inherit";
  percentage: number;
  indicatorPercentage?: number;
  percentageSeparator?: string;
  strokeColor?: string;
  indicatorColor?: string;
  indicatorRelativeSize?: number;
  includeText?: boolean;
  fontStyle?: {
    fontSize: string;
    fontFamily?: string;
    fontWeight: string;
    fill: string;
  };
  hasBackground?: boolean;
  bgStrokeColor?: string;
}

export const SemiCircleProgressWithIndicator = ({
                                                  strokeWidth,
                                                  percentage,
                                                  indicatorPercentage,
                                                  strokeColor = "#04001b",
                                                  indicatorColor = "#04001b",
                                                  indicatorRelativeSize = 0.6,
                                                  strokeLinecap = "round",
                                                  percentageSeparator,
                                                  includeText = false,
                                                  fontStyle,
                                                  hasBackground = true,
                                                  bgStrokeColor = "#d3d3d3",
                                                }: ISemiCircleProgressWithIndicator) => {


  const baseWidth = 100;

  if (percentage < 0 || percentage > 100) {
    throw new Error("Percentage must be between 0 and 100");
  }

  if (indicatorPercentage != undefined && (indicatorPercentage < 0 || indicatorPercentage > 100)) {
    throw new Error("Indicator percentage must be between 0 and 100");
  }

  if (isNaN(strokeWidth) || strokeWidth <= 0) {
    throw new Error("Stroke width must be a positive number");
  }

  const indicatorWidth = strokeWidth * (indicatorRelativeSize || 0.6);
  const strokeIndicatorGap = strokeWidth * 0.1;
  const showIndicator = indicatorPercentage !== undefined;

  const indicatorOffset = showIndicator ? indicatorWidth + strokeIndicatorGap : 0;
  const pathDiameter = baseWidth - strokeWidth - indicatorOffset * 2;
  const radius = pathDiameter / 2;
  const circumference =  Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference - (percentage === 0 ? .00002 : 0);
  const bgStrokeDashoffset = 0;
  const pathStartX = strokeWidth / 2 + indicatorOffset;
  const pathBottomY = radius + strokeWidth / 2 + indicatorOffset;
  const pathCenterX = pathStartX + pathDiameter / 2;
  const pathDescription = `M${pathStartX},${pathBottomY} a1,1 0 0,1 ${pathDiameter},0`;

  // Calculate the position of the indicator
  const indicatorStyle = 'equilateral';
  const indicatorTranslateX = pathDiameter/2 + strokeWidth/2 + strokeIndicatorGap;
  const indicatorRotationAngle = (indicatorPercentage || 0) / 100 * 180;


  const indicator = (<Indicator width={indicatorWidth} color={indicatorColor} style={indicatorStyle}/>);
  // Wrap the Indicator component in a g and apply the transform attribute
  const placedIndicator = (
    <g
      style={{
        transition: "transform 0.35s",
      }}
      transform={`rotate(${indicatorRotationAngle}, ${pathCenterX}, ${pathBottomY}) translate(-${indicatorTranslateX})`}> {/*rotate the indicator and move outside the arc*/}
      <g transform={`translate(${pathCenterX}, ${pathBottomY - indicatorWidth/2}) rotate(90)`}> {/*set start position of indicator to point at dead center*/}
        {indicator}
      </g>
    </g>
  );

  const height = pathBottomY + ((strokeLinecap === "round" || strokeLinecap === "square") ? strokeWidth / 2 : indicatorWidth / 2);

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${baseWidth} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className="_half-circular-progress"
    >
      {hasBackground && (
        <path
          d={pathDescription}
          style={{
            transition: "stroke-dashoffset 0.35s",
            stroke: bgStrokeColor,
            strokeLinecap: strokeLinecap,
            strokeDasharray: `${circumference}`,
            strokeDashoffset: `${bgStrokeDashoffset}`,
            strokeWidth: `${strokeWidth}`,
          }}
          fill="none"
        />
      )}
      <path
        d={pathDescription}
        style={{
          transition: "stroke-dashoffset 0.35s",
          stroke: strokeColor,
          strokeLinecap: strokeLinecap,
          strokeDasharray: `${circumference}`,
          strokeDashoffset: `${strokeDashoffset}`,
          strokeWidth: `${strokeWidth}`,
        }}
        fill="none"
      />

      {showIndicator && placedIndicator}

      {includeText && <text
          x="50%"
          y="98%"
          textAnchor="middle"
          fontSize="90"
          fontFamily="Arial"
          fill="#04001b"
          style={{
            ...fontStyle,
          }}
      >
        {percentage}
        {percentageSeparator || "%"}
      </text>}
    </svg>
  );
};
