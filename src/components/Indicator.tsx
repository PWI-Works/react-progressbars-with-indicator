export type IIndicator = {
  size: number,
  color?: string,
}

export const Indicator = ({size, color}: IIndicator) => {

  const defaultColor = "#04001b";
  const width = size;
  const strokeWidth = 30;
  const triangleHeight = Math.tan(60 * Math.PI / 180) * ((width - strokeWidth) / 2);
  const height = triangleHeight + strokeWidth;
  const indicatorPathDescription = `M${strokeWidth / 2},${triangleHeight + strokeWidth / 2}` + // start at the bottom left corner
    `L${width / 2},${strokeWidth / 2}` + // move to top center
    `L${width - strokeWidth / 2},${triangleHeight + strokeWidth / 2}` +  // move to bottom right corner
    ` Z`;//close the path

  return (
    <svg
      width={size}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={indicatorPathDescription}
        fill={color || defaultColor}
        stroke={color || defaultColor}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}