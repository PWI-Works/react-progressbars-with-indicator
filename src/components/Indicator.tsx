export type IIndicator = {
  width: number,
  color?: string,
  style?: 'equilateral' | 'square'
}

export const Indicator = ({width, color, style}: IIndicator) => {

  const defaultColor = "#04001b";
  const strokeWidth = Math.floor(width/3);
  //defaults to fill if equilateral is not specified
  const triangleHeight = style == 'equilateral' ? Math.tan(60 * Math.PI / 180) * ((width - strokeWidth) / 2) : width-strokeWidth;
  const height = triangleHeight + strokeWidth;
  const indicatorPathDescription = `M${strokeWidth / 2},${triangleHeight + strokeWidth / 2} ` + // start at the bottom left corner
    `L${width / 2},${strokeWidth / 2} ` + // move to top center
    `L${width - strokeWidth / 2},${triangleHeight + strokeWidth / 2} ` +  // move to bottom right corner
    `Z`;//close the path

  return (
    <svg
      width={width}
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