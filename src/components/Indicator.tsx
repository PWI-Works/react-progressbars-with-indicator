export type IIndicator = {
  size: number,
  color?: string,
}

export const Indicator = ({ size, color }: IIndicator) => {
  //const indicatorPathDescription = "M11.268 0.999999C12.0378 -0.333335 13.9623-0.333333 14.7321 1L25.1244 19C25.8942 20.3333 24.9319 22 23.3923 22L2.60769 22C1.06809 22 0.105844 20.3333 0.875645 19L11.268 0.999999Z";


  // makes sure the indicator is actually the specified size
  const sizeMultiplierX = 3.5;
  const sizeMultiplierY = 3.4;

  const width = size;
  const height = size;
  const triangleHeight = Math.tan(60 * Math.PI / 180) * (width / 2);
  const indicatorPathDescription = `M0,${triangleHeight} L${width/2},0 L${width},${triangleHeight} Z`;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0"
        y="0"
        width={width}
        height={height}
        fill="#04001b"/>
      <path
        d={indicatorPathDescription}
        fill={color || "#04001b"}/>
    </svg>
  );
}