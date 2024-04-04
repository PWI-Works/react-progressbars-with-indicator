export type ISemiCircleProgressWithIndicator = {
  strokeWidth: number;
  strokeLinecap?: "butt" | "round" | "square" | "inherit";
  percentage: number;
  indicatorPercentage?: number;
  percentageSeparator?: string;
  size: {
    width: number;
    height: number;
  };
  strokeColor?: string;
  indicatorColor?: string;
  includeText?: boolean;
  fontStyle?: {
    fontSize: string;
    fontFamily?: string;
    fontWeight: string;
    fill: string;
  };
  hasBackground?: boolean;
  bgStrokeColor?: string;
};

export const SemiCircleProgressWithIndicator = ({
                                           strokeWidth,
                                           percentage,
                                           indicatorPercentage,
                                           strokeColor,
                                           indicatorColor,
                                           size,
                                           strokeLinecap,
                                           percentageSeparator,
                                           includeText = false,
                                           fontStyle,
                                           hasBackground = false,
                                           bgStrokeColor,
                                         }: ISemiCircleProgressWithIndicator) => {
  const defaultStrokeColor = "#04001b";
  const defaultBackgroundColor = "#d3d3d3";

  if (percentage < 0 || percentage > 100) {
    throw new Error("Percentage must be between 0 and 100");
  }

  if (isNaN(strokeWidth) || strokeWidth <= 0) {
    throw new Error("Stroke width must be a positive number");
  }

  if (
    isNaN(size.width) ||
    size.width <= 0 ||
    isNaN(size.height) ||
    size.height <= 0
  ) {
    throw new Error("Size must be a positive number");
  }

  const radius = 50 - strokeWidth / 2;
  const circumference = 1.1 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  const bgStrokeDashoffset = circumference - 1 * circumference;
  const pathDescription = "M5,64 a1,1 0 0,1 90,0";
  const indicatorPathDescription = "M11.268 0.999999C12.0378 -0.333335 13.9623-0.333333 14.7321 1L25.1244 19C25.8942 20.3333 24.9319 22 23.3923 22L2.60769 22C1.06809 22 0.105844 20.3333 0.875645 19L11.268 0.999999Z";

  return (
    <svg
      width={size.width}
      height={size.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="_half-circular-progress"
    >
      {hasBackground && (
        <path
          cx="45"
          cy="45"
          r="32"
          d={pathDescription}
          style={{
            transition: "stroke-dashoffset 0.35s",
            stroke: bgStrokeColor || defaultBackgroundColor,
            strokeLinecap: strokeLinecap || "round",
            strokeDasharray: `${circumference}`,
            strokeDashoffset: `${bgStrokeDashoffset}`,
            strokeWidth: `${strokeWidth}`,
          }}
          fill="none"
        />
      )}
      <path
        cx="45"
        cy="45"
        r="32"
        d={pathDescription}
        style={{
          transition: "stroke-dashoffset 0.35s",
          stroke: strokeColor || defaultStrokeColor,
          strokeLinecap: strokeLinecap || "round",
          strokeDasharray: `${circumference}`,
          strokeDashoffset: `${strokeDashoffset}`,
          strokeWidth: `${strokeWidth}`,
        }}
        fill="none"
      />

      {indicatorPercentage && <path
        d={indicatorPathDescription}
        fill={indicatorColor || defaultStrokeColor}/>}

      <animate
        attributeName="stroke-dashoffset"
        from="283"
        to="0"
        dur="1s"
        fill="freeze"
      />

      {includeText && <text
          x="52%"
          y="60%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="20"
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
