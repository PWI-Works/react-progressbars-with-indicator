export type IIndicator = {
  size: number,
  color?: string,
}

export const Indicator = ({ size, color }: IIndicator) => {

  const indicatorPathDescription = "M11.268 0.999999C12.0378 -0.333335 13.9623-0.333333 14.7321 1L25.1244 19C25.8942 20.3333 24.9319 22 23.3923 22L2.60769 22C1.06809 22 0.105844 20.3333 0.875645 19L11.268 0.999999Z";

  return (
    <svg
      width={size*3}
      height={size*3}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={indicatorPathDescription}
        fill={color || "#04001b"}/>
    </svg>
  );
}