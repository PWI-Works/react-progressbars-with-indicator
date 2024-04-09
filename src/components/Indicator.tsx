export type IIndicator = {
  width: number,
  color?: string,
  style?: 'equilateral' | 'fill-square'
  cornerRadius?: number,
}

export const Indicator = ({width, color, style, cornerRadius}: IIndicator) => {

  if (cornerRadius != undefined && (cornerRadius <= 0 || cornerRadius > width / 3)) {
    throw new Error("Corner radius must be a positive number and less than one third the width");
  }

  const defaultColor = "#04001b";
  const strokeWidth = cornerRadius ? cornerRadius * 2 : width/3;
  //defaults to fill if equilateral is not specified
  const triangleHeight = style == 'fill-square' ? width-strokeWidth : Math.tan(60 * Math.PI / 180) * ((width - strokeWidth) / 2);
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